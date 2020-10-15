import React, { Component } from "react";
import applications from "./app.json";
import Card from './Card';
import $ from 'jquery';

class Portfolio extends Component{

  state = {
    applications
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
        

            <div className="text-center">
              <div className="row justify-content-center" style={{marginRight: 0 + "px"}}>
                
                    {this.state.applications.map(app => (             
                      <Card
                          key = {app.id}
                          image = {app.pictures}
                          id = {app.id}
                          title= {app.title}
                          github = {app.href}
                          deployed = {app.description.href}
                          description = {app.description.description}
                          technologies = {app.technologies}            
                      />
                    
                ))}
              </div>
            </div>
          </div>
        </div>
  );
}
}

export default Portfolio;