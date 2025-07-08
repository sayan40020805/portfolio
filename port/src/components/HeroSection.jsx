import React from "react";
import "../styles/HeroSection.css";
import myPhoto from "../assets/profile.jpg"; // Make sure your image exists

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Left Text Section */}
        <div className="hero-text">
          <h1>Hi, I'm Sayan 👋</h1>
          <p>
            I'm Sayan, a dedicated Frontend Web Developer focused on building
            responsive, accessible, and performance-optimized web applications.
            I enjoy turning ideas into clean, user-friendly interfaces using
            modern technologies like React.js.
          </p>

          <a href="#projects" className="cta-button">
            View My Work
          </a>
        </div>

        {/* Right Image Section */}
        <div className="hero-image">
          <img src={myPhoto} alt="Sayan" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
