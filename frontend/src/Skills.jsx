import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++ (OOPS)", icon:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-plus-plus-programming-language-icon.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Canva", icon: "https://static.cdnlogo.com/logos/c/7/canva.svg" },
  { name: "MS-Office", icon: "https://static.cdnlogo.com/logos/m/80/microsoft-office.svg" },
  { name: "CapCut", icon: "https://www.pngmart.com/files/23/Capcut-Logo-PNG-Photos.png" },

];

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section container my-5"
      style={{ scrollMarginTop: "100px" }} // prevent navbar overlap
    >
      <h2 className="text-center mb-4 section-title">💻 My Skills</h2>

      {/* Responsive Grid */}
      <div className="row g-4 justify-content-center">
        {skillsData.map((skill, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="skill-card text-center shadow-sm p-3 rounded">
              <img src={skill.icon} alt={skill.name} className="skill-icon mb-2" />
              <p className="skill-name fw-semibold">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
