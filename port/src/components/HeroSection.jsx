import React from "react";
import "../styles/HeroSection.css";
import myPhoto from "../assets/profile.jpg"; // Make sure to replace with your photo path

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Sayan 👋</h1>
          <p>
            I'm Sayan, a dedicated Frontend Web Developer focused on building
            responsive, accessible, and performance-optimized web applications.
            I enjoy turning ideas into clean, user-friendly interfaces using
            modern technologies like React.js.
          </p>
        </div>
        <div className="hero-image">
          <img src={myPhoto} alt="Sayan" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
