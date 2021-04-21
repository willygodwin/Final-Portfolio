import zIndex from '@material-ui/core/styles/zIndex';
import React, {useRef, useEffect, useState} from 'react';
import rainbowimage from '../../RainbowBackground.svg'

import "./style.css";


function RainbowTitle() {
  
    const imageRef = useRef()
    const [divHeight, setDivHeight] = useState(0)
    const [divWidth, setDivWidth] = useState(0)

    useEffect(()=>{
        console.log(imageRef.current.parentElement)
        setDivHeight("400px")
        setDivWidth(imageRef.current.parentElement.clientWidth)
        setTimeout(()=>{
            const imageCover = document.querySelector(".white-div")
            const svgTitle = document.querySelector(".svg-title")
            imageCover.classList.add("cover-transition");
            // svgTitle.classList.add("cover-transition");

        },6000)
    },[])

    console.log(divHeight)
    console.log(divWidth)

    return (
        // <div dangerouslySetInnerHTML={createMarkup()} /> 
        <div >
            <svg className="svg-title"viewBox="0 0 800 600" style={{zIndex:'10'}}>
           <symbol id="s-text">
             <text textAnchor="middle"
                   x="50%"
                   y="35%"
                   className="text-line"
                   >
               
             </text>
             <text textAnchor="middle"
                   x="50%"
                   y="50%"
                   className="text--line2"
                   
                   >
                    My   Portfolio...
             </text>
             
           </symbol>
           
           <g className="g-ants">
             <use xlinkHref="#s-text"
               className="text-copy"></use>     
             <use xlinkHref="#s-text"
               className="text-copy"></use>     
             <use xlinkHref="#s-text"
               className="text-copy"></use>     
             <use xlinkHref="#s-text"
               className="text-copy"></use>     
             <use xlinkHref="#s-text"
               className="text-copy"></use>     
           </g>
           
           
         </svg>
         <div> 
         <img ref={imageRef} src={rainbowimage} style={{maxWidth: '100vw', zIndex:'1', position:'absolute'}}></img>
         <div className='white-div'style={{width: divWidth, height:divHeight, zIndex:'2', position:'absolute', backgroundColor: '#ffffff'}}></div>
         </div>
         
        </div>
        
        
   
    )

}

export default RainbowTitle;