import React from "react";
import './ForecastWeather.css';
import weatherIcon from '../../images/sun-icon.svg';

export function ForecastWeather() {
    return(
        <div className="weather-forecast">
            <ul className="d-flex weather-forecast-container">
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>12AM</p>
                </li>
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>3AM</p>
                </li>
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>6AM</p>
                </li>
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>9AM</p>
                </li>
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>12PM</p>
                </li>
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>3PM</p>
                </li>
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>3PM</p>
                </li>
                <li className="weather-forecast-info">
                    <h4 className="weather-forecast-temp">-22<span className="weather-forecast-temp-type">&#xb0;C</span></h4>
                    <img className="weather-forecast-icon" src={weatherIcon} alt="" />
                    <p>3PM</p>
                </li>
            </ul>
        </div>
    )
}