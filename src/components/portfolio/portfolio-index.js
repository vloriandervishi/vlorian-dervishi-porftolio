import React from "react";
import Victor from "../../assets/images/VictorsDealerShipScreenShot.jpg";
import Beaten from "../../assets/images/screenshot-1.jpg";
import Icon from "@iconify/react";
import codeQ from "../../assets/images/code-quiz.gif";
import noteTaker from "../../assets/images/noteTaker.png";
import offline from "../../assets/images/offlineWeb.jfif";
import studio from "../../assets/images/Studio - Google Chrome 3_8_2021 10_37_38 PM.png";
import oop from "../../assets/images/team-00p.gif";
import art from "../../assets/images/screenshot.art.painting.search.png";
function Portfolio() {
  return (
    <div className="grid-container">
      <a
        href="https://vloriandervishi.github.io/Front-End-Project-Off-The-Beaten-Path/"
        className="grid-item"
        style={{ backgroundImage: `url(${Beaten})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/vloriandervishi/Front-End-Project-Off-The-Beaten-Path.git">
              Off The Beaten Track
            </a>
          </h3>
        </div>
      </a>
      <a
        href="https://victorsdealership.herokuapp.com/"
        className="grid-item"
        style={{ backgroundImage: `url(${Victor})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/clintonstrange/simad.git">
              Victors DealerShip
            </a>
          </h3>
        </div>
      </a>
      <a
        href="https://vloriandervishi.github.io/web-api-code-quiz/."
        className="grid-item"
        style={{ backgroundImage: `url(${codeQ})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/vloriandervishi/web-api-code-quiz.git">
              Code Quiz
            </a>
          </h3>
        </div>
      </a>
      <a
        href="https://online-notepad-express.herokuapp.com/"
        className="grid-item"
        style={{ backgroundImage: `url(${noteTaker})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/vloriandervishi/not-taker-online.git">
              Note Taker
            </a>
          </h3>
        </div>
      </a>
      <a
        href="https://offlinewebapp.herokuapp.com/"
        className="grid-item"
        style={{ backgroundImage: `url(${offline})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/vloriandervishi/offlineWebAp.git">
              Offline Wep Application
            </a>
          </h3>
        </div>
      </a>
      <a
        href="https://drive.google.com/file/d/1QazIcyTIb2cJcGkuJBJyV2IUV0dNs7fm/preview"
        className="grid-item"
        style={{ backgroundImage: `url(${oop})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/vloriandervishi/oop-team-profile-generator.git">
              Team Profile
            </a>
          </h3>
        </div>
      </a>
      <a
        href="https://bootcampspot.instructuremedia.com/embed/e7a5b856-7d3a-4348-89ce-c01986b81c90"
        className="grid-item"
        style={{ backgroundImage: `url(${studio})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/vloriandervishi/commerce-backend-.git">
              Commerce BackEnd
            </a>
          </h3>
        </div>
      </a>
      <a
        href="https://young-lake-28602.herokuapp.com/"
        className="grid-item"
        style={{ backgroundImage: `url(${art})` }}
      >
        <div>
          <h3>
            <a href="https://github.com/vloriandervishi/artist-store.git">
              Art Painting Search Engine
            </a>
          </h3>
        </div>
      </a>
    </div>
    
  );
}

export default Portfolio;
