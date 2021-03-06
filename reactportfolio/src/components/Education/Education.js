import React from "react";
import "./style.css"

function Education(){
    return (
            // {/* <!--Education Section--> */}
            <div>
                <div className="row Education pl-3 ">
                    <div className="col-12">
                        <h2>Degrees & Certificates</h2>
                        <hr/>
                    </div>
                    <ul>
                        <li>
                            <h4>Brigham Young University</h4>
                            <p className="indent">Bachelors in International Relations and Russian</p>
                            <p className="indent">GPA: 3.53</p>
                        </li>
                        <li>
                            <h4>University of Utah</h4>
                            <p className="indent">Coding Bootcamp Summer 2020</p>
                            <p className="indent">GPA: 3.9</p>
                        </li>
                        <li>
                            <h4>Moscow Higher School of Economics</h4>
                            <p className="indent">Summer Immersion Program</p>                      
                        </li>
                        <li>
                            <h4>American Council on the Teaching of Foreign Languages (Russian)</h4>
                            <p className="indent">Scored: Advanced Low</p>
                        </li>
                    </ul>
                </div>
                <div className="row pl-3 pr-5 mt-3 pb-5 skills">
                    {/* <!--Abilities section--> */}
                    <div className= "col-md-12"id="titleSkills">
                        <h2>Skills</h2>
                        <hr/>
                    </div>
                    <span>
                        <ul classNameName="list" style={{listStyleType: "none", display:"inline-block"}}>
                            <li><h5>CSS</h5></li>
                            <li><h5>Express</h5></li>
                            <li><h5>HTML</h5></li>
                            <li><h5>Javascript</h5></li>
                            <li><h5>Jquery</h5></li>
                            <li><h5>MERN</h5></li>
                        </ul>
                        <ul classNameName="list" style={{listStyleType: "none", display:"inline-block"}}>
                            <li><h5>MongoDB</h5></li>
                            <li><h5>MySQL</h5></li>
                            <li><h5>Node.js</h5></li>
                            <li><h5>PWA</h5></li>
                            <li><h5>React</h5></li>
                            <li><h5>Sequelize</h5></li>
                        </ul>
                        <ul classNameName="list" style={{listStyleType: "none", display:"inline-block"}}>
                            <li><h5>Russian</h5></li>
                        </ul>
                    </span>
                </div>
            </div>
  
    );
}

export default Education;