import React from "react";
import Download from '@axetroy/react-download';
import {link} from 'react-router-dom';
// import download from '../../assets/images/downloadbutton.jfif';
// import resume from '../../assets/images/Vlorian Dervishi CV (2).pdf';

import degree from '../../assets/images/bs-degree.png';
import cert from '../../assets/images/Vlorian Dervishi of  Vanderbilt University Coding Boot Camp Completion Certificate.png';
import asdgr from '../../assets/images/Associate of Science Degree.png';
function Resume(props) {
    
  return (
       
   
  
//<div><a style={{ textAlign: "center" }}href="./Resume.pdf" download><h1>Resume</h1></a></div>
       <div>
          <img id="bs" src={degree} width="400" height="200"></img>
        <img id="cert" src={cert} width="400" height="200"></img>
          <img id="asd"  src={asdgr} width="400" height="200"
        ></img>
       
        </div>
   
  );
  
}
export default Resume;
