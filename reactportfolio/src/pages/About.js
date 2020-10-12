import React from "react";
import Background from "../components/Background/Background"
import Experience from "../components/Experience/Experience"
import Wrapper from "../components/Wrapper/index"

function About(){
    return(
        <Wrapper>
            <Background />
            <Experience />
        </Wrapper>
    );
}

export default About;