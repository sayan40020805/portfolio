// src/components/Certifications.jsx
import React from "react";
import "../styles/Certifications.css";
import javaCert from "../assets/certificates/java_page-0001.jpg";
import TimeCert from "../assets/certificates/Time_MAnagement_page-0001.jpg";
import htmlcssjsCert from "../assets/certificates/html & css.jpg";
import pythonCert from "../assets/certificates/PYTHON.jpg";
import sqlCert from "../assets/certificates/sql_page-0001.jpg";
// import cCert from "../assets/certificates/c.jpg";
import reactCERT from "../assets/certificates/REACT.png";

const certifications = [
    {
        title: "Java",
        date: "2024",
        image: javaCert,
    },
    {
        title: "Time_Management",
        date: "2025",
        image: TimeCert,
    },
    {
        title: "HTML & CSS",
        date: "2023",
        image: htmlcssjsCert,
    },
    {
        title: "Python",
        date: "2023",
        image: pythonCert,
    },
    {
        title: "SQL",
        date: "2025",
        image: sqlCert,
    },
    // {
    //     title: "C Programming",
    //     date: "2024",
    //     //image: cCert,
    // },
    {
        title: "REACT JS",
        date: "2025",
        image: reactCERT,
    },
];

function Certifications() {
    return (
        <section id="certifications" className="certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certification-list">
                {certifications.map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <div className="cert-image-container">
                            <img
                                src={cert.image}
                                alt={`${cert.title} Certificate`}
                                className="cert-image"
                            />
                        </div>
                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-date">{cert.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
