import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css"
import WeatherData from "./WeatherData";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({dataShowing: false});
   
    const form = (
    <form onSubmit={searchCity} >
        <div className="row">
            <div className="col-9">
            <input type="search" className="form-control" placeholder="Search city" autoFocus="on" onChange={updateCity}></input>
            </div>
        <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">Search</button>
            </div>
            </div>
    </form>
  );

    function updateCity(event) {
        setCity(event.target.value);
    }

    function setData(response) {
        setWeather({
            date: new Date(response.data.dt * 1000),
            city: response.data.name,
            description: response.data.weather[0].description,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            dataShowing: true
        })  
    }

    function searchCity(event) {
        event.preventDefault();
        const apiKey = `5f472b7acba333cd8a035ea85a0d4d4c`;
        const units ="metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(setData);
    }

    if(weather.dataShowing) {
    return(
        <div className="Weather">
        {form}
       <WeatherData weather={weather} />
       
        <div className="row forecast">

            <div className="col">
                <div className="card forecastCard">
                    <ul className="weatherData">
                    <li>Mon</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>

            <div className="col">
                <div className="card forecastCard">
                    <ul className="weatherData">
                    <li>Tue</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>

            <div className="col">
                <div className="card forecastCard">
                    <ul className="weatherData">
                    <li>Wed</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>

            <div className="col">
                <div className="card forecastCard">
                    <ul className="weatherData">
                    <li>Thu</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>

            <div className="col">
                <div className="card forecastCard">
                    <ul className="weatherData">
                    <li>Fri</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>

        </div>

        </div>
    )
    }
    else {
        return(
            <div>
            {form}
            </div>
        )
    }
}
