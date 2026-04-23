param(
  [Parameter(Mandatory = $true)]
  [string]$PagePath,

  [Parameter(Mandatory = $true)]
  [string]$OutputFolder
)

$ErrorActionPreference = "Stop"

$baseSiteUrl = [Uri]"https://twinflamesmastersof.love"
$siteUrl = [Uri]::new($baseSiteUrl, $PagePath)
$uri = $siteUrl
$root = Join-Path $PSScriptRoot "..\\public_clean\\$OutputFolder"

if (-not (Test-Path $root)) {
  New-Item -ItemType Directory -Path $root -Force | Out-Null
}

function Get-LocalUrl([Uri]$target) {
  $localPath = Get-LocalPath $target
  return "/$OutputFolder/" + [IO.Path]::GetFileName($localPath)
}

function Get-LocalPath([Uri]$target) {
  $hashBytes = [Security.Cryptography.MD5]::Create().ComputeHash([Text.Encoding]::UTF8.GetBytes($target.AbsoluteUri))
  $hash = ([BitConverter]::ToString($hashBytes)).Replace("-", "").ToLowerInvariant()
  $ext = [IO.Path]::GetExtension($target.AbsolutePath)
  if ([string]::IsNullOrWhiteSpace($ext)) {
    $ext = ".bin"
  }
  return Join-Path $root "$hash$ext"
}

function Save-RemoteFile([string]$url) {
  if ([string]::IsNullOrWhiteSpace($url)) { return $null }
  if ($url.StartsWith("data:")) { return $null }

  $resolved = [Uri]::new($uri, $url)
  if ($resolved.Host -ne $uri.Host) { return $null }

  $localPath = Get-LocalPath $resolved
  if (-not (Test-Path $localPath)) {
    Invoke-WebRequest -Uri $resolved.AbsoluteUri -OutFile $localPath
  }

  return [PSCustomObject]@{
    Uri = $resolved
    LocalPath = $localPath
    LocalUrl = Get-LocalUrl $resolved
  }
}

function Rewrite-Urls([string]$content, [Uri]$baseUri, [ref]$downloads) {
  $pattern = '(https?:\/\/[^"''\s)]+|\/wp-content\/[^"''\s)]+|\/wp-includes\/[^"''\s)]+|\/wp-admin\/[^"''\s)]+)'
  return [regex]::Replace($content, $pattern, {
      param($match)
      try {
        $target = [Uri]::new($baseUri, $match.Value)
      } catch {
        return $match.Value
      }
      if ($target.Host -ne $uri.Host) {
        return $match.Value
      }
      try {
        $saved = Save-RemoteFile $target.AbsoluteUri
        if ($saved) {
          $downloads.Value[$target.AbsoluteUri] = $saved.LocalUrl
          return $saved.LocalUrl
        }
        return $match.Value
      } catch {
        return $match.Value
      }
    })
}

$htmlResponse = Invoke-WebRequest -Uri $siteUrl.AbsoluteUri
$html = $htmlResponse.Content

$downloads = @{}

$styleMatches = [regex]::Matches($html, '<style[^>]*>(.*?)</style>', 'Singleline')
$inlineCss = New-Object System.Collections.Generic.List[string]
foreach ($styleMatch in $styleMatches) {
  $inlineCss.Add((Rewrite-Urls $styleMatch.Groups[1].Value $uri ([ref]$downloads)))
}

$cssMatches = [regex]::Matches($html, '<link[^>]+rel=["'']stylesheet["''][^>]+href=["'']([^"'']+)["'']', 'IgnoreCase')
$bundle = New-Object System.Text.StringBuilder
foreach ($item in $inlineCss) {
  [void]$bundle.AppendLine($item)
}

foreach ($cssMatch in $cssMatches) {
  $href = $cssMatch.Groups[1].Value
  $cssUri = [Uri]::new($uri, $href)
  if ($cssUri.Host -ne $uri.Host) { continue }
  $cssContent = (Invoke-WebRequest -Uri $cssUri.AbsoluteUri).Content

  $urlMatches = [regex]::Matches($cssContent, 'url\(([^)]+)\)')
  foreach ($urlMatch in $urlMatches) {
    $raw = $urlMatch.Groups[1].Value.Trim(@('"', "'", ' '))
    if ($raw.StartsWith("data:")) { continue }
    $assetUri = [Uri]::new($cssUri, $raw)
    if ($assetUri.Host -ne $uri.Host) { continue }
    $saved = Save-RemoteFile $assetUri.AbsoluteUri
    if ($saved) {
      $escapedRaw = [regex]::Escape($raw)
      $cssContent = [regex]::Replace($cssContent, "url\((['""]?)$escapedRaw(['""]?)\)", "url('$($saved.LocalUrl)')")
    }
  }

  [void]$bundle.AppendLine($cssContent)
}

$bodyMatch = [regex]::Match($html, '<body([^>]*)>(.*?)</body>', 'Singleline')
$bodyAttributes = $bodyMatch.Groups[1].Value
$bodyHtml = $bodyMatch.Groups[2].Value
$bodyHtml = [regex]::Replace($bodyHtml, '<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', 'Singleline,IgnoreCase')
$bodyHtml = [regex]::Replace($bodyHtml, '<link\b[^>]*>', '', 'Singleline,IgnoreCase')
$bodyHtml = Rewrite-Urls $bodyHtml $uri ([ref]$downloads)

$cssOutput = Join-Path $root "site.css"
$bodyOutput = Join-Path $root "body.html"
$metaOutput = Join-Path $root "meta.json"

[IO.File]::WriteAllText($cssOutput, $bundle.ToString(), [Text.UTF8Encoding]::new($false))
[IO.File]::WriteAllText($bodyOutput, $bodyHtml, [Text.UTF8Encoding]::new($false))

$meta = [ordered]@{
  PagePath = $PagePath
  OutputFolder = $OutputFolder
  BodyClass = ([regex]::Match($bodyAttributes, 'class=["'']([^"'']+)["'']', 'IgnoreCase')).Groups[1].Value
}
$metaJson = $meta | ConvertTo-Json -Depth 3
[IO.File]::WriteAllText($metaOutput, $metaJson, [Text.UTF8Encoding]::new($false))
