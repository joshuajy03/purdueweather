import React, { useState, useEffect } from "react";
import './WebPage.css';


function Home() {
  return (
    <div className="home" align = "left">
        <label>
          Input the temperature that you are comfortable in in Fahrenheit 
        </label>
        <br></br>
        <input type = "text" id = "comft_temp" placeholder = "Enter prefered temperature">  
        </input>
        <br></br>
        <button>
          Submit
        </button> 
    </div>
  );
}

export default Home;
