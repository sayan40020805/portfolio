import React from "react";
import "../styles/Internships.css";

const Internships = () => {
  return (
    <section id="internships" className="internships-section">
      <h2>Internships</h2>
      <div className="internship-container">
        <div className="internship-card">
          <h3>AI Intern – Edunet Foundation</h3>
          <p>
            <strong>Duration:</strong> Jan 2024 – Mar 2024
          </p>
          <p>
            Worked on real-world AI projects in collaboration with Microsoft and
            SAP. Gained hands-on experience in building intelligent
            applications.
          </p>
          <a
            href="https://www.linkedin.com/posts/sayan-majhi-04660228a_ai-edunetfoundation-aicte-activity-7286002967655104512-WU9V?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEY2dbYBPHn9YdZ-x8YJlnAGu1Ey9fcA0RY&utm_campaign=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>

        {/* Add more internships as needed */}
        {/* <div className="internship-card">...</div> */}
      </div>
    </section>
  );
};

export default Internships;
