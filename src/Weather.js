import React from "react";
import "./Weather.css";
import CitySearch from "./CitySearch";

export default function Weather() {
    let weatherData = {
        city: "Kyiv",
        date: "May 27",
        imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
        currentTemperature: 28,
        maxTemperature: 30,
        minTemperature: 19,
        humidity: 40,
        wind: 4,
        skyDescription: "sunny"
    };
    return (
        <div className="Weather">
            <div className="block">
                <div class="block1">
                    <h4>🌈Lord of Weather</h4>

                    <p className="head">{weatherData.city}</p>

                    <div className="container">
                        <div className="row">
                            <div className="col currentBlock">
                                <div className="row">
                                    <div className="col-2 col-sm bigdate">
                                        <p>{weatherData.date}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-auto">
                                        <img
                                            src={weatherData.imgUrl}
                                            alt={weatherData.skyDescription}
                                            className="skyIcon"
                                        />
                                        <span className="daytemp">
                                            {weatherData.currentTemperature}
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
                                                {weatherData.maxTemperature}
                                            </span>{" "}
                                            <span className="slash">/</span>
                                            <span className="nighttemp">
                                                {weatherData.minTemperature}
                                            </span>
                                            <a href="/" className="measureC celciusmin" rel="noreferrer">
                                                ℃
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-2 col-sm hum">
                                        <div className="detailed">
                                            <i className="fa-solid fa-droplet bigdrop"></i>
                                            <span> {weatherData.humidity}</span> %
                                            <br />
                                            <i className="fa-solid fa-wind bigwind"></i>
                                            <span> {weatherData.wind} </span> km/h
                                            <br />
                                            <span className="weatherDescription">
                                                {" "}
                                                {weatherData.skyDescription}{" "}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CitySearch />
                </div>
            </div>
            <div className="gitRef">
                <p className="codeRef">
                    {" "}
                    <a
                        href="https://github.com/Veronika-Kyr/Lord-of-Weather"
                        target="_blank" rel="noopener"
                    >
                        Open-source code
                    </a>{" "}
                    by Veronika Kyrylovska
                </p>
            </div>
        </div>
    );
}
