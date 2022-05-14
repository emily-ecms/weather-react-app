import React, { useState } from "react";

//import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [dataShowing, setDataShowing] = useState(false);

    const form = (<form onSubmit={searchCity}>
                <input type="search" placeholder="Search city" onChange={updateCity}></input>
                <button>Search</button>
            </form>)

    function updateCity(event) {
        setCity(event.target.value);
    }

    function searchCity(event) {
        event.preventDefault();
        setWeather(`Weather is hot in ${city}` );
        setDataShowing(true);
    }

    if(dataShowing) {
    return(
        <div>
        {form}
        <h2>{weather}</h2>
        </div>
    )
    }
    else {
        return(
            <div>
            {form}
            </div>
        )
    }
}
