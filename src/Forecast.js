import React from "react";
import "./Forecast.css";



export default function Forecast(props) {
    function forecastDate() {
        let date = new Date(props.forecastdata.dt * 1000);
        let dayNumber = date.getDate();
        let month = date.getMonth();
        let months = [
            "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
        ];
        let fullDate = `${dayNumber}.${months[month]}`;
        return fullDate;
    }
    function forecastIcon() {
        let icon = props.forecastdata.weather[0].icon;
        return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }

    return (
        <div className="Forecast">
            {/* <div className="col border border-primary border-opacity-75"> */}
            <div className="row-3 forecastForm">
                <div className="col fore-date">{forecastDate()}</div>
                <div className="col fore-temp">
                    <span className="smdaytemp">{Math.round(props.forecastdata.temp.max)}</span>/<span className="smnighttemp">{Math.round(props.forecastdata.temp.min)}℃</span>
                </div>
                <div className="col fore-status">
                    <img
                        src={forecastIcon()}

                        alt={props.forecastdata.weather[0].description} width="60" className="iconFore" />
                </div>
            </div>

        </div>
        // </div>
    )
}