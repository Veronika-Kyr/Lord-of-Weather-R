import React from "react";
import "./TemperatureConversion.css";


export default function TemperatureConversion(props) {



    return (
        <div className="conversion">
            <span className="daytemp">
                {Math.round(props.celsiusTemp)}
            </span>
            <span className="measureC">
                ℃
            </span>
        </div>);


}