import React from "react";
import axios from 'axios'

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}˚C`)
    }

    let apiKey = "667b3c2d5276fd8b0274db2abae287d7"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return ("Loading weather")
}