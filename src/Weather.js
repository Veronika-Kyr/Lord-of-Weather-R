import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import { Oval } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function Weather(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [currentWeather, setCurrentWeather] = useState({ ready: false });

    function getCity(event) {
        setCity(event.target.value);
    }
    function callCurrentWeather(event) {
        event.preventDefault();
        CitySearch();
    }

    function CitySearch() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=936d2722fd6ddb5c6ab52ceb5b0238af&units=metric`;
        axios.get(url).then(getCurrentWeather);
    }
    function getCurrentWeather(response) {
        setCurrentWeather({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            windSpeed: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            maxTemperature: Math.round(response.data.main.temp_max),
            minTemperature: Math.round(response.data.main.temp_min),
            city: response.data.name,
            coordinates: response.data.coord,
        })
    }
    if (currentWeather.ready) {
        return (
            <div className="Weather">
                <div className="block">
                    <div className="block1">
                        <CurrentWeather data={currentWeather} />
                        <div className="CitySearch">
                            <form onSubmit={callCurrentWeather}>
                                <input
                                    className="city-search"
                                    type="search"
                                    placeholder="Search for a city" onChange={getCity}
                                />
                                <input className="btn-search" type="submit" value="GO 🔎" />
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
                        made by  <a
                            href="https://veronika-kyrylovska.netlify.app/"
                            target="_blank" rel="noreferrer"
                        >
                            Veronika Kyrylovska
                        </a>
                    </p>
                </div>
            </div>
        );
    }
    else {
        CitySearch();
        return (
            <Oval
                height="280"
                width="1080"
                color='orange'
                ariaLabel='loading'
            />);
    }
}
