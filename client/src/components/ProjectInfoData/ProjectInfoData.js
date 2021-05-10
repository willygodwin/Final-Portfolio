import React from 'react'

function ProjectInfoData(){
    const Data = {
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

        dayPlanner: {
            title: 'Day Planner',
            description: 'The Day Planner application uses local storage to store daily tasks between 8-5pm during that working day. We utilise the external library Moment.js to work with the dates and times.  ',
            screenshots: [
                "assets/images/day-planner/title.JPG",
                "assets/images/day-planner/planner.JPG"
                      
            ],
            deployedURL: "https://willygodwin.github.io/Third-Party-API-Day-Planner/",
            githubURL: "https://github.com/willygodwin/Third-Party-API-Day-Planner"
    
        },
        weatherDashboard: {
            title: 'Weather Dashboard',
            description: 'The weather dashboard application uses a third party api to give the current weather and a 5 day forecast for a city anywhere in the world. The city is then saved in recent searches for the user to access again. ',
            screenshots: [
                "assets/images/weather/search.JPG",
                "assets/images/weather/five.JPG"
                      
            ],
            deployedURL: "https://willygodwin.github.io/weather-dashboard/",
            githubURL: "https://github.com/willygodwin/weather-dashboard"
    
        },
        recibits: {
            title: 'Reci-Bits',
            description: ' Reci-Bits is a application that utilises a 3rd party api, the application allows the user to to search for recipe and nutrition information from ingredient or food (or drink) items provided. Basically the Idea was conceived from the day to day scenario of opening the fridge and seeing some items there but not having the knowledge what to make from those items. The localStorage is used for storing the searched recipe (favorite one) data locally and it will be loaded when the page is loaded. ',
            screenshots: [
                "assets/images/recibits/saved_recipe.png",
                "assets/images/recibits/list_of_12.png",
                "assets/images/recibits/detailed_recipe.png" ,
                "assets/images/recibits/nutri_info.png"
                      
            ],
            deployedURL: "https://willygodwin.github.io/reci-bits/" ,
            githubURL: "https://github.com/willygodwin/reci-bits"
    
        },
        noteTaker: {
            title: 'Note Taker',
            description: ' The Notes Dashboard allows the user to save and delete notes they may need for daily tasks or ideas. The notes dashboard web app interacts with the backend to read and write a JSON file storing the notes info (acting as the database). ',
            screenshots: [
                "assets/images/notetaker/home.jfif",
                "assets/images/notetaker/notes.jfif",

                      
            ],
            deployedURL: "https://notetaker-will.herokuapp.com/" ,
            githubURL: "https://github.com/willygodwin/Notes-App"
    
        },

        eatDaBurger: {
            title: 'Eat Da Burger',
            description: 'Eat-Da-Burger application allows the user to add new burgers, delete burgers, devour burgers or throw them up (haha). The application uses mysql for the data storage and has been deployed to heroku.   ',
            screenshots: [
                "assets/images/eatburger/eatburger.jfif",
                

                      
            ],
            deployedURL: "https://eat-da-burger69.herokuapp.com/",
            githubURL: "https://github.com/willygodwin/Eat-Da-Burger" 
    
        },
        jiffy: {
            title: 'Jiffy',
            description: 'This is a Node.JS web application that connects construction companies and labourers with each other and streamline the process to hire labourers as a company or find job as a labourer.   ',
            screenshots: [
                "assets/images/jiffy/home-page.PNG",
                "assets/images/jiffy/company-sign-up.PNG",
                "assets/images/jiffy/company-calendar.PNG",
                "assets/images/jiffy/company-post-job.PNG" ,
                "assets/images/jiffy/company-view-posted-jobs.PNG",
                "assets/images/jiffy/company-view-job-details.PNG"
                   
            ],
            deployedURL: "https://project2-will.herokuapp.com/",
            githubURL: "https://github.com/willygodwin/sos-labour"
    
        },
        tombola: {
            title: 'Tombola',
            description: 'Tombola is a fun and exciting adaptation of the online marketplace. A combination of instagram, ebay and the classic raffle.  Sellers are able to raffle consumer items to the community. Buyers from the community then have a chance to win items by purchasing a percentage of these tickets. ',
            screenshots: [
                "assets/images/tombola/tombola1.png",
                "assets/images/tombola/tombola2.JPG",
                "assets/images/tombola/tombola3.JPG",
                   
            ],
            deployedURL: "https://tombola-project3.herokuapp.com/",
            githubURL: "https://github.com/willygodwin/Tombola"
    
        },

    }

    return Data
}

export default ProjectInfoData