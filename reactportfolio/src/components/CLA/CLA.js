import React from "react";
import "./style.css"
import Employee from "../../assets/PortfolioPics/EmployeeTracker.jpg"
import Website from "../../assets/PortfolioPics/website-builder.jpg"
import ReadME from "../../assets/PortfolioPics/readme.jpg"
function CLA(){
    return(
    <div>
        <div className="row m-4 justify-content-center">
            <div className="col-md-6 mt-4 text-center title" id="Portfolio-heading">
                <h3>Command Line Applications</h3>
                <hr/>
            </div>
        </div> 
        <div className="row text-center justify-content-center" style={{marginRight: 0 + "px"}}> 
            {/* <!--Employee Tracker Card--> */}
            <div className="col-md-4-block mt-2 ml-4 mr-4 text-center">
                <div className="card pt-3" style={{width: 18 + "rem"}}>
                    <img src={Employee} className="card-img-top" alt="employee tracker app"/>
                        <div className="card-body">
                            <h5>Employee Tracker</h5>
                            <a href="https://github.com/corvus-cyber/Employee_Tracker_Assign12" className="card-link">Github</a>
                        </div>
                </div>
            </div>
            {/* <!--Team Website Builder Card--> */}
            <div className="col-md-4-block mt-2 mr-4 ml-4 text-center">
                <div className="card pt-3" style={{width: 18 + "rem"}}>
                    <img src={Website} className="card-img-top" alt="Screenshot of Scheduler website"/>
                        <div className="card-body">
                            <h5>Team Website Builder</h5>
                            <a href="https://github.com/corvus-cyber/Employee_Summary_Assign10" className="card-link">Github</a>
                        </div>
                </div>
            </div>    
            {/* <!--ReadMe Generator CARD--> */}
            <div className="col-md-4-block mt-2 mr-4 ml-4 text-center justify-content-center">
                <div className="card pt-3" style={{width: 18 + "rem"}}>
                    <img src={ReadME} className="card-img-top" alt="Screenshot of Timed Quiz website"/>
                        <div className="card-body">   
                            <h5>ReadMe Application</h5>
                            <a href="https://github.com/corvus-cyber/ReadMe_Generator_Assign9" className="card-link">Github</a>
                        </div>
                </div>
            </div>
        </div> 
    </div>

    );
}

export default CLA;