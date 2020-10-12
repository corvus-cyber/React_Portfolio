import React from "react";
import { Link } from "react-router-dom";
import "../Styles/style.css";
import Logo from "../../assets/logo/refined-logo.png"


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light absolute-top">
            <div className="navbar-brand">
                <img className="img-fluid logo" src={Logo}/>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto navFont">
                <li className="nav-item">
                    <Link
                        to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                    }
                >
                About
                </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="assets/resume/Developer.pdf" download="resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>


        
        </nav>
        
    );
}
  
export default Navbar;
  