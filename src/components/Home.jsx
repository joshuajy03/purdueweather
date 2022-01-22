import React, { useState, useEffect } from "react";
import './WebPage.css';
import SubmitButton from  './SubmitButton.jsx'
import './WebPage.css';
import { Link, withRouter } from "react-router-dom";
import countries from 'i18n-iso-countries';
import background from "../bg.jpg";
import sky from "../sky.jpeg";
import Answers from "./Answers"
import Button from '@mui/material/Button';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

function Home() {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(false);

  // API KEY AND URL
  const apiKey = "2ae90fde95960e4e1763930f619255f2";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
    
    console.log(state2);
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
    setState2(true);
    console.log(state2);
  };

  const displayAnswer = () => {
    return (
      <Answers parentToChild={state} />
    )
  }


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
            <input type = "text" id = "userInput" onChange = {inputHandler} placeholder = "Enter preferred temperature">
            </input>
          </div>

          <br></br>
        <Button variant="contained" onClick = {submitHandler} >Submit
        </Button>
        {state2 ? displayAnswer() : 0}
        </div>
        
    </div>
  );
}

export default Home;
