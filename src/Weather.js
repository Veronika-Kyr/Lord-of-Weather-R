import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    let [city, setCity] = useState(props.city);
    let date = "May 27";
    let [currentWeather, setCurrentWeather] = useState({});
    function getCity(event) {
        setCity(event.target.value);
    }
    function callCurrentWeather(event) {
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=936d2722fd6ddb5c6ab52ceb5b0238af&units=metric`;
        axios.get(url).then(getCurrentWeather);
    }
    function getCurrentWeather(response) {
        setCurrentWeather({
            temperature: Math.round(response.data.main.temp),
            windSpeed: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            maxTemperature: Math.round(response.data.main.temp_max),
            minTemperature: Math.round(response.data.main.temp_min),
        })
    }
    return (
        <div className="Weather">
            <div className="block">
                <div class="block1">
                    <h4>🌈Lord of Weather</h4>

                    <p className="head">{city}</p>

                    <div className="container">
                        <div className="row">
                            <div className="col currentBlock">
                                <div className="row">
                                    <div className="col-2 col-sm bigdate">
                                        <p>{date}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-auto">
                                        <img
                                            src={currentWeather.icon}
                                            alt={currentWeather.description}
                                            className="skyIcon"
                                        />
                                        <span className="daytemp">
                                            {currentWeather.temperature}
                                        </span>
                                        <a href="/" class="measureC" rel="noreferrer">
                                            ℃
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8 col-md-auto">
                                        <div className="minmaxTemp">
                                            <span className="maxTemp">
                                                {currentWeather.maxTemperature}
                                            </span>{" "}
                                            <span className="slash">/</span>
                                            <span className="nighttemp">
                                                {currentWeather.minTemperature}
                                            </span>
                                            <a href="/" className="measureC celciusmin" rel="noreferrer">
                                                ℃
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-2 col-sm hum">
                                        <div className="detailed">
                                            <i className="fa-solid fa-droplet bigdrop"></i>
                                            <span> {currentWeather.humidity}</span> %
                                            <br />
                                            <i className="fa-solid fa-wind bigwind"></i>
                                            <span> {currentWeather.windSpeed} </span> km/h
                                            <br />
                                            <span className="weatherDescription">
                                                {" "}
                                                {currentWeather.description}{" "}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="CitySearch">
                        <form onSubmit={callCurrentWeather}>
                            <input
                                className="city-search"
                                type="search"
                                placeholder="Search for a city" onChange={getCity}
                            />
                            <input className="btn-search" type="submit" value="GO 🔎" />
                            <button className="showCurrent">Current</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="gitRef">
                <p className="codeRef">
                    {" "}
                    <a
                        href="https://github.com/Veronika-Kyr/Lord-of-Weather-R"
                        target="_blank" rel="noreferrer"
                    >
                        Open-source code
                    </a>{" "}
                    by Veronika Kyrylovska
                </p>
            </div>
        </div>
    );
}
