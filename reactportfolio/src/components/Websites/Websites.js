import React from "react";
import "../Styles/style.css"
import "./style.css"
import ProfilePic from "../../assets/images/profile.jpg"
import Education from "../Education/Education"
import Exodus from "../../assets/PortfolioPics/EXODUS.png"


function Websites(){
    return (
        <div>
            <div className="row m-4">
                    <div className="col-md-12 mt-4 text-center" id="Portfolio-heading">
                    <h3>Websites</h3>
                    <hr/>
                    </div>
            </div>
            <div className="row text-center justify-content-center"> 
                {/* <!--EXODUS Card--> */}
                <div className="col-md-4-block mr-4 ml-4 text-center justify-content-center">
                    <div className="card" style={{width: 18 + "rem"}}>
                        <img src={Exodus} className="card-img-top" alt="Screenshot of EXODUS Website"/>
                            <div className="card-body">
                                <h5>EXODUS</h5>
                                <a href="https://exodus-escape.herokuapp.com/" className="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/Project_Exodus" className="card-link">Github</a>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Websites;