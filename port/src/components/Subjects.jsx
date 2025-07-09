import React from "react";
import "../styles/Subjects.css";

const Subjects = () => {
  const subjects = [
    { name: "Operating Systems", strong: true },
    { name: "Data Structures and Algorithms", strong: true },
    { name: "Object-Oriented Programming System (OOPs)", strong: true },
  ];

  return (
    <section id="subjects" className="subjects-section">
      <h2>Subjects</h2>
      <div className="subjects-container">
        {subjects.map((subject, index) => (
          <div
            className={`subject-card ${subject.strong ? "strong-subject" : ""}`}
            key={index}
          >
            {subject.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subjects;
