import fs from "node:fs";
import path from "node:path";

const [, , inputHtmlPath, outputJsxPath, componentName, bodyClass, cssImportPath] =
  process.argv;

if (!inputHtmlPath || !outputJsxPath || !componentName || !cssImportPath) {
  throw new Error(
    "Usage: node scripts/convert-mirror-to-jsx.mjs <inputHtmlPath> <outputJsxPath> <componentName> <bodyClass> <cssImportPath>"
  );
}

let html = fs.readFileSync(inputHtmlPath, "utf8");

const fixText = (value) =>
  Buffer.from(value, "latin1").toString("utf8").replace(/\uFFFD/g, "");

html = fixText(html);

const replacements = [
  [/class=/g, "className="],
  [/\bfor=/g, "htmlFor="],
  [/\btabindex=/g, "tabIndex="],
  [/\breadonly=/g, "readOnly="],
  [/\bsrcset=/g, "srcSet="],
  [/\bfetchpriority=/g, "fetchPriority="],
  [/\bplaysinline\b/g, "playsInline"],
  [/\bautoplay\b/g, "autoPlay"],
  [/&#038;/g, "&"],
  [/&nbsp;/g, " "],
];

for (const [pattern, replacement] of replacements) {
  html = html.replace(pattern, replacement);
}

html = html.replace(/<!--[\s\S]*?-->/g, "");
html = html.replace(/\sstyle="font-weight:\s*400;"/g, ' style={{ fontWeight: 400 }}');
html = html.replace(/\sstyle="font-weight:\s*700;"/g, ' style={{ fontWeight: 700 }}');
html = html.replace(/<br>/g, "<br />");
html = html.replace(/<hr>/g, "<hr />");

const selfClosingTags = ["img", "input", "meta", "link", "source", "br", "hr"];
for (const tag of selfClosingTags) {
  const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, "g");
  html = html.replace(regex, `<${tag}$1 />`);
}

html = html.replace(/>\s+{/g, "> {");
html = html.replace(/\{\s*" "\s*\}/g, '{" "}');

const jsx = `import { useEffect } from "react";
import "${cssImportPath}";

const BODY_CLASS = ${JSON.stringify(bodyClass)};

function ${componentName}() {
  useEffect(() => {
    const previousClassName = document.body.className;
    document.body.className = BODY_CLASS;

    return () => {
      document.body.className = previousClassName;
    };
  }, []);

  return (
    <>
${html
  .split("\n")
  .map((line) => `      ${line}`.replace(/\s+$/, ""))
  .join("\n")}
    </>
  );
}

export default ${componentName};
`;

fs.mkdirSync(path.dirname(outputJsxPath), { recursive: true });
fs.writeFileSync(outputJsxPath, jsx, "utf8");
