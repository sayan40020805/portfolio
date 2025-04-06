import React from "react";
import "../styles/Skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: <SiHtml5 color="#E44D26" /> },
    { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React.js", icon: <SiReact color="#61DBFB" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "C", icon: <SiC color="#A8B9CC" /> },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Creativity",
    "Time Management",
    "Leadership",
  ];

  const loopingSkills = [...technicalSkills, ...technicalSkills];

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="scroll-wrapper">
        <div className="skills-row animate-scroll">
          {loopingSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="soft-skills-section">
        <h2>Soft Skills</h2>
        <ul className="soft-skills-list">
          {softSkills.map((skill, index) => (
            <li key={index} className="soft-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
