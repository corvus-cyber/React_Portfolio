import React from "react";
import "../Styles/style.css"
import Contactpic from "../../assets/images/contactpic.jpg"
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
                <i className="fas fa-phone"></i>
                <a href="tel:503-860-1251">503-860-1251</a>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12 contactInfo">
                <i className="far fa-envelope"></i>
                <a href = "mailto: wyatta.hancock@gmail.com">Send Email</a>
            </div>
            </div>
            <div className="row ml-4 mr-4">
            <div className="col-md-12 contactInfo">
                <i className="fab fa-github"></i>
                <a href="https://github.com/corvus-cyber" target="_blank" rel="noopener noreferrer">Github Profile</a>
            </div>     
            </div>
            <div className="row ml-4 mr-4 mb-2">
            <div className="col-md-12 contactInfo">
                <i className="fab fa-linkedin"></i>
                <a href="https://linkedin.com/in/wyatt-a-hancock-885705166" target="_blank" rel="noopener noreferrer">Linkedin Profile</a>
            </div>
            </div>
      </div>

    )
}

export default ContactContainer;
