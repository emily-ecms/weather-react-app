import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";


export default function WeatherData(props) {
   
    return (
        <div className="WeatherData">
        <h2 className="city mt-2 mb-2"> {props.weather.city}</h2>
        <FormattedDate date={props.weather.date} />
        <p className="description mb-2">{props.weather.description}</p>
        <div className="row">
        <div className="col">
            <Temperature temperature={props.weather.temp} celcius={Math.round(props.weather.temp)} fahrenheit={Math.round(props.weather.temp * 1.8 + 32)}/>
            
        </div>
        <div className="col">
            <ul className="weatherStats">
                <li>Humidity: {props.weather.humidity} %</li>
                <li>Wind: {Math.round(props.weather.wind)} km/h</li>
            </ul>
        </div>
        </div>
        </div>
    )

}