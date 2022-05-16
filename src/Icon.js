import React from "react";

export default function Icon(props) {
    let url=`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`

    return (
    <img src={url} alt={props.weather.description} className="icon"/>
    );

}