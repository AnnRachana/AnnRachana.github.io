import React from "react";
import "./Service.css";

const WEB_DESIGN_TITLE = "Web Design";
const WEB_DEVELOPMENT_TITLE = "Web Development";
const APP_DEVELOPMENT_TITLE = "App Development";

const ICON_PALETTE_CLASS = "fa-solid fa-palette";
const ICON_CODE_CLASS = "fa-solid fa-code";
const ICON_MOBILE_CLASS = "fa-solid fa-mobile-screen";
const SERVICE_BOX_CLASS = "service-box";
const ICON_WRAPPER_CLASS = "icon-wrapper";

const Service = () => {
  return (
    <section id="services">
      <div className="services reusable">
        <div className="headings">
          <h3>Services</h3>
          <div className="loaders"></div>
          <h1>I Provide Awesome Services</h1>
          <p style={{ marginBottom: "2rem" }}>What I will do for you</p>
        </div>
        <a href="https://github.com/AnnRachana">
          <div className="services-container">
            <div className={SERVICE_BOX_CLASS}>
              <div className={ICON_WRAPPER_CLASS}>
                <i className={ICON_PALETTE_CLASS}></i>
              </div>
              <h2>{WEB_DESIGN_TITLE}</h2>
              <p>
                I do Web design for the website that helps website to get a uiqw
                look. and I have high creativity
              </p>
              <h3>More Projects</h3>
            </div>

            <div className={SERVICE_BOX_CLASS}>
              <div className={ICON_WRAPPER_CLASS}>
                <i className={ICON_CODE_CLASS}></i>
              </div>
              <h2>{WEB_DEVELOPMENT_TITLE}</h2>
              <p>
                Web Development is the building and maintenance of website, it's
                the work that happens behind the scenes to...
              </p>
              <h3>More Projects</h3>
            </div>

            <div className={SERVICE_BOX_CLASS}>
              <div className={ICON_WRAPPER_CLASS}>
                <i className={ICON_MOBILE_CLASS}></i>
              </div>
              <h2>{APP_DEVELOPMENT_TITLE}</h2>
              <p>
                Mobile app development is the act or process by which a mobile
                app is developed for a mobile device.
              </p>
              <h3>More Projects</h3>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Service;
