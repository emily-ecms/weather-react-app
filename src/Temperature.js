import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");
    
    function getFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function getCelsius(event) {
        event.preventDefault();
       setUnit("celsius");    
    }

    if(unit === "celsius") {
    
        return (
            <div className="Temperature">{props.celsius}°<span className="unit ms-3"><span className="active">C </span> | <a href="#" onClick={getFahrenheit}>F</a> </span></div> 
        )
    
        } else {
            return (
                <div className="Temperature">{props.fahrenheit}°<span className="unit ms-3"><a href="#" onClick={getCelsius}>C </a> | <span className="active">F</span> </span></div> 
            )
        }

    }
