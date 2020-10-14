import React from "react";
import "../Styles/style.css"
import "./style.css"
import ProfilePic from "../../assets/images/profile.jpg"
import Education from "../Education/Education"
function Background(){
    return (
        <div className="row m-2">
            <div class="col-md-7 mt-3 ml-2 mr-2 pt-2 aboutMe">
                <h2>About Me</h2>
                <img class="mainIMG img-fluid float-left p-4" src={ProfilePic} alt="Wyatt"></img>
                <p>Born and raised in the great Pacific Northwest, the gloomy weather encouraged me from a young age to embrace reading. 
                Until I was eighteen most of my time was spent with my nose in a book, completely spellbound by characters like Harry Potter, Kaladin, Aragorn and Percy Jackson.  
                I attended a high school where our team name were the “Papermakers” and our mascot was a robot known as the Mean Machine; to this day I don’t really know what a “Mean Machine” actually is. 
                I really never cared enough to find out; I was more interested in exploring the library then attending sporting events. At eighteen I left the United States and served an LDS mission in Novosibirsk Russia, 
                a place of environmental extremes and populated by a people who stole my heart and who taught me about how diverse and beautiful the world truly is.
                </p>
                <p>Following my mission I graduated from Brigham Young University in the Spring of 2019 with a degree in International Relations and Russian. 
                During my time in university I worked abroad as a strategic analyst for the parliament of Latvia, traveling all over the Baltics, 
                France, Germany, Italy and Croatia. However, towards the close of my education I fell in love and got married; 
                and I knew that it was important for my new family that we find a place here in Utah rather than follow my previous ambition of becoming a diplomat. 
                </p>
                <p>After graduating I began work as a financial analyst at a local tech investment firm based out of Lehi, 
                where I began to learn about the rapidly growing opportunities here in the valley.
                Having enjoyed the data-analysis background that I acquired during my major, I have decided to pursue web-development as I will be able to take my love for creative problem solving and apply it within a growing industry. 
                </p>
            </div>
            {/* <!--Education Section--> */}
            <div class="col-md-4 mt-3 ml-2 mr-2 ">
                <Education/>
            </div>
        </div>     
    );
}

export default Background;