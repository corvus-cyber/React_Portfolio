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
        <div className="apps padding">
          <div className="container">
            <div className="row">
              <header className="text-center">
                <h2 className="text-center">apps</h2>
              </header>
            </div>
            <br />
            <br />

            <div className="text-center">
              <div className="row">
                
                    {this.state.applications.map(app => (             
                      <Card
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
      </div>
    </div>
  );
}
}

export default Portfolio;