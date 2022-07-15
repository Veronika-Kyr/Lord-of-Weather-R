import React, { useState } from "react";
import "./TemperatureConversion.css";


export default function TemperatureConversion(props) {
    let [unit, setUnit] = useState("celsius");
    function convertFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="conversion">
                <span className="daytemp">
                    {Math.round(props.celsiusTemp)}
                </span>
                <span className="measureC">
                    ℃ / <a href="/" className="measureF" rel="noreferrer" onClick={convertFahrenheit}>
                        ℉
                    </a>
                </span>
            </div>);
    }
    else {
        return (
            <div className="conversion">
                <span className="daytemp">
                    {Math.round((props.celsiusTemp * 9 / 5) + 32)}
                </span>
                <span className="measureC"><a href="/" className="measureF" rel="noreferrer" onClick={convertCelsius}>
                    ℃</a> /
                    ℉
                </span>
            </div>);

    }
}