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
  const preferred = parentToChild;

  // API KEY AND URL
  const apiKey = "2ae90fde95960e4e1763930f619255f2";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
      console.log(preferred)
  }, [apiUrl]);

  const kelvinToCelsius = (k) => {
    
    return (k - 273.15).toFixed(2);
  };

  const kelvinToFahrenheit = (k) => {
    console.log();
    return Number(((k - 273.15) * (9/5) + 32).toFixed(1));
  }

  const calculateLayers = (actualTemp) => {
    var layers = 0;
    console.log(actualTemp);
    if (actualTemp > 21)
    {
      layers = 0;
    }
    else if(actualTemp>=15 && actualTemp<21)
    {
      layers = 1;
    }
    else if(actualTemp>=9 && actualTemp<15)
    {
      layers = 2;
    }
    else if(actualTemp>=3 && actualTemp<9)
    {
      layers = 3;
    }
    else if(actualTemp>=-5 && actualTemp<3)
    {
      layers = 4;
    }
    else {
      layers = 5;
    }
    console.log(layers)
    var temperatureDifference = preferred-actualTemp;
    console.log(temperatureDifference);

    if (temperatureDifference >= -5 && temperatureDifference <=5) {

    }
    else if(temperatureDifference<=10 && temperatureDifference>5)
    {
       layers = layers + 1;
    }
    else if(temperatureDifference<=15 && temperatureDifference>10)
    {
       layers = layers +2;
    }
    else if(temperatureDifference>15)
    {
       layers = layers + 3;
    }
    else if(temperatureDifference>=-10 && temperatureDifference<-5)
    {
        layers = layers -1;
    }
    else if(temperatureDifference>=-15 && temperatureDifference<-10)
    {
       layers = layers -2;
    }
    else {
       layers = layers -3;
    }
    console.log(layers);

    const keyClothes = new Map();
    keyClothes.set(0, "T-shirts and shorts would be a good choice!");
    keyClothes.set(1, "Tops: T-shirt and a hoodie \n Bottoms: sweatpants");
    keyClothes.set(2, "Tops: Thermals, T-shirt and a hoodie \n Bottoms: Thermals and sweatpants");
    keyClothes.set(3, "Tops: Thermals, T-shirt, and a winter jacket \n Bottoms: Thermals and sweatpants");
    keyClothes.set(4, "Tops: Thermals, T-shirt, hoodie and a winter jacket \n Bottoms: Thermals and sweatpants");
    keyClothes.set(5, "Tops: Thermals, T-shirt, hoodie, medium coat and a winter jacket \n Bottoms: Thermals and sweatpants");
    
    if (layers < 0) {
      return keyClothes.get(0);
    } else if (layers > 5) {
      return keyClothes.get(5);
    } else {
      return keyClothes.get(layers);
    }
  }


  return (
    <div class = "answer">
        <div>
          {apiData.main ? (
            
            <div class="card-body text-center">
              <p style={{whiteSpace: 'pre-line'}}>
            {calculateLayers(kelvinToCelsius(apiData.main.temp))} 
           </p>
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              /><p>
            </p>

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
