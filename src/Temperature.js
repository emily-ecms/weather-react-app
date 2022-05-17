import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
    

    const [unit, setUnit] = useState("celcius");
    //const [clickedUnitLink, setClickedUnitLink] = useState(false);
   
    let celciusTemp = props.celcius;
    let fahrenheitTemp = props.fahrenheit;

    //setTemp(celcius);


    //alert(`temperature is ${temperature}`);

     function getFahrenheit() {
        setUnit("fahrenheit");
        
    }

    function getCelcius() {
       setUnit("celcius");
        
    }

    if(unit === "celcius") {
    
        return (
            <div className="Temperature">{celciusTemp}°<span className="unit ms-3"><a className="celcius active" href="#" onClick={getCelcius}>C </a> | <a className="fahrenheit" href="#" onClick={getFahrenheit}>F</a> </span></div> 
        )
    
        } else {
            return (
                <div className="Temperature">{fahrenheitTemp}°<span className="unit ms-3"><a className="celcius" href="#" onClick={getCelcius}>C </a> | <a className="fahrenheit active" href="#" onClick={getFahrenheit}>F</a> </span></div> 
            )
        }

    }
