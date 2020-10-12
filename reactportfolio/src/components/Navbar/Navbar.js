import React from "react";
import { Link } from "react-router-dom";
import "../Styles/style.css";
import Logo from "../../assets/logo/refined-logo.png"
import Resume from "../../assets/resume/Developer.png"


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
                        to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                    >
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={Resume} download="resume">Resume</a>
                </li>
                <li className="nav-item">
                    <Link
                            to="/portfolio" className={window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                    Portfolio
                    </Link>
                </li>
                <li class="nav-item">
                    <Link
                            to="/contact" className={window.location.pathname === "/contact" || window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                    Contact
                    </Link>
                </li>
            </ul>
        </div>


        
        </nav>
        
    );
}
  
export default Navbar;
  