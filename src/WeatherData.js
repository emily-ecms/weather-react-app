import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherData(props) {
   
    return (
        <div className="WeatherData">
        <h2 className="city mt-2 mb-2"> {props.weather.city}</h2>
        <FormattedDate date={props.weather.date} />
        <p className="description mb-2">{props.weather.description}</p>
        <div className="row">
        <div className="col">
            <div className="temperature">{Math.round(props.weather.temp)}<span className="unit"> °C </span></div>
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