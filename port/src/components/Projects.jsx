import React from "react";
import "../styles/Projects.css";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const Projects = () => {
    useScrollFadeIn();

    const projectList = [
        {
            title: "Guessing Game",
            description: "A fun number guessing game built using HTML, CSS, and JavaScript. Try to guess the right number!",
            link: " https://sayan40020805.github.io/Guess_game/",
        },
        {
            title: "Temperature Converter",
            description: "Convert between Celsius, Fahrenheit, and Kelvin using this interactive converter tool.",
            link: "https://sayan40020805.github.io/Temperature_converter/",
        },
        {
            title: "Music App Clone",
            description: "A clone of a music player app UI with basic play/pause functionality. Responsive and clean design.",
            link: " https://sayan40020805.github.io/Spotify_Clone/",
        },
        {
            title: "Lost Pet Rescue WebApp",
            description: "A MERN stack app to report and locate lost or injured animals. Integrated features for volunteers and officers.",
            link: "http://lost-web-evpd.vercel.app",
        },
    ];

    return (
        <section className="projects-section fade-in-section" id="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
