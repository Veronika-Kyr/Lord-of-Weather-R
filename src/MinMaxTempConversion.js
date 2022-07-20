import React from "react";
import "./MinMaxTempConversion.css";

export default function MinMaxTempConversion(props) {

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

        </div>);

}



