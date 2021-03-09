import React from "react";
import Download from '@axetroy/react-download';
import {link} from 'react-router-dom';
// import download from '../../assets/images/downloadbutton.jfif';
// import resume from '../../assets/images/Vlorian Dervishi CV (2).pdf';
function Resume(props) {
    
  return (
       
   
    <div style={{ textAlign: "center" }}>
        <a href="./Resume.pdf" download>Resume</a>
      <ul style={{ listStyleType: "none" }}>
        
        <li style={{ textAlign: "center" }}>
          <h2>Front-End</h2>
        </li>

        <li>CSS</li>
        <li>Javascript</li>
        <li>ReactJS</li>
        <li>Boostrap</li>
        <li>JQUERY</li>
        <br></br>
        <li style={{ textAlign: "center" }}>
          <h2>Back-End</h2>
        </li>
        <li>WEB API's</li>
        <li>MongoDB</li>
        <li>Sequelize</li>
        <li>MVC</li>
        <li>CRM</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>ExpressJS</li>
        <li>REST API</li>
      </ul>
    </div>
  );
  
}
export default Resume;
