import React from "react";
import "./style.css"
import Exodus from "../../assets/PortfolioPics/EXODUS.png"
import Scout19 from "../../assets/PortfolioPics/Scout19.png"
import Burger from "../../assets/PortfolioPics/burger-deployed.png"
import Note from "../../assets/PortfolioPics/note-taker.png"
import Scheduler from "../../assets/PortfolioPics/Scheduler.png"
import Weather from "../../assets/PortfolioPics/weatherDashboard.png"
import Password from "../../assets/PortfolioPics/PasswordGen.png"
import Quiz from "../../assets/PortfolioPics/timedQuiz.png"
import Directory from "../../assets/PortfolioPics/empDirectory.png"
import Budget from "../../assets/PortfolioPics/budget.png"
import Fitness from "../../assets/PortfolioPics/fitness.png"
function Websites(){
    return (
        <div>
            <div className="row m-4 justify-content-center">
                    <div className="col-md-10 mt-4 text-center title" id="Portfolio-heading">
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
                {/* <!--SCOUT19 Card--> */}
                <div className="col-md-4-block mr-4 ml-4 text-center">
                    <div className="card" style={{width: 18 + "rem"}}>
                        <img src={Scout19} class="card-img-top" alt="Screenshot of Scout19 Website"/>
                            <div className="card-body">
                                <h5>SCOUT19</h5>
                                <a href="https://corvus-cyber.github.io/SCOUT19/" className="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/SCOUT19" className="card-link">Github</a>
                            </div>
                    </div>
                </div>  
                {/* <!--Employee Directory Card--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center justify-content-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                            <img src={Directory} class="card-img-top" alt="Screenshot of burger-logger website"/>
                            <div class="card-body">
                                <h5>React: Employee Directory</h5>
                                <div class="links">
                                    <a href="https://corvus-cyber.github.io/Employee_Directory_Assign19/" class="card-link">Deployed website</a>
                                    <a href="https://https://github.com/corvus-cyber/Employee_Directory_Assign19" class="card-link">Github</a>
                                </div>
                            </div>
                    </div>
                </div>  
                {/* <!--Budget Tracker--> */}
                <div class="col-md-4-block ml-4 mr-4 text-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Budget} class="card-img-top" alt="Screenshot of Password Generator website"/>
                            <div class="card-body">
                                <h5>PWA: Budget Tracker</h5>
                                <a href="https://budget-tracker-u-of-u.herokuapp.com/" class="card-link">Deployed website</a>
                                <a href="https://https://github.com/corvus-cyber/Online-Offline_Budget_Tracker_Assign18" class="card-link">Github</a>
                            </div>
                    </div>
                </div>
                {/* <!--Fitness Tracker--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Fitness} class="card-img-top" alt="Screenshot of Scheduler website"/>
                            <div class="card-body">
                                <h5>MongoDB: Fitness Tracker</h5>
                                <a href="https://fitness-tracker-u-of-u.herokuapp.com/" class="card-link">Deployed website</a>
                                <a href="https://https://github.com/corvus-cyber/Fitness_Tracker_Assign17" class="card-link">Github</a>
                            </div>
                    </div>
                </div>    
                {/* <!--Weather Dashboard Card--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center justify-content-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Weather} class="card-img-top" alt="Screenshot of Timed Quiz website"/>
                            <div class="card-body">
                                <h5>Weather Dashboard</h5>
                                <a href="https://corvus-cyber.github.io/weather_dashboard_assign6/" class="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/Weather_Dashboard_Assign6" class="card-link">Github</a>
                            </div>
                    </div>
                </div>
                {/* <!--Burger Logger Card--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center justify-content-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                            <img src={Burger} class="card-img-top" alt="Screenshot of burger-logger website"/>
                            <div class="card-body">
                                <h5>MySQL: Burger Logger</h5>
                                <div class="links">
                                    <a href="https://eat-da-burger-unit13.herokuapp.com/" class="card-link">Deployed website</a>
                                    <a href="https://github.com/corvus-cyber/burger_logger_website" class="card-link">Github</a>
                                </div>
                            </div>
                    </div>
                </div>  
                {/* <!--Note Taker Application Card--> */}
                <div class="col-md-4-block ml-4 mr-4 text-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Note} class="card-img-top" alt="Screenshot of Password Generator website"/>
                            <div class="card-body">
                                <h5>Note Taker</h5>
                                <a href="https://uounotetakerassign11.herokuapp.com/" class="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/Note_Taker_Assign11" class="card-link">Github</a>
                            </div>
                    </div>
                </div>
                {/* <!--Daily Scheduler Card--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Scheduler} class="card-img-top" alt="Screenshot of Scheduler website"/>
                            <div class="card-body">
                                <h5>Daily Scheduler</h5>
                                <a href="https://corvus-cyber.github.io/Scheduler_Assign5/" class="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/Scheduler_Assign5" class="card-link">Github</a>
                            </div>
                    </div>
                </div>    
                {/* <!--Weather Dashboard Card--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center justify-content-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Weather} class="card-img-top" alt="Screenshot of Timed Quiz website"/>
                            <div class="card-body">
                                <h5>Weather Dashboard</h5>
                                <a href="https://corvus-cyber.github.io/weather_dashboard_assign6/" class="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/Weather_Dashboard_Assign6" class="card-link">Github</a>
                            </div>
                    </div>
                </div>
                {/* <!--Password Generator Card--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Password} class="card-img-top" alt="Screenshot of Scheduler website"/>
                            <div class="card-body">
                                <h5>Password Generator</h5>
                                <a href="https://corvus-cyber.github.io/Password_Gen_Assign3/" class="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/Password_Gen_Assign3" class="card-link">Github</a>
                            </div>
                    </div>
                </div>    
                {/* <!--Timed Quiz--> */}
                <div class="col-md-4-block mr-4 ml-4 text-center justify-content-center">
                    <div class="card" style={{width: 18 + "rem"}}>
                        <img src={Quiz} class="card-img-top" alt="Screenshot of Timed Quiz website"/>
                            <div class="card-body">
                                <h5> Timed Quiz</h5>
                                <a href="https://corvus-cyber.github.io/Code_Quiz_Assign4/" class="card-link">Deployed website</a>
                                <a href="https://github.com/corvus-cyber/Code_Quiz_Assign4" class="card-link">Github</a>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Websites;