import React from "react";
import CLA from "../components/CLA/CLA"
import Wrapper from "../components/Wrapper/index"
import Apps from "../components/Applications/Portfolio"

function Portfolio(){
    return(
        <Wrapper>
            <div className="row m-4 justify-content-center">
                <div className="col-md-6 mt-4 text-center title" id="Portfolio-heading">
                    <h3>Websites</h3>
                    <hr/>
                </div>
            </div>
            <Apps/>
            <div className="row m-4 justify-content-center">
                <div className="col-md-6 mt-4 text-center title" id="Portfolio-heading">
                    <h3>Command Line Applications</h3>
                    <hr/>
                </div>
            </div>
            <CLA/>
        </Wrapper>
    );
}

export default Portfolio;