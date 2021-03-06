import React, { useState, useEffect } from "react";
import './WebPage.css';
import SubmitButton from './SubmitButton.jsx'
import './WebPage.css';
import { Link, withRouter } from "react-router-dom";
import countries from 'i18n-iso-countries';
import background from "../bg.jpg";
import sky from "../sky.jpeg";
import Answers from "./Answers"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

function Home() {
  // State
  const [getState, setGetState] = useState('');
  const [state, setState] = useState(0);

  const [getCity, setGetCity] = useState("");
  const [city, setCity] = useState("west lafayette");

  const [state2, setState2] = useState(false);
  const [degree, setDegree] = useState(true);

  const [rating, setRating] = useState(0);

  

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const cityInputHandler = (event) => {
    setGetCity(event.target.value);
  };


  const displayAnswer = () => {
    return (
      <Answers parentToChild={state} degree={degree} city={city} />
    )
  }

  const displayNothing = () => {
    return (
      <br />
    )
  }


  return (
    <div className="home">
      <div class="container pt-3 pb-3 my-3" style={{ backgroundImage: `url(${sky})` }} align="center">
        <div class="message" style={{ backgroundImage: `url(${sky})` }}>

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

        

        <div class="input temperature">
          <Stack direction="row" justifyContent='center' spacing={1} alignItems="center">
            <Typography>&deg;F</Typography>
            <Switch defaultChecked onClick={() => setDegree(!degree)} />
            <Typography>&deg;C</Typography>
          </Stack>
        </div>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className = "textfield">
          <TextField
            id="userInput"
            onChange={inputHandler}
            label="Enter Preferred Temperature"
            type="number"
            variant="filled"
            size = "normal"
          />
        </div>
        
        <div className = "textfield">
          <TextField
            multiline={true}
            rows={1}  
            id="userInput"
            onChange={cityInputHandler}
            label="Enter Your City"
            variant="filled"
            size = "normal"
          />
        </div>
        </Box>
        <br></br>
        <Button variant="contained" onClick={() => { setCity(getCity); setState(getState); setState2(true); console.log(city)}} >Submit
        </Button>
        
        {state2 ? displayAnswer() : displayNothing()}
      </div>

    </div>
  );
}

export default Home;
