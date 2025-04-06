import React from "react";
import "../styles/Achievements.css";
import footballImg from "../assets/football.jpg";
import sportsImg from "../assets/sports.jpg";

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
      <br />
      <div className="achievements-container">
        <div className="achievement-card">
          <img src={footballImg} alt="Football Achievement" />
          <div className="achievement-text">
            <h3>Football</h3>
            <p>
              Secured <strong>2nd position</strong> in inter-college football
              tournament.
            </p>
          </div>
        </div>

        <div className="achievement-card">
          <img src={sportsImg} alt="Sports Achievement" />
          <div className="achievement-text">
            <h3>Sports Meet</h3>
            <p>
              Achieved <strong>1st position</strong> in various athletic sports
              events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
