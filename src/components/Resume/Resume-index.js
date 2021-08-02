import React from "react";
import Download from "@axetroy/react-download";
import { link } from "react-router-dom";
// import download from '../../assets/images/downloadbutton.jfif';
// import resume from '../../assets/images/Vlorian Dervishi CV (2).pdf';
import resumelogo from '../../assets/images/resume-logo.png';
import degree from "../../assets/images/bs-degree.png";
import cert from "../../assets/images/Vlorian Dervishi of  Vanderbilt University Coding Boot Camp Completion Certificate.png";
import asdgr from "../../assets/images/Associate of Science Degree.png";
function Resume(props) {
  return (
    <React.Fragment>
    <div class="degree-position">
      <img src={degree} width="400" height="200"></img>
      <img src={cert} width="400" height="200"></img>
      <img src={asdgr} width="400" height="200"></img>
    </div>
      
         <div class="resume"><a href="./Resume.pdf" download><img src={resumelogo}></img></a></div>
         
         </React.Fragment>
   
  );
}
export default Resume;
