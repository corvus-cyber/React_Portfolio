import React from 'react'
import {
  BsFillInfoCircleFill
} from "react-icons/bs";
 

export default function Projects(props) {


  console.log(props.image);
    return (
      <div className="col-md-4-block mr-4 ml-4 text-center justify-content-center">
      <div className="card" style={{width: 18 + "rem"}}>
          <img src={props.image} className="card-img-top" alt="portfolio screenshot"/>
              <div className="card-body">
              <h5>{props.title}</h5>
                  <a href={props.deployed} className="card-link">Deployed website</a>
                  <a href={props.github} className="card-link">Github</a>
              </div>
      </div>
      </div>  
          
    )
}