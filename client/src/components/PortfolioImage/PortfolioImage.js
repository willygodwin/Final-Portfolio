
import React from 'react';



function PortfolioImage(props) {

    return(
    <div className='project-div' style={{display:'flex', justifyContent:'center', width: props.width, height: props.height, position:'absolute', top: props.top, right: props.right}} >
        <a href={props.urlSrc}>
            <img  style={{width:"100%", height:'100%'}} src={props.imageSrc}></img>
            <div className="tooltipnavtext">{props.title}</div>
        </a>
    </div>
    )
}

export default PortfolioImage