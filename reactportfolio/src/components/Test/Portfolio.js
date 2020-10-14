import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Exodus from "./PortfolioPics/EXODUS.png"
import Scout19 from "./PortfolioPics/Scout19.png"
import Burger from "./PortfolioPics/burger-deployed.png"
import Note from "./PortfolioPics/note-taker.png"
import Scheduler from "./PortfolioPics/Scheduler.png"
import Weather from "./PortfolioPics/weatherDashboard.png"
import Password from "./PortfolioPics/PasswordGen.png"
import Quiz from "./PortfolioPics/timedQuiz.png"
import Directory from "./PortfolioPics/empDirectory.png"
import Budget from "./PortfolioPics/budget.png"
import projects from "./projects.json";
import Projects from './Projects';
import $ from 'jquery';

class Portfolio extends Component{

  state = {
   
    img : [Exodus, Scout19, Burger, Note, Scheduler, Weather, Password, Quiz, Directory, Budget],
    projects
  };

  componentDidMount(){
    $('.list-group-item').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
    });

    $('.show-btn').on('click', function () {
      $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function () {
      $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });
  }

render(){
  return(
    <div>
      <div id="portfolio">
        <div className="projects padding">
          <div className="container">
            <div className="row">
              <header className="text-center">
                <h2 className="text-center">Projects</h2>
              </header>
            </div>
            <br />
            <br />

            <div className="text-center">
              <div className="row">
                
                    {this.state.projects.map(project => (             
                      <Projects 
                          image = {project.pictures}
                          id = {project.id}
                          title= {project.title}
                          github = {project.href}
                          deployed = {project.description.href}
                          description = {project.description.description}
                          technologies = {project.technologies}            
                      />
                    
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Portfolio;