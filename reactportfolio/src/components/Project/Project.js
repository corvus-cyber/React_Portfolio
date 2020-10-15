import React from 'react'
import "./style.css"

import {
  BsFillInfoCircleFill
} from "react-icons/bs";
 

export default function Card(props) {
    return (
        <div className="mr-2 ml-2">
          <div className="col-md-4 mr-5 ml-5 mt-5 text-center justify-content-center">
            <div className="card" style={{width: 18 + "rem"}}>
                <img src={process.env.PUBLIC_URL + props.image} className="card-img-top" alt="portfolio screenshot"/>
                    <div className="card-head">
                      <h5>{props.title}</h5>
                    <button type="button" className="btn btn-custom show-btn " data-rel={props.id}>
                        <BsFillInfoCircleFill/>
                    </button>
                    </div>
                    <div className="card-body">
                        <a href={props.deployed} className="card-link">Deployed website</a>
                        <a href={props.github} className="card-link">Github</a>
                    </div>
                    <div className="card-reveal" data-rel={props.id} style={{display: "none"}}>
                    <button type="button" className="close" data-rel={props.id} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span></button>
                    <p>{props.description}<br /><br />
                    {props.technologies}
                    </p>
                  </div>
            </div> 
          </div> 
        </div>
      
    )
}