import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import Icon from "./Icon";


export default function CurrentWeatherData(props) {
   
    return (
        <div className="CurrentWeatherData">
        <h2 className="city mt-2 mb-2"> {props.weather.city}</h2>
        <FormattedDate date={props.weather.date} />
        <p className="description mb-2">{props.weather.description}</p>
        <div className="row">
        <div className="col-5">
            <Temperature 
            celsius={Math.round(props.weather.temp)} 
            fahrenheit={Math.round(props.weather.temp * 1.8 + 32)}/>  
        </div>
         <div className="col-3">
            <Icon icon={props.weather.icon} size={120} /> 
        </div>
        <div className="col-4">
            <ul className="weatherStats">
                <li>Humidity: {props.weather.humidity} %</li>
                <li>Wind: {Math.round(props.weather.wind)} km/h</li>
            </ul>
        </div>
        </div>
        </div>
    )

}