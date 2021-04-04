import React from "react";
import Download from '@axetroy/react-download';
import {link} from 'react-router-dom';
// import download from '../../assets/images/downloadbutton.jfif';
// import resume from '../../assets/images/Vlorian Dervishi CV (2).pdf';
function Resume(props) {
    
  return (
       
   
    <div style={{ textAlign: "center" }}>
        
      <ul style={{ listStyleType: "none" }}>
        
        <li style={{ textAlign: "center" }}>
          
        </li>
        <li><a style={{ textAlign: "center" }}href="./Resume.pdf" download><h1>Resume</h1></a></li>
        <h2>Front-End</h2>
        <li><h4>HTML</h4></li>
        <li><h4>CSS</h4></li>
        <li><h4>Javascript</h4></li>
        <li><h4>ReactJS</h4></li>
        <li><h4>Boostrap</h4></li>
        <li><h4>JQUERY</h4></li>
        <br></br>
        <li style={{ textAlign: "center" }}>
          <h2>Back-End</h2>
        </li>
        <li><h4>WEB API's</h4></li>
        <li><h4>MongoDB</h4></li>
        <li><h4>Sequelize</h4></li>
        <li><h4>MVC</h4></li>
        <li><h4>CRM</h4></li>
        <li><h4>MySQL</h4></li>
        <li><h4>NoSQL</h4></li>
        <li><h4>ExpressJS</h4></li>
        <li><h4>Apollo-Server</h4></li>
        <li><h4>Graph-QL</h4></li>
      </ul>
    </div>
  );
  
}
export default Resume;
