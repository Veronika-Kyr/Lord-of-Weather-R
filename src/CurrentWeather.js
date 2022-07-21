import React from "react";
import CurrentDate from "./CurrentDate";
import "./CurrentWeather.css";
import TemperatureConversion from "./TemperatureConversion";
import MinMaxTempConversion from "./MinMaxTempConversion";
import ForecastCall from "./ForecastCall";


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
                                <TemperatureConversion celsiusTemp={props.data.temperature} />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 col-md-6 minmax">
                                <MinMaxTempConversion maxTempC={props.data.maxTemperature} minTempC={props.data.minTemperature} />

                            </div>
                            <div className="col-2 col-md-6 hum">
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
                    <div className="col smalfore">
                        <ForecastCall coordinates={props.data.coordinates} />
                    </div>

                </div>
            </div>
        </div>
    )

}