import React, { useState, useEffect } from "react";
import './WebPage.css';
import SubmitButton from  './SubmitButton.jsx'
import './WebPage.css';


function Answers() {
  return (
    <div className="home">
        <div class = "container pt-3 pb-3 my-3" align = "center">
          <div class = "message welcome">
            <label>
            Okay

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

export default Answers;
