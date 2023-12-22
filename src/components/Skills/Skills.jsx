
import React, { useEffect, useRef } from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoCode,
  IoLogoReact,
} from "react-icons/io5";
import { FaCode, FaBootstrap } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { LuBraces } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import "./Skills.css";

const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    if (skillRef.current) {
      const skills = skillRef.current.querySelectorAll(".skill-item");

      skills.forEach((skill) => {
        let attr = skill.getAttribute("data-value");
        let circleLength = 2 * Math.PI * 42;

        if (attr > 100) {
          attr = 100;
        }
        if (attr < 0) {
          attr = 1;
        }

        const value = circleLength - (attr * circleLength) / 100;
        skill.querySelector(".skill-path").style.strokeDashoffset = value;
      });
    }
  }, []);

  return (
    <section id="skills">
      <div className="container-s">
        <div className="main-title">
          <h1>My Skills</h1>
          <p>Continuously improving my skills and knowledge in the field.</p>
        </div>

        <div className="row">
          <div className="col">
            <div className="sub-title">
              <h2>Technical Skills</h2>
            </div>

            <div className="skills-container">
              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IoLogoHtml5 />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    HTML
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "80%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span>80%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IoLogoCss3 />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    CSS
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "85%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IoLogoJavascript />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    JavaScript
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "70%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LuBraces />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    C / C++
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "60%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span>60%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IoLogoReact />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    React JS
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "70%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaBootstrap />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    BOOTSTRAP
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "60%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span>60%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SiAdobeillustrator />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    Illustrator
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "50%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span
                  
                    >
                      50%
                    </span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div
                  className="subject"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaComputer />
                  <h6
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    Computer Maintenance
                  </h6>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-line"
                    style={{
                      maxWidth: "70%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="sub-title">
              <h2>Professional Skills</h2>
            </div>
            <div className="skills-container">
              <div ref={skillRef} className="box-cycle">
                <div className="box-c">
                  <div className="skill-item" id="npm" data-value="89">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#C7CCD6" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">89%</div>
                  </div>
                  <h5>CREATIVITY</h5>
                </div>
                <div className="box-c">
                  <div className="skill-item" id="npm" data-value="75">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#C7CCD6" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">75%</div>
                  </div>
                  <h5>TEAMWORK</h5>
                </div>
                <div className="box-c">
                  <div className="skill-item" id="npm" data-value="90">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#C7CCD6" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">70%</div>
                  </div>
                  <h5>COMMNUNICATION</h5>
                </div>
                <div className="box-c">
                  <div className="skill-item" id="npm" data-value="95">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#C7CCD6" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">95%</div>
                  </div>
                  <h5>RESILIENCE</h5>
                </div>
                <div className="box-c">
                  <div className="skill-item" id="npm" data-value="80">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#C7CCD6" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">80%</div>
                  </div>
                  <h5>MICROSOFT OFFICE</h5>
                </div>
                <div className="box-c">
                  <div className="skill-item" id="npm" data-value="90">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#C7CCD6" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">90%</div>
                  </div>
                  <h5>PROBLEM SOLVING</h5>
                </div>
              </div>
              {/* <ul ref={skillRef} className="skill-list">
                <div class="div1">
                  <li className="skill-item" id="npm" data-value="99">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#dfdcd5" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">npm</div>
                  </li>
                </div>
                <div class="div2">
                  <li className="skill-item" id="npm" data-value="99">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#dfdcd5" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">npm</div>
                  </li>
                </div>
                <div class="div3">
                  {" "}
                  <li className="skill-item" id="npm" data-value="99">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#dfdcd5" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">npm</div>
                  </li>
                </div>
                <div class="div4">
                  {" "}
                  <li className="skill-item" id="npm" data-value="99">
                    <svg viewBox="0 0 100 100" className="skill-svg">
                      <circle cx="50" cy="50" r="50" fill="#dfdcd5" />
                      <circle cx="50" cy="50" r="34" fill="#fff" />
                      <circle
                        className="skill-path"
                        fill="transparent"
                        stroke="#0F2145"
                        strokeWidth="16"
                        cx="50"
                        cy="50"
                        r="42"
                      />

                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#0F2145"
                        fontSize="18"
                      ></text>
                    </svg>
                    <div className="skill-name">npm</div>
                  </li>
                </div>
      
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
