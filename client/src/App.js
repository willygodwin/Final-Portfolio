import React, {useState, useEffect, Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleContainer from "./components/SimpleContainer/Container";
import Seperator from "./components/Seperator/Seperator"
import SectionContainer from "./components/SectionContainer/SectionContainer";
import RainbowTitle from "./components/RainbowTitle/RainbowTitle";
import Portfolio from "./components/Portfolio/Portfolio";
import ProjectTileData from './components/ProjectTileData/ProjectTileData';
import HomeworkTileData from './components/HomeworkTileData/HomeworkTileData';
import ProjectPage from "./pages/ProjectPage";


function App() {
  return (
    <div className="App">
      
      <Header/>
      

        
          <SectionContainer>
            <img style={{height:'100vh', width:'100%', zIndex:'0', position:'absolute'}} src="/assets/images/coverphoto.JPG"></img>
            <RainbowTitle></RainbowTitle>
          </SectionContainer>
       
          <Seperator/>
          <SectionContainer>
            <SimpleContainer></SimpleContainer>
          </SectionContainer>
          <SectionContainer>
            <Portfolio tileData={ProjectTileData} title='Major Projects'></Portfolio>
            
          </SectionContainer>
    <ProjectPage></ProjectPage>
     
    
    </div>
  );


  
}


export default App;


