import React from "react";
import "./CitySearch.css";

export default function CitySearch() {
    return (
        <div className="CitySearch">
            <form>
                <input
                    className="city-search"
                    type="search"
                    placeholder="Search for a city"
                />
                <input className="btn-search" type="submit" value="GO 🔎" />
                <button className="showCurrent">Current</button>
            </form>
        </div>
    );
}