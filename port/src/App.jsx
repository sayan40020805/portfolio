import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Internships from "./components/Internships";
import Subjects from "./components/Subjects";
import Contact from "./components/Contact";
import { useScrollFadeIn } from "./hooks/useScrollFadeIn";
import "./styles/App.css";

const App = () => {
  useScrollFadeIn(); // Scroll animation hook

  return (
    <div>
      <Header />

      <div className="fade-in-section">
        <HeroSection />
      </div>

      <div className="fade-in-section">
        <Skills />
      </div>

      <div className="fade-in-section">
        <Education />
      </div>

      <div className="fade-in-section">
        <Projects />
      </div>

      <div className="fade-in-section">
        <Certifications />
      </div>

      <div className="fade-in-section">
        <Achievements />
      </div>

      <div className="fade-in-section">
        <Internships />
      </div>

      <div className="fade-in-section">
        <Subjects />
      </div>

      <div className="fade-in-section">
        <Contact />
      </div>
    </div>
  );
};

export default App;
