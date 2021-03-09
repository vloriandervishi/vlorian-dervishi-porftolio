import React from "react";
import Victor from "../../assets/images/VictorsDealerShipScreenShot.jpg";
import Beaten from "../../assets/images/screenshot-1.jpg";
import Icon from "@iconify/react";
function Portfolio() {
  return (
    
      <div className="grid-container">
        <a
          href="https://vloriandervishi.github.io/Front-End-Project-Off-The-Beaten-Path/"
          className="grid-item" style={{backgroundImage:`url(${Beaten})`}}
        >
          <div>
            <h3>Off the beaten track</h3>
            
          </div>
        </a>
        <a href="https://victorsdealership.herokuapp.com/" className="grid-item" style={{backgroundImage:`url(${Victor})`}}>
          <div>
            <h3>Victors DealerShip</h3>
          </div>
        </a>
      </div>
    
  );
}

export default Portfolio;
