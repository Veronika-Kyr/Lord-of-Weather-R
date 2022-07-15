import React, { useState } from "react";
import "./MinMaxTempConversion.css";

export default function MinMaxTempConversion(props) {
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
            <div className="minmaxTemp">
                <span className="maxTemp">
                    {props.maxTempC}
                </span>{" "}
                <span className="slash">/</span>
                <span className="nighttemp">
                    {props.minTempC}
                </span>
                <span className="measureC celciusmin">℃</span>
                <a href="/" className="measureC fahrenmin" rel="noreferrer" onClick={convertFahrenheit}>
                    ℉
                </a>
            </div>);
    }
    else {
        return (
            <div className="minmaxTemp">
                <span className="maxTemp">
                    {Math.round((props.maxTempC * 9 / 5) + 32)}
                </span>{" "}
                <span className="slash">/</span>
                <span className="nighttemp">
                    {Math.round((props.minTempC * 9 / 5) + 32)}
                </span>
                <span className="measureC celciusmin">℉</span>
                <a href="/" className="measureC fahrenmin" rel="noreferrer" onClick={convertCelsius}>
                    ℃
                </a>
            </div>);
    }
}



