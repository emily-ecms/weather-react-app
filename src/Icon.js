import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Icon(props) {
    //let url=`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`
 let icon = props.icon;  
    if (icon === "01d") {
        icon = "CLEAR_DAY";
    } else {
    if(icon === "01n") {
        icon = ("CLEAR_NIGHT");
    }  else {
    if(icon === "02d") {
        icon = ("PARTLY_CLOUDY_DAY");
    } else {
    if(icon === "02n") {
       icon = ("PARTLY_CLOUDY_NIGHT");
    } else {
    if(icon === "03d" || icon === "04d" || icon === "03n" || icon === "04n") {
        icon = ("CLOUDY");
    } else {
    if(icon === "09d" || icon === "10d" || icon === "09n" || icon === "10n") {
        icon = ("RAIN");
    } else {
    if(icon === "11d" || icon === "11n") {
        icon = ("SLEET");
    } else {
    if(icon === "13d" || icon === "13n") {
        icon = ("SNOW");
    } else {
    if(icon === "50d" || icon === "50n") {
        icon = ("FOG");
    } 
}}}}}}}

console.log(`icon code is ${icon}`);

return (
    <div className="weatherIcon">
      
      <ReactAnimatedWeather
        icon={icon}
        color={props.color}
        size={props.size}
        animate={props.animate}
      />
    </div>
  );
    }}