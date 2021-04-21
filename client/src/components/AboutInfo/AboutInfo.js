import { Avatar } from '@material-ui/core';
import React from 'react';

function AboutInfo() {
    return (
        <div>
        
        <p style={{marginBottom: "0px"}}>
        Junior Web-Developer with a passion for creating interactive web environments. 
        Confident in front end and back-end development with experience in the design, installation, testing and maintenance of web-applications. 
        Proficient in the following technologies:
        </p>
         <ul className="skills" style={{padding:'0px'}}> 
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>node.js</li>
            <li>express.js</li>
            <li>MySQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
            <li>React</li>
        </ul> 
        <p style={{marginBottom: "0px"}}>
                    Also have prior experience in C, Java and Python. Ability to acquire new skills fast and enjoy challenging myself.
                    Able to self-manage smaller projects or collaborate in a team environment.  
                </p>
        
    </div>

        )

}

export default AboutInfo