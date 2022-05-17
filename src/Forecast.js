import React from "react";

export default function Forecast(props) {
    alert(`coords: ${props.weather.coords} `)
    return (
        <p>coords: {props.weather.coords}  </p>
    )
}