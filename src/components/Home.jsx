import React, { useState, useEffect } from "react";
import './WebPage.css';
import SubmitButton from  './SubmitButton.jsx'
import './WebPage.css';


function Home() {
  return (
    <div className="home">
        <div class = "container pt-3 pb-3 my-3" align = "center">
          <div class = "message welcome">
            <label>
              Did you ever have the experience of stepping out of your house, just to realize that you have worn way too little? Sometimes, you may have even worn too much. Well not to fear, Purdue CS students got you covered! We have designed the perfect algorithm to calculate how many layers of clothes you need to stay comfortably toasty even in the harshest of winters! Just enter the temperature that you're most comfortable in and you're set.
            </label>
          </div>

          <br></br>

          <div class = "input temperature">
            <input type = "text" id = "comft_temp" placeholder = "Enter prefered temperature">
            </input>
          </div>

          <br></br>

          <SubmitButton />
        </div>
    </div>
  );
}

export default Home;
