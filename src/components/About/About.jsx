import React, { useEffect } from "react";
import "./About.css";

import CVpdf from "../images/AnnRachanaCV.pdf";
import Logoblacka from "../images/logowhite.png";

import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";
import aboutMeImg from "../images/cardme1.jpg";
import circleImg from "../images/sginbla.png";

const About = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = CVpdf;
    downloadLink.download = "AnnRachanaCV.pdf";
    downloadLink.target = "_blank";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".about-btn button");
    const contents = document.querySelectorAll(".content");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        contents.forEach((content) => (content.style.display = "none"));
        contents[index].style.display = "block";
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });

    return () => {
      buttons.forEach((button, index) => {
        button.removeEventListener("click", () => {
          contents.forEach((content) => (content.style.display = "none"));
          contents[index].style.display = "block";
          buttons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");
        });
      });
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutMeImg} alt="" className="aboutHero" />
        <div className="social-linksa">
          <a href="https://www.facebook.com/profile.php?id=100026367046442">
            <div id="twittera" className="social-btna flex-centera">
              <ImFacebook />
              <span>facebook</span>
            </div>
          </a>

          <a href="https://www.instagram.com/ann.rachanaa/">
            <div id="linkedina" className="social-btna flex-centera">
              <BsInstagram />
              <span>instargam</span>
            </div>
          </a>

          <a href="https://github.com/AnnRachana">
            <div id="githuba" className="social-btna flex-centera">
              <BsGithub />
              <span>github</span>
            </div>
          </a>
        </div>
        <div className="showcase-ring">
          <img src={Logoblacka} className="ring" />
          <img src={circleImg} className="circle" />
        </div>
      </div>

      <div className="about-content">
        <h1 className="heading">MORE INFORMATION</h1>
        <h3>ABOUT ME</h3>
        <div className="loadera"></div>
        <p>
          I am Ann Rachana majoring in computer science at Royal University of
          Phnom Penh. I have a strong interest in computer science and Web
          Devolopment. I have an adaptive ability to learn new things, have a
          creative mind, and be good at problem solving.
        </p>

        <div className="about-btn">
          <button className="active">Education</button>
          <button>Intro</button>
          <button>Hire me on</button>
        </div>
        <div className="content-btn">
          <div className="content">
            <div className="text-box">
              <p>Undergraduate {"(Major in C.S)"} 2021 - Present</p>
              <span>Royal University of Phnom Penh {"(RUPP) "}</span>
            </div>
            <div className="text-box">
              <p>Study Courses Feb-September 2021</p>
              <span>
                ETEC Center {"(C/C++ OOP) "}& HTML CSS Boostrap Javascript
                JQuery
              </span>
            </div>
            <div className="text-box">
              <p>High Education 2016 - 2021 </p>
              <span>
                Techo Sen General Knowledge and Technical High School Koh Kong
                {"(Bacll Grade C)"}
              </span>
            </div>
          </div>
          <div className="content">
            <div className="text-box">
              <p>place of Birth</p>
              <span>Koh Kong Province , Cambodia</span>
            </div>
            <div className="text-box">
              <p>Address</p>
              <span>Teuk Laak 2, Toul Kork, Phnom Penh, Cambodia</span>
            </div>
            <div className="text-box">
              <p>Date of Birth</p>
              <span>23 Dec 2003</span>
            </div>
          </div>
          <div className="content">
            <div className="text-box">
              <p>Phone Number </p>
              <span>+855 96 531 3093</span>
            </div>
            <div className="text-box">
              <p>Email Address</p>
              <span>ann.rachanaa@gmail.com</span>
            </div>
            <div className="text-box">
              <p>Thank for join together</p>
              <span>
                This is My Portfolio Website and Some Information about me .
              </span>
            </div>
          </div>
        </div>
        <a href="#about" alt="#about" style={{ display: "flex" }}>
          <a href="/AnnRachanaCV.pdf">
            <button className="buttona" onClick={handleDownload}>
              Download CV
              <FaFilePdf />
            </button>
          </a>
          <a href="https://t.me/AnnRachNa">
            <button className="buttona" id="buttona">
              Hire Me
              <BiRightArrow />
            </button>
          </a>
        </a>
      </div>
    </section>
  );
};

export default About;
