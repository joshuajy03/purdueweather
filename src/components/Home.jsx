import React, { useState, useEffect } from "react";
import './WebPage.css';
import Button from '@mui/material/Button';


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
        <Button variant="contained">
          Submit
        </Button> 
    </div>
  );
}

export default Home;
