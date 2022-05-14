import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

//import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [dataShowing, setDataShowing] = useState(false);

    const form = (
    <form onSubmit={searchCity} >
        
                 <input type="text" className="form-control" placeholder="Search city" onChange={updateCity}></input>
               <button type="submit" className="btn btn-primary">Search</button>
            
            </form>
     
  );

    function updateCity(event) {
        setCity(event.target.value);
    }

    function setData(response) {
        setWeather({
            city: response.data.name,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
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
        <div>
        {form}
        <ul>
        <li>Current Weather in {weather.city}</li>
        <li>Temperature: {Math.round(weather.temp)} °C</li>
        <li>Humidity: {weather.humidity} %</li>
        <li>Wind Speed: {Math.round(weather.wind)} km/h</li>
        </ul>
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
