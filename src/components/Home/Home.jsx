import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

import SlideOne from "../images/bgkohkongblue.png";
import SlideTwo from "../images/bgwhiteme.png";
import SlideThree from "../images/bgblackme.png";
import SlideSvg from "../svgimg/undraw_firmware_re_fgdy.svg";
import SlideSvg1 from "../svgimg/undraw_javascript_frameworks_-8-qpc.svg";
import HomeLogo from "../images/logowhite.png";
import HomeLogo1 from "../images/logodarkblue.png";

import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiRightArrow } from "react-icons/bi";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };
  const backgroundStyleOne = {
    backgroundImage: `url(${SlideOne})`,
    backgroundSize: "cover",
  };
  const backgroundStyleTwo = {
    backgroundImage: `url(${SlideTwo})`,
    backgroundSize: "cover",
  };
  const backgroundStyleThree = {
    backgroundImage: `url(${SlideThree})`,
    backgroundSize: "cover",
  };

  return (
    <div className="home" id="home">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide style={backgroundStyleOne}>
          <div className="slide-content">
            <div className="box1" style={{ color: "#fff",filter: "drop-shadow(5px 5px  5px #0381cb91)" }}>
              <h5>HAY! THERE </h5>
              <h1>ANN RACHANA</h1>
              {/* <div className="loaderh"></div> */}
              <p>
                I am Frontend Web Developer. Mayoring Computer Science <br />
                Try Hard and Hard Working What I do. <br />
                Its My Website Portfolio...
              </p>
              <a href="#about" alt="#about">
                <button
                  className="buttonh"
                  style={{
                    border: "2px solid #ffffff6e",
                    background: "#ffffff2c",
                  }}
                >
                  View More
                  <BiRightArrow />
                </button>
              </a>

              <div className="social-linksh">
                <a href="https://www.facebook.com/profile.php?id=100026367046442">
                  <div
                    id="twittera"
                    className="social-btnh flex-centerh "
                    style={{ background: "#ffffff8d" }}
                  >
                    <ImFacebook style={{ color: "#000" }} />
                    <span style={{ color: "#000" }}>facebook</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/ann.rachanaa/">
                  <div
                    id="linkedinh"
                    className="social-btnh flex-centerh "
                    style={{ background: "#ffffff8d" }}
                  >
                    <BsInstagram style={{ color: "#000" }} />
                    <span style={{ color: "#000" }}>instargam</span>
                  </div>
                </a>

                <a href="https://github.com/AnnRachana">
                  <div
                    id="githubh"
                    className="social-btnh flex-centerh "
                    style={{ background: "#ffffff8d" }}
                  >
                    <BsGithub style={{ color: "#000" }} />
                    <span style={{ color: "#000" }}>github</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="box2">
              <img
                src={HomeLogo}
                alt=""
                style={{
                  filter: "drop-shadow(5px 5px  5px #0381cb91)",
                  opacity: "0.8",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={backgroundStyleTwo}>
          <div className="slide-content">
            <div className="box1">
              <h5>HAY! THERE</h5>
              <h1>ANN RACHANA</h1>
              {/* <div className="loaderh"></div> */}
              <p>
                I am Frontend Web Developer. Mayoring Computer Science <br />
                Try Hard and Hard Working What I do. <br />
                Its My Website Portfolio...
              </p>
              <a href="#about" alt="#about">
                <button className="buttonh">
                  View More
                  <BiRightArrow />
                </button>
              </a>

              <div className="social-linksh">
                <a href="https://www.facebook.com/profile.php?id=100026367046442">
                  <div id="twittera" className="social-btnh flex-centerh ">
                    <ImFacebook />
                    <span>facebook</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/ann.rachanaa/">
                  <div id="linkedinh" className="social-btnh flex-centerh ">
                    <BsInstagram />
                    <span>instargam</span>
                  </div>
                </a>

                <a href="https://github.com/AnnRachana">
                  <div id="githubh" className="social-btnh flex-centerh ">
                    <BsGithub />
                    <span>github</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="box2">
              <img
                src={HomeLogo1}
                alt=""
                style={{ filter: "drop-shadow(5px 5px  5px #0000003f)" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={backgroundStyleThree}>
          <div className="slide-content">
            <div className="box1 " id="box1">
              <h5>HAY! THERE</h5>
              <h1>ANN RACHANA</h1>
              {/* <div className="loaderh"></div> */}
              <p>
                I am Frontend Web Developer. Mayoring Computer Science <br />
                Try Hard and Hard Working What I do. <br />
                Its My Website Portfolio...
              </p>
              <a href="#about" alt="#about">
                <button className="buttonh" id="btt5">
                  View More
                  <BiRightArrow />
                </button>
              </a>

              <div className="social-linksh">
                <a href="https://www.facebook.com/profile.php?id=100026367046442">
                  <div id="twittera " className="social-btn5 flex-centerh ">
                    <ImFacebook />
                    <span>facebook</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/ann.rachanaa/">
                  <div id="linkedinh" className="social-btn5 flex-centerh ">
                    <BsInstagram />
                    <span>instargam</span>
                  </div>
                </a>

                <a href="https://github.com/AnnRachana">
                  <div id="githubh" className="social-btn5 flex-centerh ">
                    <BsGithub />
                    <span>github</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="box2" style={{ opacity: "0.5" }}>
              <img src={HomeLogo} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Home;
