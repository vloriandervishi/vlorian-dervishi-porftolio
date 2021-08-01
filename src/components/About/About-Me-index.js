import React from 'react';
import picture from '../../assets/images/IMG_0006.png';
function About(){
    return (
        <section>
            <h2 className="page-section"id="about"  ></h2>
            <div align="middle"> <img src={picture}></img>
                <p class="dbt"> A Web developer with background in IT and mechnical/electrical engineer. 
                    Graduated with bachelors in Information Technology from Middle Tennesee State University and Associate of Science Degree in Computer Science.
                     Obtained my Web Developement Certificaton from Vanderbilt Coding Bootcamp. I am proficient in HTML, CSS,JAVASCRIPT,MERN-STACK. A self-led learner who is never afraid
                     of taking the initiative a problem-solver and a ambitious to get things done. </p>
            </div>
        </section>
    );
}

export default About;