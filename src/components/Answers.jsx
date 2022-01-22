import React, { useState, useEffect } from "react";
import './WebPage.css';
import SubmitButton from  './SubmitButton.jsx'
import './WebPage.css';
import countries from 'i18n-iso-countries';
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));


function Answers({parentToChild}) {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('west lafayette');
  const [state, setState] = useState('west lafayette');

  const [preferred, setPreferred] = useState(parentToChild);

  // API KEY AND URL
  const apiKey = "2ae90fde95960e4e1763930f619255f2";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));

  }, [apiUrl]);

  const kelvinToCelsius = (k) => {
    return (k - 273.15).toFixed(2);
  };

  const kelvinToFahrenheit = (k) => {
    return Number(((k - 273.15) * (9/5) + 32).toFixed(1));
  }

  const calculateLayers = (actualTemp) => {
    const [layers, setLayers] = setState(0);

    if (preferred > 21)
    {
      setLayers(0);

    }
    else if(preferred>=15 && preferred<21)
    {
      setLayers(1);
    }
    else if(preferred>=9 && preferred<15)
    {
      setLayers(2);
    }
    else if(preferred>=3 && preferred<9)
    {
      setLayers(3);
    }
    else if(preferred>=-5 && preferred<3)
    {
      setLayers(4);
    }
    else {
      setLayers(5);
    }
    var temperatureDifference = actualTemp-preferred;


    if(temperatureDifference<=10 && temperatureDifference>5)
    {
       setLayers(layers+1);
    }
    else if(temperatureDifference<=15 && temperatureDifference>10)
    {
       setLayers(layers+2);
    }
    else if(temperatureDifference>15)
    {
       setLayers(layers+3);
    }
    else if(temperatureDifference>=-10 && temperatureDifference<-5)
    {
        setLayers(layers-1);
    }
    else if(temperatureDifference>=-15 && temperatureDifference<-10)
    {
       setLayers(layers-2);
    }
    else {
       setLayers(layers-3);
    }

    }


  return (
    <div class = "answer">
        <div>
          {apiData.main ? (
            <div class="card-body text-center">
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />

              <p className="h2">
                Current temp:       {kelvinToCelsius(apiData.main.temp)}&deg; C / {kelvinToFahrenheit(apiData.main.temp)}&deg; F
              </p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <strong>{apiData.name}</strong>
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i class="fas fa-temperature-low "></i>{' '}
                    <strong>
                      Min temp:     {kelvinToCelsius(apiData.main.temp_min)}&deg; C / {kelvinToFahrenheit(apiData.main.temp_min)}&deg; F
                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>{' '}
                    <strong>
                      Max temp:     {kelvinToCelsius(apiData.main.temp_max)}&deg; C / {kelvinToFahrenheit(apiData.main.temp_max)}&deg; F
                    </strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {' '}
                    <strong>{apiData.weather[0].main}</strong>
                  </p>
		  <p>
                    <strong>
                      {' '}
                      {countries.getName(apiData.sys.country, 'en', {
                        select: 'official',
                      })}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1>Loading</h1> // if it fails to load a valid location
          )}
        </div>
          <br></br>
        </div>
  );
}

export default Answers;
