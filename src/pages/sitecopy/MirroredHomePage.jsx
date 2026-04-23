import { useEffect } from "react";
import "./site.css";

const BODY_CLASS =
  "home wp-singular page-template page-template-elementor_canvas page page-id-2 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor jkit-color-scheme hello-elementor-default elementor-default elementor-template-canvas elementor-kit-82 elementor-page elementor-page-2";

function MirroredHomePage() {
  useEffect(() => {
    const previousClassName = document.body.className;
    document.body.className = BODY_CLASS;

    return () => {
      document.body.className = previousClassName;
    };
  }, []);

  return (
    <>
      <div
        data-elementor-type="wp-page"
        data-elementor-id="2"
        className="elementor elementor-2"
        data-elementor-post-type="page"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-29b9c7da elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="29b9c7da"
          data-element_type="section"
          data-e-type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4385e33f"
              data-id="4385e33f"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-224d4f31 elementor-widget elementor-widget-image"
                  data-id="224d4f31"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      fetchPriority="high"
                      decoding="async"
                      width="500"
                      height="224"
                      src="/sitecopy/966bdc7a239a193c43d2bebae742390c.png"
                      className="attachment-full size-full wp-image-218"
                      alt=""
                      srcSet="/sitecopy/966bdc7a239a193c43d2bebae742390c.png 500w, /sitecopy/2f5562aa4f103b8b6b3f6647874e135d.png 300w"
                      sizes="(max-width: 500px) 100vw, 500px"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2c8c9180"
              data-id="2c8c9180"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-3bf884ce elementor-widget elementor-widget-jkit_nav_menu"
                  data-id="3bf884ce"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"st_submenu_item_text_hover_bg_background_background":"classic"}'
                  data-widget_type="jkit_nav_menu.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_2__69e9c4933e7c1"
                      data-item-indicator='&lt;i aria-hidden="true" className="jki jki-chevron-down-line"&gt;&lt;/i&gt;'
                    >
                      <button
                        aria-label="open-menu"
                        className="jkit-hamburger-menu"
                      >
                        <i
                          aria-hidden="true"
                          className="jki jki-bars-solid"
                        ></i>
                      </button>
                      <div className="jkit-menu-wrapper">
                        <div className="jkit-menu-container">
                          <ul
                            id="menu-menu"
                            className="jkit-menu jkit-menu-direction-flex jkit-submenu-position-top"
                          >
                            <li
                              id="menu-item-141"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-141"
                            >
                              <a href="/" aria-current="page">
                                Inicio
                              </a>
                            </li>
                            <li
                              id="menu-item-293"
                              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-293"
                            >
                              <a href="/#sobre" aria-current="page">
                                Sobre mí
                              </a>
                            </li>
                            <li
                              id="menu-item-294"
                              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-294"
                            >
                              <a href="/#servicios" aria-current="page">
                                Servicios
                              </a>
                            </li>
                            <li
                              id="menu-item-149"
                              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-149"
                            >
                              <a href="/#planes">Más</a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-295"
                                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-295"
                                >
                                  <a href="/#planes" aria-current="page">
                                    Planes
                                  </a>
                                </li>
                                <li
                                  id="menu-item-296"
                                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-296"
                                >
                                  <a href="/#planes" aria-current="page">
                                    Citas
                                  </a>
                                </li>
                                <li
                                  id="menu-item-297"
                                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-297"
                                >
                                  <a href="/#planes" aria-current="page">
                                    FAQ
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-298"
                              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-298"
                            >
                              <a href="/#blog" aria-current="page">
                                Blog
                              </a>
                            </li>
                            <li
                              id="menu-item-144"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                            >
                              <a href="/contacto/">Contacto</a>
                            </li>
                          </ul>
                        </div>
                        <div className="jkit-nav-identity-panel">
                          <div className="jkit-nav-site-title">
                            <a
                              href="/"
                              className="jkit-nav-logo"
                              aria-label="Home Link"
                            ></a>
                          </div>
                          <button
                            aria-label="close-menu"
                            className="jkit-close-menu"
                          >
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-times"
                              viewBox="0 0 352 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="jkit-overlay"></div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6228e7af elementor-hidden-tablet elementor-hidden-mobile"
              data-id="6228e7af"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-4fa97b95 elementor-shape-square e-grid-align-right elementor-grid-0 elementor-widget elementor-widget-social-icons"
                  data-id="4fa97b95"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="social-icons.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="elementor-social-icons-wrapper elementor-grid"
                      role="list"
                    >
                      <span className="elementor-grid-item" role="listitem">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-605a83b"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">
                            Instagram
                          </span>
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-instagram"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>{" "}
                        </a>
                      </span>
                      <span className="elementor-grid-item" role="listitem">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-16cd9a1"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Twitter</span>
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-twitter"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </svg>{" "}
                        </a>
                      </span>
                      <span className="elementor-grid-item" role="listitem">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-76c6d80"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Youtube</span>
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-youtube"
                            viewBox="0 0 576 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                          </svg>{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-e2b2a7c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="e2b2a7c"
          data-element_type="section"
          data-e-type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-37c4b970"
              data-id="37c4b970"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-1ed5a0d8  elementor-absolute  elementor-widget elementor-widget-image"
                  data-id="1ed5a0d8"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeIn","_animation_delay":"200","_position":"absolute"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      width="195"
                      height="246"
                      src="/sitecopy/7e09f8bef16557b5157a2c87356e1405.png"
                      className="attachment-full size-full wp-image-13"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d47d8a5   elementor-widget elementor-widget-heading"
                  data-id="d47d8a5"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Twin Flames
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-9ea5caa  elementor-widget-mobile__width-auto elementor-absolute  elementor-widget elementor-widget-image"
                  data-id="9ea5caa"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeIn","_animation_delay":"200","_position":"absolute"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      width="155"
                      height="159"
                      src="/sitecopy/da8dc0f2be0c8f5a7054024d2c698acd.png"
                      className="attachment-full size-full wp-image-14"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5eea98ba   elementor-widget elementor-widget-text-editor"
                  data-id="5eea98ba"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInRight"}'
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p className="p1">
                      El Coaching de Ascensión de Llamas Gemelas es una
                      herramienta poderosa entender, fortalecer y profundizar en
                      la conexión con Dios, con una mismo y con su llama gemela
                      promoviendo el crecimiento y la armonía en todos los
                      aspectos.<span className="Apple-converted-space"> </span>
                    </p>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5affdeb6   elementor-widget elementor-widget-button"
                  data-id="5affdeb6"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInRight"}'
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        className="elementor-button elementor-button-link elementor-size-sm"
                        href="#sobre"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">Ver más</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-77df59b8"
              data-id="77df59b8"
              data-element_type="column"
              data-e-type="column"
              data-settings='{"background_background":"classic","animation":"none"}'
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay"></div>
                <div
                  className="elementor-element elementor-element-4ad09532 elementor-widget__width-auto elementor-absolute  elementor-widget elementor-widget-image"
                  data-id="4ad09532"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_position":"absolute","_animation":"zoomIn","_animation_delay":"500"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="165"
                      height="283"
                      src="/sitecopy/b7f2a676459bee1553114a6ca28be642.png"
                      className="attachment-full size-full wp-image-16"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-556a8f79 elementor-widget__width-auto elementor-absolute elementor-widget-tablet__width-auto  elementor-widget elementor-widget-image"
                  data-id="556a8f79"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_position":"absolute","_animation":"zoomIn","_animation_delay":"800"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="220"
                      height="219"
                      src="/sitecopy/3776ad6a37a37fed8043030777497655.png"
                      className="attachment-full size-full wp-image-17"
                      alt=""
                      srcSet="/sitecopy/3776ad6a37a37fed8043030777497655.png 220w, /sitecopy/0e24f11a891461095d796881cbf3eacd.png 150w"
                      sizes="(max-width: 220px) 100vw, 220px"
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-176e78e8 elementor-widget__width-auto elementor-absolute  elementor-widget elementor-widget-image"
                  data-id="176e78e8"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_position":"absolute","_animation":"zoomIn","_animation_delay":"700"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="218"
                      height="218"
                      src="/sitecopy/fddd9789d7d0f592d56fa84a58626748.png"
                      className="attachment-full size-full wp-image-18"
                      alt=""
                      srcSet="/sitecopy/fddd9789d7d0f592d56fa84a58626748.png 218w, /sitecopy/bb4a895574381a924bbc6f8f01d07de0.png 150w"
                      sizes="(max-width: 218px) 100vw, 218px"
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6e6420a6 elementor-widget__width-auto elementor-absolute  elementor-widget elementor-widget-image"
                  data-id="6e6420a6"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_position":"absolute","_animation":"zoomIn","_animation_delay":"600"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="272"
                      height="273"
                      src="/sitecopy/5882ee7a2475116f110b0cb5723ea585.png"
                      className="attachment-full size-full wp-image-19"
                      alt=""
                      srcSet="/sitecopy/5882ee7a2475116f110b0cb5723ea585.png 272w, /sitecopy/e7613b73f4810ee60e1d31abeed025e6.png 150w"
                      sizes="(max-width: 272px) 100vw, 272px"
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-758eb92  elementor-widget elementor-widget-image"
                  data-id="758eb92"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInUp"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="600"
                      src="/sitecopy/6efb9df21dc151d421bce00dba24927e.png"
                      className="attachment-full size-full wp-image-260"
                      alt=""
                      srcSet="/sitecopy/6efb9df21dc151d421bce00dba24927e.png 400w, /sitecopy/7dbd1ec5b1833a090f63abf144c283e9.png 200w"
                      sizes="(max-width: 400px) 100vw, 400px"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-6019a91b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="6019a91b"
          data-element_type="section"
          data-e-type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3d3a1cc9"
              data-id="3d3a1cc9"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-3d664a5c   elementor-widget elementor-widget-jkit_heading"
                  data-id="3d664a5c"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInUp"}'
                  data-widget_type="jkit_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_1_69e9c49346f4d">
                      <div className="heading-section-title  display-inline-block">
                        <h2 className="heading-title">
                          Beneficios del Coaching{" "}
                          <span className="style-color">
                            <span>Twin Flames</span>
                          </span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-68001af elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="68001af"
                  data-element_type="section"
                  data-e-type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fbed173"
                      data-id="fbed173"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-524ab07  jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box"
                          data-id="524ab07"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_2_69e9c4934b8d4">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-favorites-light"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">
                                    Comprensión Profunda de la Relación
                                  </h2>
                                  <p className="icon-box-description">
                                    Ayuda a las parejas a entender la naturaleza
                                    y propósito de su conexión, brindando una
                                    mayor claridad sobre su relación.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0a526c9"
                      data-id="0a526c9"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-194d2b53  jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box"
                          data-id="194d2b53"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_3_69e9c4934c203">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-heart1-light"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">Sanación Personal</h2>
                                  <p className="icon-box-description">
                                    Promueve la sanación emocional y espiritual
                                    de cada individuo, ayudándolos a enfrentar y
                                    superar traumas, heridas y bloqueos
                                    internos.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b65516d"
                      data-id="b65516d"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-1d2530e0  jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box"
                          data-id="1d2530e0"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_4_69e9c4934c938">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-rocket-light"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">
                                    Crecimiento Personal y Espiritual
                                  </h2>
                                  <p className="icon-box-description">
                                    Impulsa el crecimiento personal y espiritual
                                    de ambos individuos, ayudándolos a
                                    evolucionar y alcanzar su máximo potencial.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-3c162a6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="3c162a6"
                  data-element_type="section"
                  data-e-type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d6e2afc"
                      data-id="d6e2afc"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-8df12cc  jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box"
                          data-id="8df12cc"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_5_69e9c4934cfc6">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-users2-light"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">
                                    Manejo de Conflictos
                                  </h2>
                                  <p className="icon-box-description">
                                    Proporciona herramientas y técnicas para
                                    manejar y resolver conflictos de manera
                                    constructiva y amorosa.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-23bab4f"
                      data-id="23bab4f"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-1e869b6  jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box"
                          data-id="1e869b6"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_6_69e9c4934d670">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-justice-light"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">
                                    Alineación y Equilibrio
                                  </h2>
                                  <p className="icon-box-description">
                                    Ayuda a las personas a encontrar un
                                    equilibrio y alineación en sus vidas, tanto
                                    a nivel individual como en la relación.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-30972e1"
                      data-id="30972e1"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-8742535  jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box"
                          data-id="8742535"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_7_69e9c4934dd25">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-diamond2-light"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">Empoderamiento</h2>
                                  <p className="icon-box-description">
                                    Empodera a los individuos para que tomen
                                    decisiones conscientes y alineadas con su
                                    verdadero ser, fortaleciendo su conexión
                                    interna y externa.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
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
        <div
          className="elementor-element elementor-element-fb3fff2 e-con-full e-flex e-con e-parent"
          data-id="fb3fff2"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"video","background_video_link":"https:\/\/twinflamesmastersof.love\/wp-content\/uploads\/2024\/08\/vi.mp4","background_play_on_mobile":"yes"}'
        >
          <div className="elementor-background-video-container">
            <video
              className="elementor-background-video-hosted"
              role="presentation"
              src="/sitecopy/vi.mp4"
              autoPlay
              muted
              playsInline
              loop
            ></video>
          </div>{" "}
        </div>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-3fe9db94 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="3fe9db94"
          data-element_type="section"
          data-e-type="section"
          id="sobre"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-66219a71"
              data-id="66219a71"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-48dcf5f0   elementor-widget elementor-widget-heading"
                  data-id="48dcf5f0"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Sobre mí
                    </h2>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-412ef90d"
              data-id="412ef90d"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-76827ea3 elementor-absolute elementor-widget-mobile__width-auto elementor-widget elementor-widget-image"
                  data-id="76827ea3"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="428"
                      height="412"
                      src="/sitecopy/f56d869ded9ef27393d45b36ccfcb297.png"
                      className="attachment-full size-full wp-image-21"
                      alt=""
                      srcSet="/sitecopy/f56d869ded9ef27393d45b36ccfcb297.png 428w, /sitecopy/e4aeb46f414fa3765a0a2b430445d723.png 300w"
                      sizes="(max-width: 428px) 100vw, 428px"
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6a0720b2 elementor-widget elementor-widget-image"
                  data-id="6a0720b2"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="1708"
                      height="2560"
                      src="/sitecopy/1a4f54a5de332c9ee2a668b49a4bc1fb.jpg"
                      className="attachment-full size-full wp-image-159"
                      alt=""
                      srcSet="/sitecopy/1a4f54a5de332c9ee2a668b49a4bc1fb.jpg 1708w, /sitecopy/79c1d7b469ae0677e934578b9ba7d8b1.jpg 200w, /sitecopy/6c541cfad0589b48e11f635619ca660b.jpg 683w, /sitecopy/cf481becacf06f8806d6bb95c0ac4d35.jpg 768w, /sitecopy/a8115aa0df95a4dcbcc30fb67eb375a1.jpg 1025w, /sitecopy/c71472185471785b9ad428e177ed0c7f.jpg 1366w"
                      sizes="(max-width: 1708px) 100vw, 1708px"
                    />{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-320c5e6c elementor-absolute elementor-widget-mobile__width-auto elementor-hidden-mobile elementor-widget elementor-widget-image"
                  data-id="320c5e6c"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="655"
                      height="649"
                      src="/sitecopy/d4bd77de97ce76f70b42eca8ab168ab8.png"
                      className="attachment-full size-full wp-image-23"
                      alt=""
                      srcSet="/sitecopy/d4bd77de97ce76f70b42eca8ab168ab8.png 655w, /sitecopy/f661c8c7e8c62c2adb6b6deebc001708.png 300w, /sitecopy/cc94137ca9884f1aa09fd5a0cea94d62.png 150w"
                      sizes="(max-width: 655px) 100vw, 655px"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-129014ad"
              data-id="129014ad"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-7a3bc80f   elementor-widget elementor-widget-jkit_heading"
                  data-id="7a3bc80f"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInRight"}'
                  data-widget_type="jkit_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="jeg-elementor-kit jkit-heading  align- align-tablet- align-mobile- jeg_module_2_8_69e9c4934e3c3">
                      <div className="heading-section-title  display-inline-block">
                        <h2 className="heading-title">
                          Hola, Soy{" "}
                          <span className="style-color">
                            <span>Graciela</span>
                          </span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-46c7e095 elementor-widget elementor-widget-text-editor"
                  data-id="46c7e095"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p className="p1">
                      El crecimiento personal y la ascensión son el propósito de
                      Llamas Gemelas. Desde mi experiencia de vida quiero
                      compartirte este método que cambió mi perspectiva para
                      siempre.
                    </p>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3c154500 elementor-align-left elementor-widget elementor-widget-button"
                  data-id="3c154500"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        className="elementor-button elementor-button-link elementor-size-sm"
                        href="#"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Leer más
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-101f92f6 elementor-hidden-mobile elementor-widget elementor-widget-spacer"
                  data-id="101f92f6"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-6a165b4c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="6a165b4c"
          data-element_type="section"
          data-e-type="section"
          id="servicios"
        >
          <div className="elementor-background-overlay"></div>
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-24c0fdb0"
              data-id="24c0fdb0"
              data-element_type="column"
              data-e-type="column"
              data-settings='{"background_background":"classic"}'
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-ad6ac3f   elementor-widget elementor-widget-jkit_heading"
                  data-id="ad6ac3f"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget_type="jkit_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="jeg-elementor-kit jkit-heading  align- align-tablet- align-mobile- jeg_module_2_9_69e9c4934ef06">
                      <div className="heading-section-title  display-inline-block">
                        <h2 className="heading-title">
                          ¿Qué Incluye el Coaching de
                          <span className="style-color">
                            <span>Llamas Gemelas?</span>
                          </span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-71366b85 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="71366b85"
                  data-element_type="section"
                  data-e-type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-59d7930f"
                      data-id="59d7930f"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-35124808 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="35124808"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_2_10_69e9c4934f68c">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-user-2-light"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">
                                    Sesiones Individuales y Grupales
                                  </h2>
                                  <p className="icon-box-description">
                                    Incluyen sesiones tanto individuales como de
                                    grupo para heridas bloqueos y traumas.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-128db923 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="128db923"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_2_11_69e9c4934fcd4">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-handshake-solid"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">
                                    Apoyo Emocional y Espiritual
                                  </h2>
                                  <p className="icon-box-description">
                                    Se brinda un apoyo continuo y personalizado
                                    para guiar a los grupos en su camino.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7d738e88"
                      data-id="7d738e88"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-291c13cc jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="291c13cc"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_2_12_69e9c49350376">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-hand-holding-heart-solid"
                                    ></i>
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">
                                    Técnica Ejercio del Espejo
                                  </h2>
                                  <p className="icon-box-description">
                                    Se incorporan prácticas de meditación y
                                    mindfulness para fomentar la conexión
                                    espiritual y la paz interior.
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-70c9937 elementor-align-center elementor-widget elementor-widget-button"
                          data-id="70c9937"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                className="elementor-button elementor-button-link elementor-size-sm"
                                href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjMwMiIsInRvZ2dsZSI6ZmFsc2V9"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">
                                    Ver video
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3125f855"
              data-id="3125f855"
              data-element_type="column"
              data-e-type="column"
              data-settings='{"background_background":"classic"}'
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-3059f517 elementor-widget elementor-widget-spacer"
                  data-id="3059f517"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-587a8e61 elementor-widget elementor-widget-spacer"
                  data-id="587a8e61"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="elementor-element elementor-element-db6eda8 e-con-full e-flex e-con e-parent"
          data-id="db6eda8"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        ></div>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-2691581a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="2691581a"
          data-element_type="section"
          data-e-type="section"
          data-settings='{"background_background":"classic"}'
          id="planes"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3786b054"
              data-id="3786b054"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-348ffeae   elementor-widget elementor-widget-jkit_heading"
                  data-id="348ffeae"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInUp"}'
                  data-widget_type="jkit_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_13_69e9c49350d8d">
                      <div className="heading-section-title  display-inline-block">
                        <h2 className="heading-title">
                          <span className="style-color">
                            <span>Agenda tu Cita</span>
                          </span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-7f4a94d2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="7f4a94d2"
                  data-element_type="section"
                  data-e-type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5f97ca52"
                      data-id="5f97ca52"
                      data-element_type="column"
                      data-e-type="column"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-4dd4cfdf jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="4dd4cfdf"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_14_69e9c49351559">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="270"
                                      height="242"
                                      src="/sitecopy/b8c066c30df80768ca08dbe5774a7122.png"
                                      className="attachment-full size-full"
                                      alt="2 Sesiones Privadas"
                                      url="/sitecopy/b8c066c30df80768ca08dbe5774a7122.png"
                                    />
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">2 Sesiones Privadas</h2>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-4cf9d68 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="4cf9d68"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  2 sesiones al mes
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  Sesiones quincenales
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-35e32e2a elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                          data-id="35e32e2a"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="divider.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator"></span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-615bc008 elementor-widget elementor-widget-jkit_heading"
                          data-id="615bc008"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_15_69e9c49351c71">
                              <div className="heading-section-title  display-inline-block">
                                <h2 className="heading-title">
                                  <span className="style-color">
                                    <span>$210 USD</span>
                                  </span>
                                </h2>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-60922266 elementor-align-justify elementor-widget elementor-widget-button"
                          data-id="60922266"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                className="elementor-button elementor-button-link elementor-size-sm"
                                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3VW46666TF663964GM2GE7LQ"
                                target="_blank"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">
                                    Agendar citas
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f5cdc61"
                      data-id="f5cdc61"
                      data-element_type="column"
                      data-e-type="column"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-bbb5613 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="bbb5613"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_16_69e9c49352828">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="270"
                                      height="242"
                                      src="/sitecopy/b8c066c30df80768ca08dbe5774a7122.png"
                                      className="attachment-full size-full"
                                      alt="4 Sesiones Privadas"
                                      url="/sitecopy/b8c066c30df80768ca08dbe5774a7122.png"
                                    />
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">4 Sesiones Privadas</h2>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-3e41aae elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="3e41aae"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  4 sesiones al mes{" "}
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  Sesiones semanales
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-bd39107 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                          data-id="bd39107"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="divider.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator"></span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-9dc42a3 elementor-widget elementor-widget-jkit_heading"
                          data-id="9dc42a3"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_17_69e9c49352f4e">
                              <div className="heading-section-title  display-inline-block">
                                <h2 className="heading-title">
                                  <span className="style-color">
                                    <span>$400 USD</span>
                                  </span>
                                </h2>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-1b68a27 elementor-align-justify elementor-widget elementor-widget-button"
                          data-id="1b68a27"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                className="elementor-button elementor-button-link elementor-size-sm"
                                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3VW46666TF663964GM2GE7LQ"
                                target="_blank"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">
                                    Agendar citas
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6f1e746d"
                      data-id="6f1e746d"
                      data-element_type="column"
                      data-e-type="column"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-1e00e5fc jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="1e00e5fc"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_18_69e9c493536a5">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="282"
                                      height="247"
                                      src="/sitecopy/f6e37dbd0a213e2c98554f51211821c2.png"
                                      className="attachment-full size-full"
                                      alt="Sesión Uno a Uno"
                                      url="/sitecopy/f6e37dbd0a213e2c98554f51211821c2.png"
                                    />
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">Sesión Uno a Uno</h2>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-8ebb150 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="8ebb150"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  Sesión privada
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  Coaching personalizado
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-1b3e27ab elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                          data-id="1b3e27ab"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="divider.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator"></span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-422715ae elementor-widget elementor-widget-jkit_heading"
                          data-id="422715ae"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_19_69e9c49353d71">
                              <div className="heading-section-title  display-inline-block">
                                <h2 className="heading-title">
                                  <span className="style-color">
                                    <span>$111 USD</span>
                                  </span>
                                </h2>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-1532e211 elementor-align-justify elementor-widget elementor-widget-button"
                          data-id="1532e211"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                className="elementor-button elementor-button-link elementor-size-sm"
                                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&#038;hosted_button_id=4EBLZRTEXZXCA"
                                target="_blank"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">
                                    Inscribirme
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d9c01b6"
                      data-id="d9c01b6"
                      data-element_type="column"
                      data-e-type="column"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-783d5aaa jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                          data-id="783d5aaa"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_icon_box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_2_20_69e9c49354546">
                              <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                  <div className="icon style-color">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="373"
                                      height="321"
                                      src="/sitecopy/2d4e5b56250251d1e4950c8bf7705daf.png"
                                      className="attachment-full size-full"
                                      alt="Sesión Grupal"
                                      url="/sitecopy/2d4e5b56250251d1e4950c8bf7705daf.png"
                                      srcSet="/sitecopy/2d4e5b56250251d1e4950c8bf7705daf.png 373w, /sitecopy/68c0410d53adbd9e2b5089ed23194c16.png 300w"
                                      sizes="(max-width: 373px) 100vw, 373px"
                                    />
                                  </div>
                                </div>
                                <div className="icon-box icon-box-body">
                                  <h2 className="title">Sesión Grupal</h2>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-dc1ef8f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="dc1ef8f"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  4 sesiones al mes
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text">
                                  Sesiones semaneles
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-66193410 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                          data-id="66193410"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="divider.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator"></span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-140d9054 elementor-widget elementor-widget-jkit_heading"
                          data-id="140d9054"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_21_69e9c49354bb4">
                              <div className="heading-section-title  display-inline-block">
                                <h2 className="heading-title">
                                  <span className="style-color">
                                    <span>$123 USD</span>
                                  </span>
                                </h2>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-544cc0a4 elementor-align-justify elementor-widget elementor-widget-button"
                          data-id="544cc0a4"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                className="elementor-button elementor-button-link elementor-size-sm"
                                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&#038;hosted_button_id=FNHF72WLF3SDY"
                                target="_blank"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">
                                    Inscribirme
                                  </span>
                                </span>
                              </a>
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
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-2d54f1f0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="2d54f1f0"
          data-element_type="section"
          data-e-type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-background-overlay"></div>
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-52b989f7"
              data-id="52b989f7"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-ceb1a23 elementor-widget elementor-widget-jkit_heading"
                  data-id="ceb1a23"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="jkit_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="jeg-elementor-kit jkit-heading  align- align-tablet- align-mobile- jeg_module_2_22_69e9c4935529d">
                      <div className="heading-section-title  display-inline-block">
                        <h2 className="heading-title">
                          <span className="style-color">
                            <span>Testimonios</span>
                          </span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-1aff5da"
              data-id="1aff5da"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-2a74bcaf elementor-widget elementor-widget-jkit_testimonials"
                  data-id="2a74bcaf"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="jkit_testimonials.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="jeg-elementor-kit jkit-testimonials arrow-bottom-edge style-2  jeg_module_2_23_69e9c4935b0f8"
                      data-id="jeg_module_2_23_69e9c4935b0f8"
                      data-settings='{"autoplay":true,"autoplay_speed":4000,"autoplay_hover_pause":false,"show_navigation":true,"navigation_left":"&lt;span&gt;&lt;i aria-hidden=\"true\" className=\"jki jki-arrow-left-solid\"&gt;&lt;\/i&gt;&lt;\/span&gt;","navigation_right":"&lt;span&gt;&lt;i aria-hidden=\"true\" className=\"jki jki-arrow-right-solid\"&gt;&lt;\/i&gt;&lt;\/span&gt;","show_dots":false,"arrow_position":"bottom","responsive":{"desktop":{"items":"2","margin":"20","breakpoint":1025},"tablet":{"items":2,"margin":10,"breakpoint":768},"mobile":{"items":1,"margin":10,"breakpoint":0}}}'
                    >
                      <div className="testimonials-list">
                        <div className="testimonials-track">
                          <div className="testimonial-item fix-height elementor-repeater-item-3cb2c13">
                            <div className="testimonial-box hover-from-left">
                              <div className="comment-content">
                                <p>
                                  Estoy sumamente agradecida con Graciela por su
                                  sesión de Coaching ❤️✨ El tiempo, la
                                  dedicación, el entendimiento de poder
                                  ayudarme. Me sentí muy segura y apoyada e
                                  identificamos los bloqueos a mi unión. Es
                                  seguro recibir ayuda y obtenerla pedir el
                                  soporte necesario en nuestro viaje. Reclamen
                                  su sesión y espacio con Graciela te sentirás
                                  comprendida . Gracias, gracias!{" "}
                                </p>
                              </div>
                              <div className="comment-header">
                                <ul className="rating-stars"></ul>
                              </div>
                              <div className="comment-bio">
                                <div className="bio-details">
                                  <div className="profile-image"></div>
                                  <span className="profile-info">
                                    <strong className="profile-name">
                                      Vanessa Ibarra
                                    </strong>
                                    <p className="profile-des"></p>
                                  </span>
                                </div>
                                <div className="icon-content">
                                  <i
                                    aria-hidden="true"
                                    className="jki jki-quote-light"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-item fix-height elementor-repeater-item-a752e73">
                            <div className="testimonial-box hover-from-left">
                              <div className="comment-content">
                                <p>
                                  Muchas gracias por la sesión. Me sentí muy a
                                  gusto contigo, me gustó tu trato y que me
                                  guiaste en las áreas que trabajamos para
                                  sanar. Me sentí muy en paz con el EE. Gracias
                                  por tu tiempo{" "}
                                </p>
                              </div>
                              <div className="comment-header">
                                <ul className="rating-stars"></ul>
                              </div>
                              <div className="comment-bio">
                                <div className="bio-details">
                                  <div className="profile-image"></div>
                                  <span className="profile-info">
                                    <strong className="profile-name">
                                      Irma Vallejo
                                    </strong>
                                    <p className="profile-des"></p>
                                  </span>
                                </div>
                                <div className="icon-content">
                                  <i
                                    aria-hidden="true"
                                    className="jki jki-quote-light"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-item fix-height elementor-repeater-item-123e1a8">
                            <div className="testimonial-box hover-from-left">
                              <div className="comment-content">
                                <p>
                                  Buenas tardes, hoy tuve mi sesión gratuita con
                                  Graciela de 1 hora, ella es muy cariñosa y
                                  amorosa es increíble cómo fui de una situación
                                  que me sentía frustrada a una emoción profunda
                                  en mi, fue muy sanador está sesión, pude ver
                                  cómo me autosavoteo rechazando mi abundancia y
                                  no dejando fluir a Dios en mí, después de esta
                                  sesión deseo unirme a las clases de coaching,
                                  ella me ayudó a reclamar mi lugar, es
                                  increíble cómo todo se puede sanar. Espero
                                  pronto poder estar en las clases semanales.
                                  Saludos Olvidé decir que sentí mucha paz y
                                  claridad ✨
                                </p>
                              </div>
                              <div className="comment-header">
                                <ul className="rating-stars"></ul>
                              </div>
                              <div className="comment-bio">
                                <div className="bio-details">
                                  <div className="profile-image"></div>
                                  <span className="profile-info">
                                    <strong className="profile-name">
                                      Rachel Bueno Lesme
                                    </strong>
                                    <p className="profile-des"></p>
                                  </span>
                                </div>
                                <div className="icon-content">
                                  <i
                                    aria-hidden="true"
                                    className="jki jki-quote-light"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-item fix-height elementor-repeater-item-ffd00e0">
                            <div className="testimonial-box hover-from-left">
                              <div className="comment-content">
                                <p>
                                  Hola, mi nombre es Carla Luquin y estoy en
                                  este viaje de llamas gemelas ase tres años,
                                  quiero compartir la bonita experiencia que
                                  tuve hoy con la coach Graciela del C, esta
                                  seccion fue maravillosa para mi ya que ella me
                                  mostro como aser el enjercicio del espejo lo
                                  cual no entendia muy bien pero con su ayuda lo
                                  entendi mucho mejor, yo pense que no tenia
                                  mucho que sanar pero Graciela fue muy dulce y
                                  paciente y me mostro como profundisar en mi
                                  lado oscuro, en verdad la recomendaria siempre
                                  incluso con su ayuda me eh motivado a comensar
                                  mis seciones con un coach, mil gracias
                                  Graciela por tu bello tiempo y tu Gran
                                  enseñansa de hoy.
                                </p>
                              </div>
                              <div className="comment-header">
                                <ul className="rating-stars"></ul>
                              </div>
                              <div className="comment-bio">
                                <div className="bio-details">
                                  <div className="profile-image"></div>
                                  <span className="profile-info">
                                    <strong className="profile-name">
                                      Carla Luquin
                                    </strong>
                                    <p className="profile-des"></p>
                                  </span>
                                </div>
                                <div className="icon-content">
                                  <i
                                    aria-hidden="true"
                                    className="jki jki-quote-light"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-2ef98f44 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="2ef98f44"
          data-element_type="section"
          data-e-type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-background-overlay"></div>
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-15919254"
              data-id="15919254"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-7416702   elementor-widget elementor-widget-jkit_heading"
                  data-id="7416702"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInLeft"}'
                  data-widget_type="jkit_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_24_69e9c4935bc0c">
                      <div className="heading-section-title  display-inline-block">
                        <h2 className="heading-title">
                          Propósito de las{" "}
                          <span className="style-color">
                            <span>Llamas Gemelas</span>
                          </span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4941ebe8   elementor-widget elementor-widget-text-editor"
                  data-id="4941ebe8"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"fadeInUp","_animation_delay":"100"}'
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        El propósito principal de Llamas Gemelas es la evolución
                        espiritual y el crecimiento personal. La relación está
                        diseñada para empujar a cada individuo a superar sus
                        limitaciones, sanar heridas pasadas y alcanzar su máximo
                        potencial. Esta conexión profunda y transformadora no
                        solo impacta a los individuos involucrados, sino que
                        también puede tener un efecto positivo en su entorno y
                        en el mundo en general.
                      </span>
                    </p>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        En resumen, las Llamas Gemelas representan una de las
                        conexiones más profundas y desafiantes que una persona
                        puede experimentar, ofreciendo una oportunidad única
                        para el crecimiento espiritual y la{" "}
                      </span>
                      ascensión <span style={{ fontWeight: 400 }}>personal.</span>
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-1a9535ed elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="1a9535ed"
          data-element_type="section"
          data-e-type="section"
          id="blog"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4e1f5629"
              data-id="4e1f5629"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-7736198a elementor-widget elementor-widget-jkit_heading"
                  data-id="7736198a"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="jkit_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_2_25_69e9c4935c7d1">
                      <div className="heading-section-title  display-inline-block">
                        <h2 className="heading-title">
                          <span className="style-color">
                            <span>Blog</span>
                          </span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6f24 elementor-widget elementor-widget-jkit_post_block"
                  data-id="6f24"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="jkit_post_block.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="jeg-elementor-kit jkit-postblock postblock-type-3 jkit-pagination-disable post-element jeg_module_2_26_69e9c493618bd"
                      data-id="jeg_module_2_26_69e9c493618bd"
                      data-settings='{"post_type":"post","number_post":{"unit":"px","size":3,"sizes":[]},"post_offset":0,"unique_content":"disable","include_post":"","exclude_post":"","include_category":"","exclude_category":"","include_author":"","include_tag":"","exclude_tag":"","sort_by":"oldest","pagination_mode":"disable","pagination_loadmore_text":"Load More","pagination_loading_text":"Loading...","pagination_number_post":{"unit":"px","size":3,"sizes":[]},"pagination_scroll_limit":0,"pagination_icon":{"value":"","library":""},"pagination_icon_position":"before","st_category_position":"left","sg_content_postblock_type":"type-3","sg_content_element_order":"title,meta,excerpt,read","sg_content_breakpoint":"tablet","sg_content_title_html_tag":"h3","sg_content_category_enable":"","sg_content_excerpt_enable":"yes","sg_content_excerpt_length":{"unit":"px","size":20,"sizes":[]},"sg_content_excerpt_more":"...","sg_content_readmore_enable":"yes","sg_content_readmore_icon":{"value":"jki jki-arrow-right-solid","library":"jkiticon"},"sg_content_readmore_icon_position":"after","sg_content_readmore_text":"Leer m\u00e1s","sg_content_comment_enable":"","sg_content_comment_icon":{"value":"fas fa-comment","library":"fa-solid"},"sg_content_comment_icon_position":"before","sg_content_meta_enable":"yes","sg_content_meta_author_enable":"","sg_content_meta_author_by_text":"by","sg_content_meta_author_icon":{"value":"fas fa-user","library":"fa-solid"},"sg_content_meta_author_icon_position":"before","sg_content_meta_date_enable":"yes","sg_content_meta_date_type":"published","sg_content_meta_date_format":"default","sg_content_meta_date_format_custom":"F j, Y","sg_content_meta_date_icon":{"value":"jki jki-clock-line","library":"jkiticon"},"sg_content_meta_date_icon_position":"before","sg_content_image_size_imagesize_size":"full","paged":1,"class":"jkit_post_block"}'
                    >
                      <div className="jkit-block-container">
                        <div className="jkit-posts jkit-ajax-flag">
                          <article className="jkit-post post-1 post type-post status-publish format-standard hentry category-uncategorized">
                            <div className="jkit-thumb">
                              <a aria-label="Hello world!" href="#">
                                <div className="thumbnail-container no_thumbnail"></div>
                              </a>
                            </div>
                            <div className="jkit-postblock-content">
                              <h3 className="jkit-post-title">
                                <a href="#">Hello world!</a>
                              </h3>
                              <div className="jkit-post-meta">
                                <div className="jkit-meta-date icon-position-before">
                                  <i
                                    aria-hidden="true"
                                    className="jki jki-clock-line"
                                  ></i>
                                  junio 12, 2024
                                </div>
                              </div>
                              <div className="jkit-post-excerpt">
                                <p>
                                  Welcome to WordPress. This is your first post.
                                  Edit or delete it, then start writing!
                                </p>
                              </div>
                              <div className="jkit-post-meta-bottom">
                                <div className="jkit-meta-readmore icon-position-after">
                                  <a
                                    title="Hello world!"
                                    href="#"
                                    className="jkit-readmore"
                                  >
                                    Leer más
                                    <i
                                      aria-hidden="true"
                                      className="jki jki-arrow-right-solid"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-25d72168 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="25d72168"
          data-element_type="section"
          data-e-type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-29b85c33"
              data-id="29b85c33"
              data-element_type="column"
              data-e-type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-33033cd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="33033cd"
                  data-element_type="section"
                  data-e-type="section"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-background-overlay"></div>
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d716897"
                      data-id="d716897"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-1b43426e elementor-widget elementor-widget-heading"
                          data-id="1b43426e"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Suscríbete al newsletter
                            </h2>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-1e389693 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget-tablet__width-initial elementor-widget elementor-widget-jkit_mailchimp"
                          data-id="1e389693"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="jkit_mailchimp.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="jeg-elementor-kit jkit-mailchimp style-inline jeg_module_2_27_69e9c493651d9">
                              <form
                                method="post"
                                className="jkit-mailchimp-form"
                                data-listed=""
                                data-success-message="Successfully listed this email"
                                data-error-message="Something went wrong"
                              >
                                <div className="jkit-mailchimp-message"></div>
                                <div className="jkit-form-wrapper email-form">
                                  <div className="jkit-mailchimp-email jkit-input-wrapper input-container">
                                    <div className="jkit-form-group">
                                      <div className="jkit-input-element-container jkit-input-group">
                                        <input
                                          type="email"
                                          name="email"
                                          className="jkit-email jkit-form-control "
                                          placeholder="Tu correo electrónico"
                                          required=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="jkit-submit-input-holder jkit-input-wrapper">
                                    <button
                                      type="submit"
                                      className="jkit-mailchimp-submit position-before"
                                      name="jkit-mailchimp"
                                    >
                                      Suscríbete
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-552e0d52 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="552e0d52"
                  data-element_type="section"
                  data-e-type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7eb8a390"
                      data-id="7eb8a390"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-550963a5 elementor-widget elementor-widget-heading"
                          data-id="550963a5"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Conectar
                            </h2>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-348ec112 elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="348ec112"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-text">
                                  Aguascalientes, Ags.
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-text">
                                  (+52) 449 123 4567
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-text">
                                  contacto@twinflames.com
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5ded82bb"
                      data-id="5ded82bb"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-6f60c94b elementor-widget elementor-widget-image"
                          data-id="6f60c94b"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <img
                              fetchPriority="high"
                              decoding="async"
                              width="500"
                              height="224"
                              src="/sitecopy/966bdc7a239a193c43d2bebae742390c.png"
                              className="attachment-full size-full wp-image-218"
                              alt=""
                              srcSet="/sitecopy/966bdc7a239a193c43d2bebae742390c.png 500w, /sitecopy/2f5562aa4f103b8b6b3f6647874e135d.png 300w"
                              sizes="(max-width: 500px) 100vw, 500px"
                            />{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-24d1101a elementor-shape-circle e-grid-align-mobile-center elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
                          data-id="24d1101a"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="social-icons.default"
                        >
                          <div className="elementor-widget-container">
                            <div
                              className="elementor-social-icons-wrapper elementor-grid"
                              role="list"
                            >
                              <span
                                className="elementor-grid-item"
                                role="listitem"
                              >
                                <a
                                  className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-605a83b"
                                  target="_blank"
                                >
                                  <span className="elementor-screen-only">
                                    Instagram
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fab-instagram"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                  </svg>{" "}
                                </a>
                              </span>
                              <span
                                className="elementor-grid-item"
                                role="listitem"
                              >
                                <a
                                  className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-16cd9a1"
                                  target="_blank"
                                >
                                  <span className="elementor-screen-only">
                                    Twitter
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fab-twitter"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                  </svg>{" "}
                                </a>
                              </span>
                              <span
                                className="elementor-grid-item"
                                role="listitem"
                              >
                                <a
                                  className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-76c6d80"
                                  target="_blank"
                                >
                                  <span className="elementor-screen-only">
                                    Youtube
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fab-youtube"
                                    viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                  </svg>{" "}
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4ef8d48e"
                      data-id="4ef8d48e"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-407c25e4 elementor-widget elementor-widget-heading"
                          data-id="407c25e4"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Navegación
                            </h2>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-259176e6 elementor-align-end elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="259176e6"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <a href="/#sobre">
                                  <span className="elementor-icon-list-text">
                                    Sobre mí
                                  </span>
                                </a>
                              </li>
                              <li className="elementor-icon-list-item">
                                <a href="/#servicios">
                                  <span className="elementor-icon-list-text">
                                    Cursos
                                  </span>
                                </a>
                              </li>
                              <li className="elementor-icon-list-item">
                                <a href="/#blog">
                                  <span className="elementor-icon-list-text">
                                    Blog
                                  </span>
                                </a>
                              </li>
                              <li className="elementor-icon-list-item">
                                <a href="/contacto/">
                                  <span className="elementor-icon-list-text">
                                    Contacto
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-6cea78f6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="6cea78f6"
                  data-element_type="section"
                  data-e-type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-52c4a76f"
                      data-id="52c4a76f"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-2a9076f0 elementor-widget elementor-widget-text-editor"
                          data-id="2a9076f0"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <p>Aviso de privacidad</p>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-523c794a"
                      data-id="523c794a"
                      data-element_type="column"
                      data-e-type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-33e9cc2b elementor-widget elementor-widget-text-editor"
                          data-id="33e9cc2b"
                          data-element_type="widget"
                          data-e-type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <p>Copyright © 2024. All rights reserved.</p>{" "}
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

      <div
        data-elementor-type="popup"
        data-elementor-id="302"
        className="elementor elementor-302 elementor-location-popup"
        data-elementor-settings='{"a11y_navigation":"yes","timing":[]}'
        data-elementor-post-type="elementor_library"
      >
        <div
          className="elementor-element elementor-element-5134db1 e-flex e-con-boxed e-con e-parent"
          data-id="5134db1"
          data-element_type="container"
          data-e-type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-2843974 elementor-widget elementor-widget-video"
              data-id="2843974"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"youtube_url":"https:\/\/www.youtube.com\/watch?v=XHOmBV4js_E","video_type":"youtube","controls":"yes"}'
              data-widget_type="video.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-wrapper elementor-open-inline">
                  <div className="elementor-video"></div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MirroredHomePage;



