import React, { Component } from "react";
import cla from "./cla.json";
import Card from './Card';

class CLA extends Component{

  state = {
    cla
  };


render(){
  return(
      <div id="cla">
        

            <div className="text-center">
              <div className="row justify-content-center" style={{marginRight: 0 + "px"}}>
                
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
  );
}
}

export default CLA;