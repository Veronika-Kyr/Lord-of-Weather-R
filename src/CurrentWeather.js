import React from "react";
import CurrentDate from "./CurrentDate";
import "./CurrentWeather.css";


export default function CurrentWeather(props) {


    return (
        <div className="currentWeather">
            <h4>🌈Lord of Weather</h4>

            <p className="head">{props.data.city}</p>

            <div className="container">
                <div className="row">
                    <div className="col currentBlock">
                        <div className="row">
                            <div className="col-2 col-sm bigdate">
                                <CurrentDate date={props.data.date} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-auto">
                                <img
                                    src={props.data.icon}
                                    alt={props.data.description}
                                    className="skyIcon"
                                />
                                <span className="daytemp">
                                    {props.data.temperature}
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
                                        {props.data.maxTemperature}
                                    </span>{" "}
                                    <span className="slash">/</span>
                                    <span className="nighttemp">
                                        {props.data.minTemperature}
                                    </span>
                                    <a href="/" className="measureC celciusmin" rel="noreferrer">
                                        ℃
                                    </a>
                                </div>
                            </div>
                            <div className="col-2 col-sm hum">
                                <div className="detailed">
                                    <i className="fa-solid fa-droplet bigdrop"></i>
                                    <span> {props.data.humidity}</span> %
                                    <br />
                                    <i className="fa-solid fa-wind bigwind"></i>
                                    <span> {props.data.windSpeed} </span> km/h
                                    <br />
                                    <span className="weatherDescription">
                                        {" "}
                                        {props.data.description}{" "}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}