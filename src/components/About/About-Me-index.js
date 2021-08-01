import React from 'react';
import picture from '../../assets/images/IMG_0006.jpg';
function About(){
    return (
        <section>
            <h2 className="page-section"id="about" >About Me</h2>
            <div> <img src={picture}></img>
                <p>Once a prosperouse life, I had in Kosovo now destroyed due to the war. Never thinking that I would be lucky enough to live in the United States;with a dream to become a software engineer.To pursue that dream, I graduated from Middle Tennessee State University with a bachelors degree information technology. Also
                obtained associate of science degree from nashville state community college with the concentration in computer science and Full-Stack-Developer certification from vanderbilt university boot camp. A Web Developer with background in trades-craft and customer service.  </p>
            </div>
        </section>
    );
}

export default About;