import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-card animate-slide">
          <h3>Supreme Knowledge Foundation Group Of Institutions</h3>
          <p>
            <strong>Course:</strong> B.Tech in Computer Science
          </p>
          <p>
            <strong>SGPA:</strong> 7.54 (up to 5th semester)
          </p>
          <p>
            <strong>Year:</strong> 2022 - Present
          </p>
        </div>

        <div className="education-card animate-slide">
          <h3>12th Standard</h3>
          <p>
            <strong>School:</strong> Anandanagar High School (H.S.)
          </p>
          <p>
            <strong>Percentage:</strong> 77%
          </p>
          <p>
            <strong>Year:</strong> 2020 - 2022
          </p>
        </div>

        <div className="education-card animate-slide">
          <h3>10th Standard</h3>
          <p>
            <strong>School:</strong> Anandanagar High School (H.S.)
          </p>
          <p>
            <strong>Percentage:</strong> 60%
          </p>
          <p>
            <strong>Year:</strong> 2019 - 2020
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
