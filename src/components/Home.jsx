import React, { useState, useEffect } from "react";
import './WebPage.css';
import SubmitButton from  './SubmitButton.jsx'
import './WebPage.css';
import { Link, withRouter } from "react-router-dom";
import background from "../bg.jpg";
import sky from "../sky.jpeg";


function Home() {
  return (
    <div className="home">
        <div class = "container pt-3 pb-3 my-3"style={{ backgroundImage: `url(${sky})` }} align = "center">
          <div class = "message" style={{ backgroundImage: `url(${sky})` }}>

          <label>
            Did you ever have the experience of stepping out of your house,
            just to realize that it's much more colder than you thought?
              <br></br>  <br></br>
          </label>
          </div>
          <div class="message2" style={{ backgroundImage: `url(${sky})` }} >
            <label>
            Sometimes, you may have even worn too much. Well not to fear,
             Purdue CS students got you covered! We have designed the perfect
             algorithm to calculate how many layers of clothes you need to
             stay comfortably toasty even in the harshest of winters! Just
         enter the temperature that you're most comfortable in and you're set.
            </label>
          </div>

          <br></br>

          <div class = "input temperature">
            <input type = "text" id = "userInput" placeholder = "Enter preferred temperature">

            </input>
          </div>

          <br></br>
        <nav>
        <Link to="/Answers">  <SubmitButton /></Link>
        </nav>
        </div>
    </div>
  );
}

export default Home;
