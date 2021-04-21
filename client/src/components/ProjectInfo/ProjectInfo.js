import React from "react";
import Screenshot from '../Screenshot/Screenshot'

function ProjectInfo(props){
    console.log("letss goooo", props)
    return(
    <div>
        <h4>{props.title}</h4>
        
            <p>Description:
                {props.description}
            </p>
        <div className="screenshot-container">
            Screenshots: 
            {props.screenshots.map(screenshot => <Screenshot imageSrc={screenshot} alt={props.title}></Screenshot>)}
          
        </div>
        <div>Deployed Application</div>
        <a href={props.deployedURL} target='_blank' >Link</a>
        <div>Github</div>
        <a href={props.githubURL} target='_blank'>Link</a>
    </div>


    )
}

export default ProjectInfo 