import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.weather.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "411a942cf48762f8f3d00fd7b552fe5c";
    let longitude = props.weather.coordinates.lon;
    let latitude = props.weather.coordinates.lat;
    let apiUrl = 
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast mt-3">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <div className="card forecast-card">
                  <ForecastDay data={dailyForecast} />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}