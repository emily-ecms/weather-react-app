import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css"

//import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [dataShowing, setDataShowing] = useState(false);

    const form = (
    <form onSubmit={searchCity} >
        
                 <input type="search" className="form-control" placeholder="Search city" onChange={updateCity}></input>
               <button type="submit" className="btn btn-primary">Search</button>
            
            </form>
     
  );

    function updateCity(event) {
        setCity(event.target.value);
    }

    function setData(response) {
        setWeather({
            city: response.data.name,
            description: response.data.weather[0].description,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
        
        setDataShowing(true);
    }

    function searchCity(event) {
        event.preventDefault();
        

        let apiKey = `5f472b7acba333cd8a035ea85a0d4d4c`;
        let units ="metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

        axios.get(apiUrl).then(setData);

        //setDataShowing(true);
    }

    if(dataShowing) {
    return(
        <div className="Weather">
        {form}
        <div className="row m-5">
            <div className="col-4">
                <h2 className="city mt-2 mb-2"> {weather.city}</h2>
                
                    <div className="temperature">{Math.round(weather.temp)} °C </div>
                    
                
            </div>

            <div className="col-4">
               <img src={weather.icon} alt={weather.description} className="icon"/> 
            </div>

            <div className="col-4">
             <h2 className="description mt-2 mb-2">{weather.description}</h2>
                <ul className="weatherData">
                    <li>Humidity: {weather.humidity} %</li>
                    <li>Wind Speed: {Math.round(weather.wind)} km/h</li>
                </ul>
            </div>
            
            
        
        
        </div>

        <div className="row">
            <div className="col">
                <div className="card">
                    <ul className="weatherData">
                    <li>Mon</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                </ul>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <ul className="weatherData">
                    <li>Tue</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <ul className="weatherData">
                    <li>Wed</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <ul className="weatherData">
                    <li>Thu</li>
                    <li><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Cloudy" /></li>
                    <li>20° <span className="tempMin"> 12°</span></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="card">
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
