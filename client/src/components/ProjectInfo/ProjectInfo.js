import React from "react";
import Screenshot from '../Screenshot/Screenshot'

function ProjectInfo(props){
    
    return(
    <div>
        <h1>{props.title}</h1>

        <h3>Description:</h3>
        <p>
            {props.description}
        </p>
        <div className="screenshot-container">
            <h3>Screenshots:</h3>
            {props.screenshots.map(screenshot => <Screenshot imageSrc={screenshot} alt={props.title}></Screenshot>)}
          
        </div>
        <h3>Deployed Application</h3>
        <a href={props.deployedURL} target='_blank' >Link</a>
        <h3>Github</h3>
        <a href={props.githubURL} target='_blank'>Link</a>
    </div>


    )
}

export default ProjectInfo 