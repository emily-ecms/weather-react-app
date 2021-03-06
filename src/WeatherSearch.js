import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./WeatherSearch.css"
import CurrentWeatherData from "./CurrentWeatherData";
import Forecast from "./Forecast";

export default function WeatherSearch(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({dataShowing: false});
   
    const form = (
    <form onSubmit={searchCity} >
        <div className="row">
            <div className="col-9">
            <input 
            type="search" 
            className="form-control searchInput" 
            placeholder="Search city" 
            autoFocus="on" 
            onChange={updateCity}>
            </input>
            </div>
        <div className="col-3">
            <button 
            type="submit" 
            className="btn btn-primary w-100">
                Search</button>
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
            icon: response.data.weather[0].icon,
            coordinates: response.data.coord,
            dataShowing: true            
        });
    }

    function searchDefaultCity() {
        const apiKey = `411a942cf48762f8f3d00fd7b552fe5c`;
        const units ="metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(setData);
    }

    function searchCity(event) {
        event.preventDefault();
        const apiKey = `411a942cf48762f8f3d00fd7b552fe5c`;
        const units ="metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(setData);
    }

    if(weather.dataShowing) {
    return(
       <div className="Weather">
       {form}
       <CurrentWeatherData weather={weather} />
       <Forecast weather={weather} />
       </div>
    )
    }
    else {
        searchDefaultCity(city);
        return (
            <div className="Weather">
            {form}
            </div>
            )
    }
}