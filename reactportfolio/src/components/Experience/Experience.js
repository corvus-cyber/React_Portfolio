import React from "react";
import "../Styles/style.css"
// import "./style.css"

function Background(){
    return (
        <div class="row ml-2 mr-4 mb-2 pb-5">
            <div class="col-md-4 m-2 pt-2 frazierGroup">
                <h2>Frazier Group</h2>
                <h4>Financial Analyst</h4>
                <hr/>
                <p>Predicted profitability of Utah companies who applied to Frazier Group for investment. 
                    First, I led research into their inner workings, evaluating sales pipeline, management, revenue and economic growth trends. 
                    I then ran various regressions, prepared visuals of the data and and presented my findings to the CEO of the company. 
                    I also prepared Quarterly statements for investors in the Lumen fund (Frazier Group’s sister Fund) on the past and predicted profits. 
                    I was also key in managing relations with other investors in Utah by keeping ties relevant. This meant attending shareholder meetings, 
                    analyzing current financial situations in the market as a whole and determining whether follow-up investment would be prudent.</p>
            </div>
            <div class="col-md-3 mt-2 mb-2 ml-1 mr-1 pt-2 europe">
                <h2>European Commission</h2>
                <h4>Strategic Analyst</h4>
                <hr/>
                <p>Lead analyst on political effects portfolios for the European Commission for Foreign Affairs in the Latvian Parliament. 
                I first performed technical research, then input variables into regressions to determine the various effects these movements could have on the Latvian state. 
                Projects included: Analysis of Social Media Trends in US 2016 Election, effectiveness of East Stratcom, 
                fallout effects of Brexit (concerning the three outlying regions) and an analysis of energy production in the US.</p>
            </div>
            <div class="col-md-4 m-2 ml-2 pt-2 KBH">
                <h2>KBH Inc.</h2>
                <h4>Executive Assistant</h4>
                <hr/>
                <p> Managed various aspects of this natural stone installation company, including recruiting, supervising and training of new employees, 
                    overseeing large shipments from retailers to job site, and coordinating customer service initiatives. 
                    Worked directly with the CEO on facilitating projects for large businesses and artistic buildings.</p>
            </div>
        </div>
        
    );
}

export default Background;