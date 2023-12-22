import React from "react";
import "./Footer.css";

const Footer = () => {
  const titles = {
    aboutUs: "about Us",
    quickLinks: "Quick links",
    services: "Services",
    haveQuestion: "have a question?",
  };
  const textContent = {
    aboutUs: `I am Ann Rachana majoring in computer science at Royal University
      of Phnom Penh. I have a strong interest in computer science and
      Web Development.`,
    quickLinks: [
      { text: "home", link: "#" },
      { text: "about", link: "#" },
      { text: "services", link: "#" },
      { text: "Skills", link: "#" },
      { text: "contact", link: "#" },
    ],
    services: [
      "web design",
      "web development",
      "App Development",
      "graphics design",
    ],
    address: "Teuk Laak 2, Toul Kork, Phnom Penh, Cambodia",
    phoneNumber: "+855 96 531 3093",
    emailAddress: "ann.rachanaa@gmail.com",
    footerText: "Copyright © 2023 - AnnRachana Website. All Rights Reserved.",
  };

  return (
    <section id="footer">
      <footer className="footer containerf">
        <div className="rowf">
          <div className="colf">
            <h3 className="footer-title">{titles.aboutUs}</h3>
            <p className="textf">{textContent.aboutUs}</p>
            <div className="social-linksf">
              <a href="https://t.me/AnnRachNa">
                <i className="fab fa-telegram"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=100026367046442">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/ann.rachanaa/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="colf">
            <h3 className="footer-title">{titles.quickLinks}</h3>
            <div className="footer-linksf">
              {textContent.quickLinks.map((link, index) => (
                <a key={index} href={link.link} className="textf">
                  <i className="fa-solid fa-angle-right"></i>
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          <div className="colf">
            <h3 className="footer-title">{titles.services}</h3>
            <div className="footer-linksf">
              {textContent.services.map((service, index) => (
                <a key={index} href="#" className="textf">
                  <i className="fa-solid fa-angle-right"></i>
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div className="colf">
            <h3 className="footer-title">{titles.haveQuestion}</h3>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="textf">{textContent.address}</span>
            </div>

            <div>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              <span className="textf">{textContent.phoneNumber}</span>
            </div>

            <div>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <span className="textf">{textContent.emailAddress}</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-text">
        <p className="textf">{textContent.footerText}</p>
      </div>
    </section>
  );
};

export default Footer;
