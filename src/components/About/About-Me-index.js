import React from 'react';
import picture from '../../assets/images/IMG_0006.png';
function About(){
    return (
        <section>
            <h2 className="page-section"id="about"  ></h2>
            <div align="middle"> <img class="dbt" src={picture}></img>
                <p id="abtmep"> A Web developer with background in mechnical/electrical engineer. 
                    Graduated with bachelors in Information Technology from Middle Tennesee State University and Associate of Science Degree in Computer Science.
                     Obtained my Web Developement Certificaton from Vanderbilt Coding Bootcamp. I am proficient in HTML, CSS,JAVASCRIPT,MERN-STACK. </p>
            </div>
        </section>
    );
}

export default About;