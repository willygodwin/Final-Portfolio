
import React from "react";



function Screenshot(props) {

    return (

        <img src={props.imageSrc} alt={props.alt} style={{height:'20vh', width:'50vw', marginBottom: "5px"}}></img>
    )
}

export default Screenshot