import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Forecast.css";


export default function ForecastCall(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    function getForecast() {
        let apiKey = "936d2722fd6ddb5c6ab52ceb5b0238af";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showForecast);
    };

    function showForecast(response) {
        setForecast(response.data.daily);
        console.log(response.data.daily);
        setLoaded(true);
    }

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row row-cols-2">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5 && index > 0) {
                            return (
                                <div className="col border border-primary border-opacity-75" key={index}>
                                    <Forecast forecastdata={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    }

    else {
        getForecast();

        return null;
    }


}