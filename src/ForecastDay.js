import React from "react";
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="ForecastDayIcon">
      <Icon icon={props.data.weather[0].icon} size={36} />
      </div>
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="Forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}