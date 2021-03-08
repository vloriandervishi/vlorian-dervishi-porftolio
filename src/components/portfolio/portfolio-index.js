import React from "react";
import Victor from "../../assets/images/VictorsDealerShipScreenShot.jpg";
import Beaten from "../../assets/images/screenshot-1.jpg";
function Portfolio() {
  return (
    <section className="page-section">
      <h2>Front-End-Project</h2>
      <div className="grid-container">
        <a
          href="https://vloriandervishi.github.io/Front-End-Project-Off-The-Beaten-Path/"
          className="grid-item"
        >
          <div>
            <h3>Off the beaten track</h3>
            <img src={Beaten}></img>
          </div>
        </a>
      </div>
      
      
    </section>
  );
}

export default Portfolio;
