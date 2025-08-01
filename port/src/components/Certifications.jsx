// src/components/Certifications.jsx
import React from "react";
import "../styles/Certifications.css";

const certifications = [
    {
        title: "Java",
        date: "November 2025",
        link: "https://www.linkedin.com/in/your-link", // Replace with actual
    },
    {
        title: "Node Js",
        date: "2024",
        link: "https://www.linkedin.com/in/your-link", // Replace with actual
    },
    {
        title: "HTML,CSS &JavaScript",
        date: "2024",
        link: "https://www.credential.net/your-link", // Replace with actual
    },

    {
        title: "Python",
        date: "2024",
        link: "https://www.credential.net/your-link", // Replace with actual
    },

    {
        title: "SQL",
        date: "2024",
        link: "https://www.credential.net/your-link", // Replace with actual
    },

    {
        title: "C Programming",
        date: "2024",
        link: "https://www.credential.net/your-link", // Replace with actual
    },
    // Add more certifications here
];

function Certifications() {
    return (
        <section id="certifications" className="certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certification-list">
                {certifications.map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-date">{cert.date}</p>
                        <a
                            href={cert.link}
                            className="cert-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
