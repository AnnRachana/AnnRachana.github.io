import React from "react";
import "./Resume.css";

const Resume = () => {
  const sectionTitles = {
    resume: "Resume",
    educationVolunteer: "Education & Volunteer",
    education: "EDUCATION",
    volunteerCourses: "VOLUNTEER & COURSES",
  };

  const textContent = {
    aboutMe: `I have an adaptive ability to learn new things, have a creative
      mind, and be good at problem-solving.`,
    educationContent: [
      {
        period: "2021 - Present",
        institution: "Royal University of Phnom Penh (RUPP)",
        details:
          "I am Rachana majoring in computer science at Royal University of Phnom Penh.",
        location: "Royal University of Phnom Penh",
      },
      {
        period: "2016 - 2021",
        institution: "High School Degree",
        details:
          "Techo Sen General Knowledge and Technical High School Koh Kong (Bacll Overall Grade C)",
        location: "Koh Kong High School",
      },
      {
        period: "2016 - 2021",
        institution: "Primary Education",
        details:
          "Finished Monyroth Center Khemarak Samki School, Khemarak Samki School",
        location: "Primary Education",
      },
    ],
    volunteerCoursesContent: [
      {
        period: "May-September 2022",
        organization: "ETEC Center",
        details:
          "ETEC Center (C/C++ OOP) ETEC Center (HTML CSS Boostrap Javascript JQuery)",
        location: "ETEC Center",
      },
      {
        period: "2016 - 2021",
        organization: "National PolyTechnic Institute of Cambodia (NPIC)",
        details:
          "I got a certificate in study courses for Microsoft Office: Word, Excel, PowerPoint",
        location: "NPIC",
      },
      {
        period: "2018 - 2019",
        organization: "Cambodian Red Cross",
        details:
          "I was working as a volunteer by joining the Cambodian Red Cross when I was in high school and doing some activities.",
        location: "Cambodian Red Cross",
      },
    ],
  };

  return (
    <section>
      <div className="resume reusable" id="resume">
        <div className="headingsr">
          <h3>{sectionTitles.resume}</h3>
          <div className="loaderr"></div>
          <h1>{sectionTitles.educationVolunteer}</h1>
          <p>{textContent.aboutMe}</p>
        </div>
        <div className="resume-row">
          <div className="columnr column-left">
            <div className="sub-heading">
              <h2>{sectionTitles.education}</h2>
            </div>
            <main className="resume-contents">
              {textContent.educationContent.map((item, index) => (
                <div className="boxr" key={index}>
                  <h4>{item.period}</h4>
                  <h3>{item.institution}</h3>
                  <p>{item.details}</p>
                  <h5 className="vanue">{item.location}</h5>
                </div>
              ))}
            </main>
          </div>
          <div className="columnr column-right">
            <div className="sub-heading">
              <h2>{sectionTitles.volunteerCourses}</h2>
            </div>
            <main className="resume-contents">
              {textContent.volunteerCoursesContent.map((item, index) => (
                <div className="boxr" key={index}>
                  <h4>{item.period}</h4>
                  <h3>{item.organization}</h3>
                  <p>{item.details}</p>
                  <h5 className="vanue">{item.location}</h5>
                </div>
              ))}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
