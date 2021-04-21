import React from "react";
import SimpleContainer from "../components/SimpleContainer/Container";
import Seperator from "../components/Seperator/Seperator"
import SectionContainer from "../components/SectionContainer/SectionContainer";
import RainbowTitle from "../components/RainbowTitle/RainbowTitle";
import Portfolio from "../components/Portfolio/Portfolio";


function HomePage(){

    return(
        <div>
            <SectionContainer>
                <img style={{height:'100vh', width:'100%', zIndex:'0', position:'absolute'}} src="/assets/images/coverphoto.JPG"></img>
                <RainbowTitle></RainbowTitle>
            </SectionContainer>
        
            <Seperator/>
            <SectionContainer>
                <SimpleContainer></SimpleContainer>
            </SectionContainer>
            <SectionContainer>
                <Portfolio ></Portfolio>
                
            </SectionContainer>

        </div>

    )
}

export default HomePage