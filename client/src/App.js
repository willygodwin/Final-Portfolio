import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from "./components/Header/Header";
import ProjectInfoData from './components/ProjectInfoData/ProjectInfoData'
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";


function App() {
  
  const data = ProjectInfoData()

  return (
    <div className="App">
      
      <Header/>
      
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/passwordgen">
            <ProjectPage {...data.passGen}/>
          </Route>
          <Route exact path="/jiffy">
            <ProjectPage {...data.jiffy}/>
          </Route>
          <Route exact path="/recibits">
            <ProjectPage {...data.recibits}/>
          </Route>
          <Route exact path="/notetaker">
            <ProjectPage {...data.noteTaker}/>
          </Route>
          <Route exact path="/dailyplanner">
            <ProjectPage {...data.dayPlanner}/>
          </Route>
          <Route exact path="/codingquiz">
            <ProjectPage {...data.codingQuiz}/>
          </Route>
          <Route exact path="/eat-da-burger">
            <ProjectPage {...data.eatDaBurger}/>
          </Route>
          <Route exact path="/weatherdashboard">
            <ProjectPage {...data.weatherDashboard}/>
          </Route>
          <Route exact path="/tombola">
            <ProjectPage {...data.tombola}/>
          </Route>

  
        </Switch>
      </div>
      </BrowserRouter>

  
        
          
    
     
    
    </div>
  );


  
}


export default App;


