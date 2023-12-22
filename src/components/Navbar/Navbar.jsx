import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./NavScroll.css";
import Logowhite from "../images/logowhite.png";
import Logoblack from "../images/logodarkblue.png";
import { IoIosArrowBack } from "react-icons/io";
import { BsChatLeftDots } from "react-icons/bs";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(Logowhite);

  const toggleNav = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("open");
  };

  const closeNav = () => {
    setIsActive(false);
    document.body.classList.remove("open");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        setLogoSrc(isScrolled ? Logoblack : Logowhite);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <div className={scrolled ? "overlay scrolled" : "overlay"}></div>
      <header className={scrolled ? "scrolled" : ""}>
        <a href="#" className="logo">
          <img src={logoSrc} alt="Logo" />
          <span>Ann</span>Rachana
        </a>

        <div className="right-header">
          <ul
            className={`navlistn ${isActive ? "active" : ""}`}
            onClick={closeNav}
          >
            <li>
              <IoIosArrowBack className="icon-list" />
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <IoIosArrowBack className="icon-list" />
              <a href="#about">About</a>
            </li>
            <li>
              <IoIosArrowBack className="icon-list" />
              <a href="#services">Services</a>
            </li>
            <li>
              <IoIosArrowBack className="icon-list" />
              <a href="#skills">Skills</a>
            </li>
            
            <li>
              <IoIosArrowBack className="icon-list" />
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <a href="#" className="btn" >
            Menu
          </a> */}
          <div
            className={`menu-icon ${isActive ? "active" : ""}`}
            onClick={toggleNav}
          >
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
