import React from "react";
import Websites from "../components/Websites/Websites"
import CLA from "../components/CLA/CLA"
import Wrapper from "../components/Wrapper/index"

function Portfolio(){
    return(
        <Wrapper>
            <Websites />
            <CLA/>
        </Wrapper>
    );
}

export default Portfolio;