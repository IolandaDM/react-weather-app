

import React from "react";
import "./Weather.css";


export default function Weather() {
    let weatherData = {
        city: "Lisbon",
        weekday: "Friday",
        time: "09:17",
        description: "Sunny",
        iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
        currentTemperature: "31",
        wind: "1",
        humidity: "12"
    };
    return (
        <div>
            <div>
                <h1 className="current-city">{weatherData.city}</h1>
                <h2>
                    <span className="current-time">
                        {weatherData.weekday}, {weatherData.time}
                    </span>
                </h2>
                <h2 className="current-description">{weatherData.description}</h2>

                <div className="row">
                    <div className="col-7">
                        <img
                            src={weatherData.iconUrl}
                            alt="Weather symbol"
                            className="weather-icon"
                        />
                        <p className="current-weather">
                            <span className="current-temperature">
                                {weatherData.currentTemperature}
                            </span>
                            <span className="units">
                                <span className="celcius">
                                    <a href="/" className="active">
                                        °C
                  </a>
                                </span>
                |
                <span className="fahrenheit">
                                    <a href="/" className="active">
                                        °F
                  </a>
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="col-5">
                        <p>
                            Wind speed ={" "}
                            <span className="wind-speed">{weatherData.wind}</span> km/h
            </p>
                        <p>
                            Humidity ={" "}
                            <span className="humidity">{weatherData.humidity}</span>%
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
