import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectInfo from "../components/ProjectInfo/ProjectInfo"

function ProjectPage() {

    const ProjectInfoData = {
        passGen: {
            title: 'Password Generator',
            description: 'Password Generator is an application that randomly generates a password for the user. The user can check the parameters they would like to include in their password. ',
            screenshots: [
                "assets/images/pw-gen/home.JPG"         
            ],
            deployedURL: "https://willygodwin.github.io/homework-week-3-password-generator/",
            githubURL: "https://github.com/willygodwin/homework-week-3-password-generator"

        },

        codingQuiz: {
            title: 'Coding Quiz',
            description: 'Coding quiz is an application that provides a random set of coding theory questions to test ones knowledge the quiz has a time limit and will remove 10s for each time a question is incorrect. The quiz rewards the user for bonus streaks, a leaderboard and highest scores are shown at the end from local storage.  ',
            screenshots: [
                "assets/images/coding-quiz/home-page.JPG",
                "assets/images/coding-quiz/Questions.JPG",
                "assets/images/coding-quiz/Highscores.JPG"       
            ],
            deployedURL: "https://willygodwin.github.io/web-API-code-quiz/",
            githubURL: "https://github.com/willygodwin/web-API-code-quiz" 

        },
    }


    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/passwordgen">
            <ProjectInfo props={ProjectInfoData.passGen}/>
          </Route>
          <Route exact path="/books">
            
          </Route>
          <Route exact path="/books/:id">

          </Route>
          <Route path="*">

          </Route>
  
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
  export default ProjectPage;