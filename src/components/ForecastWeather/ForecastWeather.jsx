import React from "react";
import './ForecastWeather.css';
import weatherIcon from '../../images/sun-icon.svg';
import { loadForecastData } from "../../data/weather-data.jsx";
import Loader from "../Loader/Loader";

export function ForecastWeather() {
    loadForecastData();
    return(
        <div className="forecast-weather">
            <h3 style={{textAlign: 'left', fontWeight: 800, marginBottom: '5px'}}>Tomorrow</h3>
            <ul className="d-flex forecast-weather-container">
                 <li className="forecast-weather-info">
                    <h4 className="forecast-weather-temp">-22<span className="forecast-weather-temp-type">&#xb0;C</span></h4>
                    <img className="forecast-weather-icon" src={weatherIcon}  alt="" />
                    <p className="forecast-weather-time">12AM</p>
                </li>
            </ul>
        </div>
    )
}
