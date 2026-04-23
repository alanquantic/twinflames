import { useEffect } from "react";
import "./site.css";

const BODY_CLASS = "wp-singular page-template page-template-elementor_header_footer page page-id-127 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor jkit-color-scheme hello-elementor-default elementor-default elementor-template-full-width elementor-kit-82 elementor-page elementor-page-127";

function MirroredContactPage() {
  useEffect(() => {
    const previousClassName = document.body.className;
    document.body.className = BODY_CLASS;

    return () => {
      document.body.className = previousClassName;
    };
  }, []);

  return (
    <>

      <div id="page" className="jkit-template  site">

      				<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
      					<style>{`.elementor-133 .elementor-element.elementor-element-29ce2c0c:not(.elementor-motion-effects-element-type-background), .elementor-133 .elementor-element.elementor-element-29ce2c0c > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#F07B80;}.elementor-133 .elementor-element.elementor-element-29ce2c0c{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;z-index:2;}.elementor-133 .elementor-element.elementor-element-29ce2c0c > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-bc-flex-widget .elementor-133 .elementor-element.elementor-element-6492887.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-133 .elementor-element.elementor-element-6492887.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-133 .elementor-element.elementor-element-6492887.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-133 .elementor-element.elementor-element-6492887 > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-133 .elementor-element.elementor-element-4d638716{text-align:start;}.elementor-133 .elementor-element.elementor-element-4d638716 img{width:60%;}.elementor-bc-flex-widget .elementor-133 .elementor-element.elementor-element-396622cd.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-133 .elementor-element.elementor-element-396622cd.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-133 .elementor-element.elementor-element-396622cd.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li:not(.hover-gradient, .current-menu-item):hover > a, .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li.hover-gradient > a:before{background-color:#FFEAD5;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{background-color:var( --e-global-color-a429300 );border-radius:0px 0px 0px 0px;min-width:220px;box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.1);}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu{background-color:#FFFFFF00;float:right;border-style:solid;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu:not(.hover-gradient):hover, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu.hover-gradient:before{background-color:#02010100;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{background-color:#02010100;border-style:solid;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu:not(.hover-gradient):hover, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu.hover-gradient:before{background-color:#02010100;}.elementor-133 .elementor-element.elementor-element-418484a{z-index:3;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu > ul, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper:not(.active) .jkit-menu, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper:not(.active) .jkit-menu > li > a{display:flex;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu{justify-content:center;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .menu-item .sub-menu{left:unset;top:100%;right:unset;bottom:unset;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .menu-item .sub-menu .menu-item .sub-menu{left:100%;top:unset;right:unset;bottom:unset;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper{height:80px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li > a{font-family:var( --e-global-typography-d4fd62d-font-family ), Sans-serif;font-size:var( --e-global-typography-d4fd62d-font-size );font-weight:var( --e-global-typography-d4fd62d-font-weight );padding:0px 20px 0px 20px;color:var( --e-global-color-bd66980 );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li > a i{font-size:18px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li > a svg{width:18px;fill:var( --e-global-color-bd66980 );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li:not(.hover-gradient, .current-menu-item):hover > a{color:var( --e-global-color-accent );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li:not(.hover-gradient, .current-menu-item):hover > a svg{fill:var( --e-global-color-accent );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li.current-menu-item > a, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li.current-menu-ancestor > a{color:var( --e-global-color-accent );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li.current-menu-item > a svg, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li.current-menu-ancestor > a svg{fill:var( --e-global-color-accent );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a i, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a svg, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu > a i, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu > a svg{border-style:solid;border-width:0px 0px 0px 0px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li a{font-family:var( --e-global-typography-d4fd62d-font-family ), Sans-serif;font-size:var( --e-global-typography-d4fd62d-font-size );font-weight:var( --e-global-typography-d4fd62d-font-weight );border-style:solid;border-width:0px 0px 1px 0px;border-color:var( --e-global-color-65b0e2f );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li > a{color:var( --e-global-color-bd66980 );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li > a svg{fill:var( --e-global-color-bd66980 );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li.current-menu-item > a{color:var( --e-global-color-accent );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li.current-menu-item > a svg{fill:var( --e-global-color-accent );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title .jkit-nav-logo img{object-fit:cover;}.elementor-bc-flex-widget .elementor-133 .elementor-element.elementor-element-5f9a29a5.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-133 .elementor-element.elementor-element-5f9a29a5.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-133 .elementor-element.elementor-element-5f9a29a5.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-133 .elementor-element.elementor-element-5f9a29a5 > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-133 .elementor-element.elementor-element-584ae471{--grid-template-columns:repeat(0, auto);--icon-size:18px;--grid-column-gap:5px;--grid-row-gap:0px;}.elementor-133 .elementor-element.elementor-element-584ae471 .elementor-widget-container{text-align:right;}.elementor-133 .elementor-element.elementor-element-584ae471 > .elementor-widget-container{padding:0px 0px 0px 0px;}.elementor-133 .elementor-element.elementor-element-584ae471 .elementor-social-icon{background-color:#02010100;}.elementor-133 .elementor-element.elementor-element-584ae471 .elementor-social-icon i{color:var( --e-global-color-bd66980 );}.elementor-133 .elementor-element.elementor-element-584ae471 .elementor-social-icon svg{fill:var( --e-global-color-bd66980 );}.elementor-133 .elementor-element.elementor-element-584ae471 .elementor-social-icon:hover i{color:var( --e-global-color-accent );}.elementor-133 .elementor-element.elementor-element-584ae471 .elementor-social-icon:hover svg{fill:var( --e-global-color-accent );}@media(max-width:1024px){.elementor-133 .elementor-element.elementor-element-29ce2c0c{padding:20px 16px 20px 16px;}.elementor-133 .elementor-element.elementor-element-4d638716 img{width:20%;}.elementor-133 .elementor-element.elementor-element-396622cd > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-133 .elementor-element.elementor-element-418484a{z-index:3;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu{justify-content:center;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper{background-color:var( --e-global-color-a429300 );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper{background-color:var( --e-global-color-a429300 );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper{padding:0px 0px 0px 30px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li > a{font-size:var( --e-global-typography-d4fd62d-font-size );padding:15px 15px 15px 15px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a i, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a svg, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu > a i, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu > a svg{padding:0px 30px 0px 0px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li a{font-size:var( --e-global-typography-d4fd62d-font-size );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{padding:0px 50px 0px 20px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu i{font-size:30px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu svg{width:30px;fill:var( --e-global-color-secondary );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu{border-width:0px 0px 0px 0px;color:var( --e-global-color-secondary );margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{border-width:0px 0px 0px 0px;color:var( --e-global-color-secondary );padding:0px 30px 0px 0px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu svg{fill:var( --e-global-color-secondary );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title .jkit-nav-logo img{max-width:260px;}}@media(max-width:767px){.elementor-133 .elementor-element.elementor-element-6492887{width:50%;}.elementor-133 .elementor-element.elementor-element-4d638716 img{width:40%;}.elementor-133 .elementor-element.elementor-element-396622cd{width:50%;}.elementor-133 .elementor-element.elementor-element-418484a{z-index:3;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu > li > a{font-size:var( --e-global-typography-d4fd62d-font-size );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a i, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a svg, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu > a i, .elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu > a svg{padding:0px 20px 0px 0px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu li a{font-size:var( --e-global-typography-d4fd62d-font-size );}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{padding:0px 20px 0px 0px;}.elementor-133 .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title .jkit-nav-logo img{max-width:240px;}}@media(max-width:1024px) and (min-width:768px){.elementor-133 .elementor-element.elementor-element-6492887{width:50%;}}@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu { display: block; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper { width: 100%; max-width: 360px; border-radius: 0; background-color: #f7f7f7; width: 100%; position: fixed; top: 0; left: -110%; height: 100%!important; box-shadow: 0 10px 30px 0 rgba(255,165,0,0); overflow-y: auto; overflow-x: hidden; padding-top: 0; padding-left: 0; padding-right: 0; display: flex; flex-direction: column-reverse; justify-content: flex-end; -moz-transition: left .6s cubic-bezier(.6,.1,.68,.53), width .6s; -webkit-transition: left .6s cubic-bezier(.6,.1,.68,.53), width .6s; -o-transition: left .6s cubic-bezier(.6,.1,.68,.53), width .6s; -ms-transition: left .6s cubic-bezier(.6,.1,.68,.53), width .6s; transition: left .6s cubic-bezier(.6,.1,.68,.53), width .6s; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper.active { left: 0; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu-container { overflow-y: hidden; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel { padding: 10px 0px 10px 0px; display: block; position: relative; z-index: 5; width: 100%; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title { display: inline-block; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu { display: block; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu { display: block; height: 100%; overflow-y: auto; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a i { margin-left: auto; border: 1px solid var(--jkit-border-color); border-radius: 3px; padding: 4px 15px; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children > a svg { margin-left: auto; border: 1px solid var(--jkit-border-color); border-radius: 3px; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu { position: inherit; box-shadow: none; background: none; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li { display: block; width: 100%; position: inherit; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li .sub-menu { display: none; max-height: 2500px; opacity: 0; visibility: hidden; transition: max-height 5s ease-out; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open { display: block; opacity: 1; visibility: visible; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li a { display: block; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li a i { float: right; } }@media (max-width: 1024px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li a svg { float: right } }@media (min-width: 1025px) {.elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu-container { height: 100%; } }@media (max-width: 1024px) {.admin-bar .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper { top: 32px; } }@media (max-width: 782px) {.admin-bar .elementor-element.elementor-element-418484a .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper { top: 46px; } }`}</style>		<div data-elementor-type="page" data-elementor-id="133" className="elementor elementor-133" data-elementor-post-type="jkit-header">
      						<section className="elementor-section elementor-top-section elementor-element elementor-element-29ce2c0c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="29ce2c0c" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6492887" data-id="6492887" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-4d638716 elementor-widget elementor-widget-image" data-id="4d638716" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
      				<div className="elementor-widget-container">
      																<a href="/">
      							<img fetchPriority="high" width="500" height="224" src="/contactcopy/966bdc7a239a193c43d2bebae742390c.png" className="attachment-full size-full wp-image-218" alt="" decoding="async" srcSet="/contactcopy/966bdc7a239a193c43d2bebae742390c.png 500w, /contactcopy/2f5562aa4f103b8b6b3f6647874e135d.png 300w" sizes="(max-width: 500px) 100vw, 500px" />								</a>
      															</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396622cd" data-id="396622cd" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-418484a elementor-widget elementor-widget-jkit_nav_menu" data-id="418484a" data-element_type="widget" data-e-type="widget" data-settings="{&quot;st_submenu_item_text_hover_bg_background_background&quot;:&quot;classic&quot;}" data-widget_type="jkit_nav_menu.default">
      				<div className="elementor-widget-container">
      					<div  className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_127__69ea6b66dcbfc"  data-item-indicator="&lt;i aria-hidden=&quot;true&quot; className=&quot;jki jki-chevron-down-line&quot;&gt;&lt;/i&gt;"><button aria-label="open-menu" className="jkit-hamburger-menu"><i aria-hidden="true" className="jki jki-bars-solid"></i></button>
              <div className="jkit-menu-wrapper"><div className="jkit-menu-container"><ul id="menu-menu" className="jkit-menu jkit-menu-direction-flex jkit-submenu-position-top"><li id="menu-item-141" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-141"><a href="/">Inicio</a></li>
      <li id="menu-item-293" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-293"><a href="/#sobre">Sobre mí</a></li>
      <li id="menu-item-294" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-294"><a href="/#servicios">Servicios</a></li>
      <li id="menu-item-149" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-149"><a href="/#planes">Más</a>
      <ul className="sub-menu">
      	<li id="menu-item-295" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-295"><a href="/#planes">Planes</a></li>
      	<li id="menu-item-296" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-296"><a href="/#planes">Citas</a></li>
      	<li id="menu-item-297" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-297"><a href="/#planes">FAQ</a></li>
      </ul>
      </li>
      <li id="menu-item-298" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-298"><a href="/#blog">Blog</a></li>
      <li id="menu-item-144" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-127 current_page_item menu-item-144"><a href="/contacto/" aria-current="page">Contacto</a></li>
      </ul></div>
                  <div className="jkit-nav-identity-panel">
                      <div className="jkit-nav-site-title"><a href="/" className="jkit-nav-logo" aria-label="Home Link"></a></div>
                      <button aria-label="close-menu" className="jkit-close-menu"><svg aria-hidden="true" className="e-font-icon-svg e-fas-times" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></button>
                  </div>
              </div>
              <div className="jkit-overlay"></div></div>				</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5f9a29a5 elementor-hidden-tablet elementor-hidden-mobile" data-id="5f9a29a5" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-584ae471 elementor-shape-square e-grid-align-right elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="584ae471" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-social-icons-wrapper elementor-grid" role="list">
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-605a83b" target="_blank">
      						<span className="elementor-screen-only">Instagram</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>					</a>
      				</span>
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-16cd9a1" target="_blank">
      						<span className="elementor-screen-only">Twitter</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>					</a>
      				</span>
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-76c6d80" target="_blank">
      						<span className="elementor-screen-only">Youtube</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>					</a>
      				</span>
      					</div>
      						</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				</div>
      						</header>
      					<div data-elementor-type="wp-page" data-elementor-id="127" className="elementor elementor-127" data-elementor-post-type="page">
      						<section className="elementor-section elementor-top-section elementor-element elementor-element-718632ec elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="718632ec" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-101ab94" data-id="101ab94" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-7dffe855 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="7dffe855" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
      				<div className="elementor-widget-container">
      															<img decoding="async" width="195" height="246" src="/contactcopy/7e09f8bef16557b5157a2c87356e1405.png" className="attachment-full size-full wp-image-13" alt="" />															</div>
      				</div>
      				<div className="elementor-element elementor-element-362b8502 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="362b8502" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
      				<div className="elementor-widget-container">
      															<img decoding="async" width="155" height="159" src="/contactcopy/da8dc0f2be0c8f5a7054024d2c698acd.png" className="attachment-full size-full wp-image-14" alt="" />															</div>
      				</div>
      				<div className="elementor-element elementor-element-37dcdfb5 elementor-widget elementor-widget-heading" data-id="37dcdfb5" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Contacto</h2>				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<section className="elementor-section elementor-top-section elementor-element elementor-element-771df5f8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="771df5f8" data-element_type="section" data-e-type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4df81745" data-id="4df81745" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<section className="elementor-section elementor-inner-section elementor-element elementor-element-1318a9b4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1318a9b4" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-36d485aa" data-id="36d485aa" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-5a23cfaa elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon" data-id="5a23cfaa" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-2ef3f0b3 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="2ef3f0b3" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Teléfono </h2>				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<div className="elementor-element elementor-element-5ba73aa4 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5ba73aa4" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      				<div className="elementor-widget-container">
      							<ul className="elementor-icon-list-items">
      							<li className="elementor-icon-list-item">
      										<span className="elementor-icon-list-text">(+62) 8123 456 789</span>
      									</li>
      						</ul>
      						</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-673444c" data-id="673444c" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<section className="elementor-section elementor-inner-section elementor-element elementor-element-29444af6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="29444af6" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-53800c3e" data-id="53800c3e" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-964a7d1 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon" data-id="964a7d1" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg aria-hidden="true" className="e-font-icon-svg e-fas-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-3d9a61d0 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="3d9a61d0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Correo electrónico</h2>				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<div className="elementor-element elementor-element-2e641bcf elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="2e641bcf" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      				<div className="elementor-widget-container">
      							<ul className="elementor-icon-list-items">
      							<li className="elementor-icon-list-item">
      										<span className="elementor-icon-list-text">support@domain.com</span>
      									</li>
      						</ul>
      						</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7f8738db" data-id="7f8738db" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<section className="elementor-section elementor-inner-section elementor-element elementor-element-147187b3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="147187b3" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1e32654" data-id="1e32654" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-6af28e36 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon" data-id="6af28e36" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-7780c873 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="7780c873" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Dirección</h2>				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<div className="elementor-element elementor-element-197f8fbc elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="197f8fbc" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      				<div className="elementor-widget-container">
      							<ul className="elementor-icon-list-items">
      							<li className="elementor-icon-list-item">
      										<span className="elementor-icon-list-text">Canggu, Badung Regency, Bali</span>
      									</li>
      						</ul>
      						</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<section className="elementor-section elementor-top-section elementor-element elementor-element-2d835f27 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d835f27" data-element_type="section" data-e-type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2ed34fbf" data-id="2ed34fbf" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-79e4b877 elementor-widget elementor-widget-jkit_heading" data-id="79e4b877" data-element_type="widget" data-e-type="widget" data-widget_type="jkit_heading.default">
      				<div className="elementor-widget-container">
      					<div  className="jeg-elementor-kit jkit-heading  align- align-tablet- align-mobile- jeg_module_127_1_69ea6b66e2027" ><div className="heading-section-title  display-inline-block"><h2 className="heading-title"><span className="style-color"><span>Contacto</span></span></h2></div></div>				</div>
      				</div>
      				<div className="elementor-element elementor-element-4552bfd6 elementor-widget elementor-widget-google_maps" data-id="4552bfd6" data-element_type="widget" data-e-type="widget" data-widget_type="google_maps.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-custom-embed">
      			<iframe loading="lazy"
      					src="https://maps.google.com/maps?q=jalan%20batu%20mejan%2C%20canggu%2C%20Badung%20regency%2C%20bali&t=m&z=16&output=embed&iwloc=near"
      					title="jalan batu mejan, canggu, Badung regency, bali"
      					aria-label="jalan batu mejan, canggu, Badung regency, bali"
      			></iframe>
      		</div>
      						</div>
      				</div>
      				<section className="elementor-section elementor-inner-section elementor-element elementor-element-339bca94 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="339bca94" data-element_type="section" data-e-type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6fc13fdd" data-id="6fc13fdd" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-18be0af6 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="18be0af6" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Redes sociales :</h2>				</div>
      				</div>
      				<div className="elementor-element elementor-element-182322f7 elementor-shape-circle e-grid-align-mobile-left e-grid-align-left elementor-widget__width-auto elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="182322f7" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-social-icons-wrapper elementor-grid" role="list">
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-jki-facebook-light elementor-repeater-item-605a83b" target="_blank">
      						<span className="elementor-screen-only">Jki-facebook-light</span>
      						<i aria-hidden="true" className="jki jki-facebook-light"></i>					</a>
      				</span>
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-16cd9a1" target="_blank">
      						<span className="elementor-screen-only">Twitter</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>					</a>
      				</span>
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-jki-instagram-1-light elementor-repeater-item-76c6d80" target="_blank">
      						<span className="elementor-screen-only">Jki-instagram-1-light</span>
      						<i aria-hidden="true" className="jki jki-instagram-1-light"></i>					</a>
      				</span>
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-a000698" target="_blank">
      						<span className="elementor-screen-only">Youtube</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>					</a>
      				</span>
      					</div>
      						</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4e159716" data-id="4e159716" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-f492948 elementor-widget elementor-widget-metform" data-id="f492948" data-element_type="widget" data-e-type="widget" data-widget_type="metform.default">
      				<div className="elementor-widget-container">
      					<div id="mf-response-props-id-187" data-previous-steps-style="" data-editswitchopen="" data-response_type="alert" data-erroricon="fas fa-exclamation-triangle" data-successicon="fas fa-check" data-messageposition="top" className="   mf-scroll-top-no">
      		<div className="formpicker_warper formpicker_warper_editable" data-metform-formpicker-key="187" >

      			<div className="mf-widget-container">

      			<div
      				id="metform-wrap-f492948-187"
      				className="mf-form-wrapper"
      				data-form-id="187"
      				data-action="/contactcopy/0e59da356cba16e5f9ce3c1af711d088.bin"
      				data-wp-nonce="6f3af62769"
      				data-form-nonce="66cc764d08"
      				data-quiz-summery = "false"
      				data-save-progress = "false"
      				data-form-type="general-form"
      				data-stop-vertical-effect=""
      			>
      				<form className="metform-form-content" onSubmit={(event) => event.preventDefault()}>
      					<div className="mf-main-response-wrap"></div>
      					<div className="metform-form-main-wrapper">
      						<div data-elementor-type="wp-post" data-elementor-id="187" className="elementor elementor-187" data-elementor-post-type="metform-form">
      							<section className="elementor-section elementor-top-section elementor-element elementor-element-3fceeb4b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3fceeb4b" data-element_type="section" data-e-type="section">
      								<div className="elementor-container elementor-column-gap-no">
      									<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-360c8cd6" data-id="360c8cd6" data-element_type="column" data-e-type="column">
      										<div className="elementor-widget-wrap elementor-element-populated">
      											<section className="elementor-section elementor-inner-section elementor-element elementor-element-e721aac elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e721aac" data-element_type="section" data-e-type="section">
      												<div className="elementor-container elementor-column-gap-extended">
      													<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-68afcec9" data-id="68afcec9" data-element_type="column" data-e-type="column">
      														<div className="elementor-widget-wrap elementor-element-populated">
      															<div className="elementor-element elementor-element-bb155bc elementor-widget elementor-widget-mf-text" data-id="bb155bc" data-element_type="widget" data-e-type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;first-name&quot;}" data-widget_type="mf-text.default">
      																<div className="elementor-widget-container">
      																	<div className="mf-input-wrapper">
      																		<label className="mf-input-label" htmlFor="mf-input-text-bb155bc">
      																			Nombre <span className="mf-input-required-indicator">*</span>
      																		</label>
      																		<input type="text" className="mf-input" id="mf-input-text-bb155bc" name="first-name" placeholder="Nombre completo" />
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      													<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-18834a79" data-id="18834a79" data-element_type="column" data-e-type="column">
      														<div className="elementor-widget-wrap elementor-element-populated">
      															<div className="elementor-element elementor-element-107ebcf2 elementor-widget elementor-widget-mf-email" data-id="107ebcf2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;mf-email&quot;}" data-widget_type="mf-email.default">
      																<div className="elementor-widget-container">
      																	<div className="mf-input-wrapper">
      																		<label className="mf-input-label" htmlFor="mf-input-email-107ebcf2">
      																			Correo electrónico <span className="mf-input-required-indicator">*</span>
      																		</label>
      																		<input type="email" className="mf-input" id="mf-input-email-107ebcf2" name="mf-email" placeholder="user@website.com" />
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      												</div>
      											</section>
      											<section className="elementor-section elementor-inner-section elementor-element elementor-element-1e4521b1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1e4521b1" data-element_type="section" data-e-type="section">
      												<div className="elementor-container elementor-column-gap-extended">
      													<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-53ca3a38" data-id="53ca3a38" data-element_type="column" data-e-type="column">
      														<div className="elementor-widget-wrap elementor-element-populated">
      															<div className="elementor-element elementor-element-cdbcecb elementor-widget elementor-widget-mf-text" data-id="cdbcecb" data-element_type="widget" data-e-type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;asunto&quot;}" data-widget_type="mf-text.default">
      																<div className="elementor-widget-container">
      																	<div className="mf-input-wrapper">
      																		<label className="mf-input-label" htmlFor="mf-input-text-cdbcecb">
      																			Asunto <span className="mf-input-required-indicator">*</span>
      																		</label>
      																		<input type="text" className="mf-input" id="mf-input-text-cdbcecb" name="asunto" placeholder="Asunto" />
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      												</div>
      											</section>
      											<section className="elementor-section elementor-inner-section elementor-element elementor-element-40ce6123 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="40ce6123" data-element_type="section" data-e-type="section">
      												<div className="elementor-container elementor-column-gap-extended">
      													<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1260a6d9" data-id="1260a6d9" data-element_type="column" data-e-type="column">
      														<div className="elementor-widget-wrap elementor-element-populated">
      															<div className="elementor-element elementor-element-5d89647 elementor-widget elementor-widget-mf-textarea" data-id="5d89647" data-element_type="widget" data-e-type="widget" data-settings="{&quot;mf_input_name&quot;:&quot;mf-comment&quot;}" data-widget_type="mf-textarea.default">
      																<div className="elementor-widget-container">
      																	<div className="mf-input-wrapper">
      																		<label className="mf-input-label" htmlFor="mf-input-text-area-5d89647">
      																			Preguntas <span className="mf-input-required-indicator">*</span>
      																		</label>
      																		<textarea className="mf-input mf-textarea" id="mf-input-text-area-5d89647" name="mf-comment" placeholder="Comentarios" cols="30" rows="10"></textarea>
      																	</div>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-47422bc2 mf-btn--left elementor-widget elementor-widget-mf-button" data-id="47422bc2" data-element_type="widget" data-e-type="widget" data-widget_type="mf-button.default">
      																<div className="elementor-widget-container">
      																	<div className="mf-btn-wraper" data-mf-form-conditional-logic-requirement="">
      																		<button type="submit" className="metform-btn metform-submit-btn">
      																			<span>Enviar</span>
      																		</button>
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      												</div>
      											</section>
      										</div>
      									</div>
      								</div>
      							</section>
      						</div>
      					</div>
      				</form>
      			</div>






      					</div>
      		</div>
      		</div>				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				</div>
      						<footer itemscope="itemscope" itemtype="https://schema.org/WPFooter">
      					<style>{`.elementor-137 .elementor-element.elementor-element-1600d0ef:not(.elementor-motion-effects-element-type-background), .elementor-137 .elementor-element.elementor-element-1600d0ef > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#4C3347;}.elementor-137 .elementor-element.elementor-element-1600d0ef{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:180px;margin-bottom:0px;padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-1600d0ef > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-137 .elementor-element.elementor-element-39e1f28c > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-ab9de91:not(.elementor-motion-effects-element-type-background), .elementor-137 .elementor-element.elementor-element-ab9de91 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:var( --e-global-color-primary );}.elementor-137 .elementor-element.elementor-element-ab9de91 > .elementor-background-overlay{background-image:url("/contactcopy/47fb22a595779f02103c506701862753.png");background-position:center center;background-size:cover;transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-137 .elementor-element.elementor-element-ab9de91, .elementor-137 .elementor-element.elementor-element-ab9de91 > .elementor-background-overlay{border-radius:10px 10px 10px 10px;}.elementor-137 .elementor-element.elementor-element-ab9de91{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:-100px;margin-bottom:80px;padding:50px 50px 50px 50px;}.elementor-bc-flex-widget .elementor-137 .elementor-element.elementor-element-2a44fdc.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-137 .elementor-element.elementor-element-2a44fdc.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-137 .elementor-element.elementor-element-2a44fdc.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-137 .elementor-element.elementor-element-7341a71e > .elementor-widget-container{margin:0px 0px -10px 0px;}.elementor-137 .elementor-element.elementor-element-7341a71e{text-align:center;}.elementor-137 .elementor-element.elementor-element-7341a71e .elementor-heading-title{font-family:var( --e-global-typography-7042c58-font-family ), Sans-serif;font-size:var( --e-global-typography-7042c58-font-size );font-weight:var( --e-global-typography-7042c58-font-weight );line-height:var( --e-global-typography-7042c58-line-height );color:var( --e-global-color-secondary );}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit{background-color:var( --e-global-color-accent );font-family:var( --e-global-typography-0b01dd4-font-family ), Sans-serif;font-size:var( --e-global-typography-0b01dd4-font-size );font-weight:var( --e-global-typography-0b01dd4-font-weight );line-height:var( --e-global-typography-0b01dd4-line-height );padding:15px 30px 15px 30px;margin:0px 0px 0px 0px;border-radius:30px 30px 30px 30px;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit:hover{background-color:var( --e-global-color-secondary );}.elementor-137 .elementor-element.elementor-element-6beb6833{width:var( --container-widget-width, 60% );max-width:60%;--container-widget-width:60%;--container-widget-flex-grow:0;align-self:center;}.elementor-137 .elementor-element.elementor-element-6beb6833 > .elementor-widget-container{padding:0% 0% 0% 0%;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-input-label{margin:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-form-control{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );color:var( --e-global-color-bd66980 );border-radius:30px 30px 30px 30px;padding:15px 21px 15px 21px;border-style:solid;border-width:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-input-wrapper:not(.jkit-submit-input-holder){margin-right:10px;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-input-wrapper:not(.jkit-submit-input-holder){margin-bottom:0px;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-form-control::placeholder{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-submit-input-holder{align-self:center;}.elementor-137 .elementor-element.elementor-element-8c62420{padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-648034de > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-6e7327e .elementor-heading-title{font-family:var( --e-global-typography-4aca65d-font-family ), Sans-serif;font-size:var( --e-global-typography-4aca65d-font-size );font-weight:var( --e-global-typography-4aca65d-font-weight );line-height:var( --e-global-typography-4aca65d-line-height );color:var( --e-global-color-65b0e2f );}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(20px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(20px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(20px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-20px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-20px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-icon i{transition:color 0.3s;}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-icon svg{transition:fill 0.3s;}.elementor-137 .elementor-element.elementor-element-26d5a59a{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-item > .elementor-icon-list-text, .elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-item > a{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-text{color:var( --e-global-color-65b0e2f );transition:color 0.3s;}.elementor-bc-flex-widget .elementor-137 .elementor-element.elementor-element-47d59040.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-137 .elementor-element.elementor-element-47d59040.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-137 .elementor-element.elementor-element-3aedc7c6 img{width:35%;}.elementor-137 .elementor-element.elementor-element-56467103{--grid-template-columns:repeat(0, auto);--icon-size:18px;--grid-column-gap:15px;--grid-row-gap:0px;}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-widget-container{text-align:center;}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-social-icon{background-color:var( --e-global-color-65b0e2f );}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-social-icon i{color:var( --e-global-color-9182081 );}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-social-icon svg{fill:var( --e-global-color-9182081 );}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-social-icon:hover{background-color:var( --e-global-color-9182081 );}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-social-icon:hover i{color:var( --e-global-color-65b0e2f );}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-social-icon:hover svg{fill:var( --e-global-color-65b0e2f );}.elementor-137 .elementor-element.elementor-element-70cca96e > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-7120e40{text-align:end;}.elementor-137 .elementor-element.elementor-element-7120e40 .elementor-heading-title{font-family:var( --e-global-typography-4aca65d-font-family ), Sans-serif;font-size:var( --e-global-typography-4aca65d-font-size );font-weight:var( --e-global-typography-4aca65d-font-weight );line-height:var( --e-global-typography-4aca65d-line-height );color:var( --e-global-color-65b0e2f );}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(10px/2);}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(10px/2);}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(10px/2);}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-10px/2);}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-10px/2);}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-icon i{transition:color 0.3s;}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-icon svg{transition:fill 0.3s;}.elementor-137 .elementor-element.elementor-element-70d3263f{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-item > .elementor-icon-list-text, .elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-item > a{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-text{color:var( --e-global-color-65b0e2f );transition:color 0.3s;}.elementor-137 .elementor-element.elementor-element-4c90171e > .elementor-container{max-width:1170px;}.elementor-137 .elementor-element.elementor-element-4c90171e{border-style:solid;border-width:1px 0px 0px 0px;border-color:var( --e-global-color-cc97749 );margin-top:50px;margin-bottom:0px;padding:25px 0px 25px 0px;}.elementor-137 .elementor-element.elementor-element-4c90171e, .elementor-137 .elementor-element.elementor-element-4c90171e > .elementor-background-overlay{border-radius:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-4c12d415 > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-4c54267b{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );color:var( --e-global-color-cc97749 );}.elementor-137 .elementor-element.elementor-element-4798b0d3 > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-130e110a{text-align:end;font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-size:var( --e-global-typography-text-font-size );font-weight:var( --e-global-typography-text-font-weight );color:var( --e-global-color-cc97749 );}@media(max-width:1024px){.elementor-137 .elementor-element.elementor-element-1600d0ef{z-index:0;}.elementor-137 .elementor-element.elementor-element-ab9de91 > .elementor-background-overlay{background-position:center center;background-repeat:no-repeat;background-size:cover;}.elementor-137 .elementor-element.elementor-element-7341a71e .elementor-heading-title{font-size:var( --e-global-typography-7042c58-font-size );line-height:var( --e-global-typography-7042c58-line-height );}.elementor-137 .elementor-element.elementor-element-6beb6833{width:var( --container-widget-width, 70% );max-width:70%;--container-widget-width:70%;--container-widget-flex-grow:0;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-form-control{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-form-control::placeholder{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-submit-input-holder{align-self:flex-start;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit{font-size:var( --e-global-typography-0b01dd4-font-size );line-height:var( --e-global-typography-0b01dd4-line-height );padding:15px 25px 15px 25px;}.elementor-137 .elementor-element.elementor-element-8c62420{padding:0px 16px 0px 16px;}.elementor-137 .elementor-element.elementor-element-6e7327e .elementor-heading-title{font-size:var( --e-global-typography-4aca65d-font-size );line-height:var( --e-global-typography-4aca65d-line-height );}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-item > .elementor-icon-list-text, .elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-3aedc7c6 img{width:25%;}.elementor-137 .elementor-element.elementor-element-56467103{--icon-size:14px;}.elementor-137 .elementor-element.elementor-element-7120e40 .elementor-heading-title{font-size:var( --e-global-typography-4aca65d-font-size );line-height:var( --e-global-typography-4aca65d-line-height );}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-item > .elementor-icon-list-text, .elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-4c90171e{padding:25px 16px 25px 16px;}.elementor-137 .elementor-element.elementor-element-4c54267b{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-130e110a{font-size:var( --e-global-typography-text-font-size );}}@media(max-width:767px){.elementor-bc-flex-widget .elementor-137 .elementor-element.elementor-element-2a44fdc.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-137 .elementor-element.elementor-element-2a44fdc.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-137 .elementor-element.elementor-element-2a44fdc.elementor-column > .elementor-widget-wrap{justify-content:flex-start;}.elementor-137 .elementor-element.elementor-element-2a44fdc > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-7341a71e .elementor-heading-title{font-size:var( --e-global-typography-7042c58-font-size );line-height:var( --e-global-typography-7042c58-line-height );}.elementor-137 .elementor-element.elementor-element-6beb6833{width:100%;max-width:100%;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-form-control{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-input-wrapper:not(.jkit-submit-input-holder){-webkit-box-flex:100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-right:0px;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-input-wrapper:not(.jkit-submit-input-holder){margin-bottom:10px;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-form-control::placeholder{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit{font-size:var( --e-global-typography-0b01dd4-font-size );line-height:var( --e-global-typography-0b01dd4-line-height );}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.style-full .jkit-mailchimp-submit{width:100%;}.elementor-137 .elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-submit-input-holder{-webkit-box-flex:100%;-ms-flex:0 0 100%;flex:0 0 100%;}.elementor-137 .elementor-element.elementor-element-648034de{width:100%;}.elementor-137 .elementor-element.elementor-element-648034de > .elementor-element-populated{padding:0px 0px 20px 0px;}.elementor-137 .elementor-element.elementor-element-6e7327e{text-align:center;}.elementor-137 .elementor-element.elementor-element-6e7327e .elementor-heading-title{font-size:var( --e-global-typography-4aca65d-font-size );line-height:var( --e-global-typography-4aca65d-line-height );}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(10px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(10px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(10px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-10px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-10px/2);}.elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-item > .elementor-icon-list-text, .elementor-137 .elementor-element.elementor-element-26d5a59a .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-47d59040 > .elementor-element-populated{padding:20px 0px 20px 0px;}.elementor-137 .elementor-element.elementor-element-56467103 .elementor-widget-container{text-align:center;}.elementor-137 .elementor-element.elementor-element-70cca96e > .elementor-element-populated{padding:20px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-7120e40{text-align:center;}.elementor-137 .elementor-element.elementor-element-7120e40 .elementor-heading-title{font-size:var( --e-global-typography-4aca65d-font-size );line-height:var( --e-global-typography-4aca65d-line-height );}.elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-item > .elementor-icon-list-text, .elementor-137 .elementor-element.elementor-element-70d3263f .elementor-icon-list-item > a{font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-4c12d415 > .elementor-element-populated{margin:0px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;}.elementor-137 .elementor-element.elementor-element-4c54267b{text-align:center;font-size:var( --e-global-typography-text-font-size );}.elementor-137 .elementor-element.elementor-element-4798b0d3 > .elementor-element-populated{margin:0px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;padding:10px 0px 0px 0px;}.elementor-137 .elementor-element.elementor-element-130e110a{text-align:center;font-size:var( --e-global-typography-text-font-size );}}@media (max-width: 767px) {.elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-form-wrapper.extra-fields .jkit-submit-input-holder{ -webkit-box-flex:0; -ms-flex:0 0 100%; flex:0 0 100%; max-width:100%; } }@media (max-width: 767px) {.elementor-element.elementor-element-6beb6833 .jeg-elementor-kit.jkit-mailchimp.jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-form-wrapper.extra-fields .jkit-input-wrapper:nth-last-child(2) { margin-right: 0!important; } }`}</style>		<div data-elementor-type="page" data-elementor-id="137" className="elementor elementor-137" data-elementor-post-type="jkit-footer">
      						<section className="elementor-section elementor-top-section elementor-element elementor-element-1600d0ef elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1600d0ef" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-39e1f28c" data-id="39e1f28c" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<section className="elementor-section elementor-inner-section elementor-element elementor-element-ab9de91 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ab9de91" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      							<div className="elementor-background-overlay"></div>
      							<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2a44fdc" data-id="2a44fdc" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-7341a71e elementor-widget elementor-widget-heading" data-id="7341a71e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Suscrbete al newsletter</h2>				</div>
      				</div>
      				<div className="elementor-element elementor-element-6beb6833 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget-tablet__width-initial elementor-widget elementor-widget-jkit_mailchimp" data-id="6beb6833" data-element_type="widget" data-e-type="widget" data-widget_type="jkit_mailchimp.default">
      				<div className="elementor-widget-container">
      					<div  className="jeg-elementor-kit jkit-mailchimp style-inline jeg_module_127_2_69ea6b670dc79" ><form method="post" className="jkit-mailchimp-form" data-listed="" data-success-message="Successfully listed this email" data-error-message="Something went wrong">
                  <div className="jkit-mailchimp-message"></div>
                  <div className="jkit-form-wrapper email-form">
                      <div className="jkit-mailchimp-email jkit-input-wrapper input-container">
                  <div className="jkit-form-group">
                      <div className="jkit-input-element-container jkit-input-group">
                          <input type="email" name="email" className="jkit-email jkit-form-control " placeholder="Tu correo electrónico" required="" />
                      </div>
                  </div>
              </div><div className="jkit-submit-input-holder jkit-input-wrapper">
                  <button type="submit" className="jkit-mailchimp-submit position-before" name="jkit-mailchimp">
                      Suscrbete
                  </button>
              </div>
                  </div>
              </form></div>				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<section className="elementor-section elementor-inner-section elementor-element elementor-element-8c62420 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8c62420" data-element_type="section" data-e-type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-648034de" data-id="648034de" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-6e7327e elementor-widget elementor-widget-heading" data-id="6e7327e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Conectar</h2>				</div>
      				</div>
      				<div className="elementor-element elementor-element-26d5a59a elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="26d5a59a" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      				<div className="elementor-widget-container">
      							<ul className="elementor-icon-list-items">
      							<li className="elementor-icon-list-item">
      										<span className="elementor-icon-list-text">Jalan Batu Mejan, Canggu, Badung Regency, Bali</span>
      									</li>
      								<li className="elementor-icon-list-item">
      										<span className="elementor-icon-list-text">(+62) 8123 456 789</span>
      									</li>
      								<li className="elementor-icon-list-item">
      										<span className="elementor-icon-list-text">contacto@twinflames.com</span>
      									</li>
      						</ul>
      						</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-47d59040" data-id="47d59040" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-3aedc7c6 elementor-widget elementor-widget-image" data-id="3aedc7c6" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
      				<div className="elementor-widget-container">
      															<img width="500" height="224" src="/contactcopy/966bdc7a239a193c43d2bebae742390c.png" className="attachment-full size-full wp-image-218" alt="" decoding="async" srcSet="/contactcopy/966bdc7a239a193c43d2bebae742390c.png 500w, /contactcopy/2f5562aa4f103b8b6b3f6647874e135d.png 300w" sizes="(max-width: 500px) 100vw, 500px" />															</div>
      				</div>
      				<div className="elementor-element elementor-element-56467103 elementor-shape-circle e-grid-align-mobile-center elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="56467103" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-social-icons-wrapper elementor-grid" role="list">
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-605a83b" target="_blank">
      						<span className="elementor-screen-only">Instagram</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>					</a>
      				</span>
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-16cd9a1" target="_blank">
      						<span className="elementor-screen-only">Twitter</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>					</a>
      				</span>
      							<span className="elementor-grid-item" role="listitem">
      					<a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-76c6d80" target="_blank">
      						<span className="elementor-screen-only">Youtube</span>
      						<svg aria-hidden="true" className="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>					</a>
      				</span>
      					</div>
      						</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-70cca96e" data-id="70cca96e" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-7120e40 elementor-widget elementor-widget-heading" data-id="7120e40" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Navegacin</h2>				</div>
      				</div>
      				<div className="elementor-element elementor-element-70d3263f elementor-align-end elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="70d3263f" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      				<div className="elementor-widget-container">
      							<ul className="elementor-icon-list-items">
      							<li className="elementor-icon-list-item">
      											<a href="#">

      											<span className="elementor-icon-list-text">Sobre m</span>
      											</a>
      									</li>
      								<li className="elementor-icon-list-item">
      											<a href="#">

      											<span className="elementor-icon-list-text">Cursos</span>
      											</a>
      									</li>
      								<li className="elementor-icon-list-item">
      											<a href="#">

      											<span className="elementor-icon-list-text">Blog</span>
      											</a>
      									</li>
      								<li className="elementor-icon-list-item">
      											<a href="#">

      											<span className="elementor-icon-list-text">Contacto</span>
      											</a>
      									</li>
      						</ul>
      						</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<section className="elementor-section elementor-inner-section elementor-element elementor-element-4c90171e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4c90171e" data-element_type="section" data-e-type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4c12d415" data-id="4c12d415" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-4c54267b elementor-widget elementor-widget-text-editor" data-id="4c54267b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Aviso de privacidad</p>								</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4798b0d3" data-id="4798b0d3" data-element_type="column" data-e-type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-130e110a elementor-widget elementor-widget-text-editor" data-id="130e110a" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Copyright  2024. All rights reserved.</p>								</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      					</div>
      		</div>
      					</div>
      		</section>
      				</div>
      						</footer>
      			</div>



































    </>
  );
}

export default MirroredContactPage;


