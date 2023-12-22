import React, { useEffect } from "react";
import mixitup from "mixitup";
import imgblog1 from "../images/bgkohkongblue.png";
import "./Blog.css"; // Make sure to import your CSS file

const Blog = () => {
  useEffect(() => {
    const mixer = mixitup(".portfolio-gallery", {
      selectors: {
        target: ".portfolio-box",
      },
      animation: {
        duration: 500,
      },
    });
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading">My Services</h2>
        <span>What I will do for you</span>
      </div>
      <div className="fillter-buttons">
        <button className="button mixitup-control-active" data-filter="all">
          All Work
        </button>
        <button className="button" data-filter=".web">
          Logo Design
        </button>
        <button className="button" data-filter=".uiux">
          Web Design
        </button>
        <button className="button" data-filter=".branding">
          Web Development
        </button>
      </div>

      <div className="portfolio-gallery">
        <div className="portfolio-box mix uiux">
          <div className="portfolio-content">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, soluta.
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
            <img src={imgblog1} alt="portfolioimg" />
          </div>
        </div>

        <div className="portfolio-box mix web">
          <div className="portfolio-content">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, soluta.
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
            <img src="img/portfolio/1.jpg" alt="" />
          </div>
        </div>
        <div className="portfolio-box mix branding">
          <div className="portfolio-content">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, soluta.
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
            <img src="img/portfolio/1.jpg" alt="" />
          </div>
        </div>

        {/* Repeat this structure for other portfolio items */}
      </div>
    </section>
  );
};

export default Blog;
