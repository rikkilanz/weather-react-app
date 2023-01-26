// THIS IS A COMPONENT
// It would import all the CSS
import { React } from "react";
import './CurrentWeather.css';
import weatherIcon from '../../images/sun-icon.svg';
import '../../data/weather-data.js'
import { loadData } from "../../data/weather-data.js";
import Loader from "../Loader/Loader";

function CurrentWeather (){
    loadData();
    return (
        <div className="current-weather">
            <Loader />
            <div className="d-flex flex-direction-c">
                <h2 className="current-weather-temp">-22<span className="current-weather-temp-type">&#xb0;C</span></h2>
                <h1 className="current-weather-type">SUNNY</h1>
                <img className="current-weather-icon" src={weatherIcon} width="50" height="50" alt="" />
            </div>
        </div>
    )
}

// You export it as a Component for the index.js to notice?
export default CurrentWeather;