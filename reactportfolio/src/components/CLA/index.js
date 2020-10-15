import React, { Component } from "react";
import cla from "./cla.json";
import Card from './Card';
import $ from 'jquery';

class CLA extends Component{

  state = {
    cla
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
    <div style={{marginBottom: 40 + "%"}}>
      <div id="portfolio">
        

            <div className="text-center">
              <div className="row" style={{marginRight: 0 + "px"}}>
                
                    {this.state.cla.map(app => (             
                      <Card
                          key = {app.id}
                          image = {app.pictures}
                          id = {app.id}
                          title= {app.title}
                          github = {app.href}
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

export default CLA;