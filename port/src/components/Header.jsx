import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isSidebarOpen]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">Sayan's Portfolio</div>
          <div className="nav-main-links">
            <a href="#hero">Home</a>
            <a href="#contact">Contact</a>
            <button className="menu-button" onClick={toggleSidebar}>
              ☰ Menu
            </button>
          </div>
        </nav>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <ul>
          <li><a href="#skills" onClick={toggleSidebar}>Skills</a></li>
          <li><a href="#education" onClick={toggleSidebar}>Education</a></li>
          <li><a href="#projects" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="#achievements" onClick={toggleSidebar}>Achievements</a></li>
          <li><a href="#internships" onClick={toggleSidebar}>Internships</a></li>
          <li><a href="#subjects" onClick={toggleSidebar}>Subjects</a></li>
          <li><a href="#certifications" onClick={toggleSidebar}>Certifications</a></li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
