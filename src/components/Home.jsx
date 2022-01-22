import React, { useState, useEffect } from "react";
import './WebPage.css';
import SubmitButton from  './SubmitButton.jsx'

function Home() {
  return (
    <div className="home">
        <div class = "container pt-3 pb-3 my-3" align = "center">
          <label>
            Input the temperature that you are comfortable in in Fahrenheit 
          </label>
          <br></br>
          <input type = "text" id = "comft_temp" placeholder = "Enter prefered temperature">  
          </input>
          <br></br>
          <SubmitButton />
        </div>  
    </div>
  );
}

export default Home;
