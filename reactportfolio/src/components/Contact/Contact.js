import React from "react";
import "../Styles/style.css"
import Contactpic from "../../assets/images/contactpic.jpg"
import {
    FaGithubSquare,
    FaLinkedin,
    FaEnvelope,
    FaPhoneAlt,
  } from "react-icons/fa";
function ContactContainer(){
    return(
        <div className="container-md mt-4 p-2 pb-5 mb-5 bg-silver contactContainer">
            <div className="row m-4">
            <div className="col-md-12 text-center">
                <h3>Contact Information</h3>
                <hr/>
                <img src={Contactpic} className="img-fluid justify-content-center p-4 fade-in" alt=" Wyatt and his wife"/>
                <h6>Looking to build the website of your dreams? </h6>
                <h6>I am currently open to new opporunities as a front-end developer on your product or web development teams. </h6> 
                <h6>Feel free to reach out to me directly. I will respond by the end of the next business day.</h6>
            </div> 
            </div>
            <div className="row ml-4 mr-4">
            <div className="col-md-12 contactInfo">
                <a href="tel:503-860-1251"><FaPhoneAlt /> 503-860-1251</a>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12 contactInfo">
                <a href = "mailto: wyatta.hancock@gmail.com"><FaEnvelope /> Send Email</a>
            </div>
            </div>
            <div className="row ml-4 mr-4">
            <div className="col-md-12 contactInfo">
                <a href="https://github.com/corvus-cyber" target="_blank" rel="noopener noreferrer"><FaGithubSquare/> Github Profile</a>
            </div>     
            </div>
            <div className="row ml-4 mr-4 mb-2">
            <div className="col-md-12 contactInfo">
                <a href="https://linkedin.com/in/wyatt-a-hancock-885705166" target="_blank" rel="noopener noreferrer"><FaLinkedin/>Linkedin Profile</a>
            </div>
            </div>
      </div>

    )
}

export default ContactContainer;
