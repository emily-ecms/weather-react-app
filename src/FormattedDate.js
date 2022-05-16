import React from "react";

export default function FormattedDate(props) {
    
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let day = props.date.getDay();
    let dayString = days[day];
    let hours = props.date.getHours();
    if(hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
   
    let timeString = `${hours}:${minutes}`;

    return (
       <div className="formattedDate mb-2">As of {dayString}{" "}{timeString} </div>
    )
}