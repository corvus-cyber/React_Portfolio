import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/logo/refined-logo.png"
import Resume from "../../assets/resume/Developer.pdf"

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }
    render(){
        const show = (this.state.menu) ? "show" : "" ;
    return (
        <nav className="navbar navbar-expand-lg navbar-light absolute-top">
            <div className="navbar-brand">
                <img className="logo" src={Logo} alt="Wyatt portfolio website"/>
            </div>
            <button className="navbar-toggler ml-auto" type="button" onClick={ this.toggleMenu }>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + show}>
                <ul className="navbar-nav ml-auto navFont">
                    <li className="nav-item nav-link">
                        <Link
                            to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                        About
                        </Link>
                    </li>
                    <li className="nav-item nav-link">
                        <a className="nav-link" href={Resume} download="resume">Resume</a>
                    </li>
                    <li className="nav-item nav-link">
                        <Link
                                to="/portfolio" className={window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Portfolio
                        </Link>
                    </li>
                    <li className="nav-item nav-link">
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
}