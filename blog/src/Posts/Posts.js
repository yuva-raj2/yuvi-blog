import React from "react"
import Instaclone from "../Assets/Instaclone.png";
import SurveyForm from "../Assets/Surveyform.png";
import Portfolio from "../Assets/Portfolio.png";
import Landing from "../Assets/Landing.png";
import Skill from "../Assets/skilljob.png";
import Island from "../Assets/Island.png";
import Todo from "../Assets/Todo.png";
import Calci from "../Assets/Calci.png";
import "./Posts.css";
const Projects=()=>{
  return (
    <div className="Posts">
        <footer className="Myposts" id="Posts">
            <span className="myposts">My Personal Blog Posts</span>
          <div className="projects-intern-submission-1">
            <div className="project-intern">
              <div className="posts">
                <a href="https://oibsip-task-2-weld.vercel.app/" target="_blank" className="insta-clone-link">
                <img src={Instaclone} alt="Instaclone" className="pro-image"/>
                <span><b>Instagram Clone</b>,using Reactjs</span>
                <p className="insta-content-project">This is an Instagram clone website.I have created only a few designs 
                for the project.I will update the sections in the future.It's just a Website Design using a Front End 
                FrameWork.I have just created a simple web design home page based on without navigation.The media 
                responsibility was okay but I will the correct media visibility in the future.I have created 
                the website and hosted it in Vercel to see the webpage in real time.</p>
                </a>
              </div>
            </div>
            <br/>
            <div className="project-intern intern-2">
              <div className="posts project-2">
                <a href="https://algobulls-nine.vercel.app/" target="_blank" className="insta-clone-link">
                <img src={Portfolio} alt="Instaclone" className="pro-image"/>
                <span><b>Portfolio Website</b>,using ReactJs</span>
                <p className="portfolio-content-project">This is my personal website portfolio.I have created the website using the ReactJs FrameWork.On this
                website,the user can able to view my projects and the user can able to contact me.I have created this website for the intern purpose also 
                Oasis InfoByte and OctaNet Software Services.I have created the website and hosted it on the Vercel Platform.But it will be responsive in 
                Desktop view on a PC.I had been updated my website that what you can see now!</p>
                </a>
              </div>
            </div>
            </div>
            <div className="projects-intern-submission-2">
              <div className="project-intern sub-2">
                <div className="posts project-3">
                  <a href="https://yuva-raj2.github.io/surveyform/surveyform/" target="_blank" className="insta-clone-link">
                  <img src={SurveyForm} alt="SurveyForm" className="pro-image"/>
                  <span><b>Survey Form</b>,using HTML,CSS,JS</span>
                  <p className="survey-content-project">I have created a Survey Form using HTML,CSS and Javascript.In this website user can give a review based on their interest.
                  It's just like a rating star.They can submit the review when they are filling all the questions asked in the survey.It's a simple website design.It is not too 
                  much interactive it's just a design.</p>
                  </a>
                </div>
              </div>
                <div className="posts project-4">
                  <a href="https://yuva-raj2.github.io/OIBSIP/Landing%20Page/" target="_blank" className="landing-link">
                  <img src={Landing} alt="LandingWebPage" className="pro-image"/>
                  <span><b>Landing Web Page</b>,using HTML,CSS,JS</span>
                  <p className="landing-content-project">I have created a Landing Web Page using HTML,CSS and Javascript.It's a simple website design.It is not too 
                  much interactive it's just a design.I have designed the website design based on the task organized by Oasis InfoByte and OctaNet Software Services 
                  Company in the role of Web Development Intern</p>
                  </a>
                </div>
              </div>
              <div className="projects-intern-submission-3">
                <div className="project-intern sub-3">
                  <div className="posts project-5">
                    <a href="https://yuva-raj2.github.io/OCTANET_OCTOBER/skilljob-main/skilljob-main/" target="_blank" className="skill-job-link">
                      <img src={Skill} alt="Skill-job-web-page" className="pro-image"/>
                      <span><b>Skill Job Recommendation</b>,using HTML,CSS,JS</span>
                      <p className="skill-content-project">I have created a Skill Job Recommendation Website using HTML,CSS and Javascript.It's a simple website design.It is not too 
                      much interactive it's just a design.I have created this website design based on the web Development Internship task given by the Oasis InfoByte and OctaNet Software Services </p>
                    </a>
                  </div>
                </div>
                <div className="posts project-6">
                  <a href="https://yuva-raj2.github.io/islandresorts/Islandwebsite/index.html" target="_blank" className="island-resort-link">
                    <img src={Island} alt="IslandResortWebPage" className="pro-image"/>
                    <span><b>Island Resort Website Design</b>,using HTML,CSS,JS</span>
                    <p className="island-content-project">I have created a Island Resort Web Page using HTML,CSS and Javascript.It's a simple website design.It is not too 
                    much interactive it's just a design.In this website user can book the resort based on their convenience but I had need to alter for few more options.In
                    future I will update the website to be more interactive to the users</p>
                  </a>
                </div>
              </div>
              <div className="projects-intern-submission-4">
                <div className="project-intern sub-4">
                  <div className="posts project-7">
                    <a href="https://todo-two-topaz.vercel.app/" target="_blank" className="todo-list-link">
                      <img src={Todo} alt="Todo-list-web-page" className="pro-image"/>
                      <span><b>Todo List Web Page</b>,using ReactJS</span>
                      <p className="todo-list-content-project">It is a Todo List Website.I have created the website using Reactjs Framework.In this website User can able to add or 
                      delete their daily scheduled task based on their convenience.The user can also pin by clicking on the tick button in Todo List Website.I have been created and 
                      hosted the website using the Vercel platform to reach to the users </p>
                    </a>
                  </div>
                </div>
                <div className="posts project-8">
                  <a href="https://yuvi-calci.vercel.app/" target="_blank" className="calci-app-link">
                    <img src={Calci} alt="CalciWebApp" className="pro-image calci-img" height="312px"/>
                    <span><b>Calculator Web App</b>,using ReactJS</span>
                    <p className="calci-content-project">I have created a Calculator Web App using HTML,CSS and ReactJs.In this website user can do mathematical calculations
                    using this website.The mathematical operations to be performed in this Calculator are like addition,subtraction,multiplication adn division and also we can 
                    clear the history too.Suppose if the entered number is wrong we can delete a single number also.It is too interactive to use for the clients/users.</p>
                  </a>
                </div>
              </div>
        </footer>
    </div>
  )
}

export default Projects