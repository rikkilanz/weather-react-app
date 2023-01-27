// THIS IS A COMPONENT
// It would import all the CSS
import { React, useState, useEffect } from "react";
import './CurrentWeather.css';
import Loader from "../Loader/Loader";

function CurrentWeather (){
    function DisplayCurrent({weatherTemp, weatherType, weatherIcon}){
        document.querySelector('.weather-location-name').innerHTML = data.name + ', ' + data.sys.country;
        return (
            <div className="current-weather">
                <div className="d-flex flex-direction-c">
                    <h2 className="current-weather-temp">{weatherTemp}<span className="current-weather-temp-type">&#xb0;C</span></h2>
                    <h1 className="current-weather-type">{weatherType}</h1>
                    <img className="current-weather-icon" src={weatherIcon} width="50" height="50" alt="" />
                </div>
            </div>
        )
    }
    // Load data
    const API_KEY = '170ca814a8176bd80dd32e7c19f25524';
    const VANCOUVER_LATLON = [49.263569, -123.138573];

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let cWeather = 'https://api.openweathermap.org/data/2.5/weather?' + 'units=metric' + '&lat=' + VANCOUVER_LATLON[0] + '&lon=' + VANCOUVER_LATLON[1] + '&appid=' + API_KEY;
        fetch(cWeather)
        .then(
            response=>response.json()
        )
        .then(setData)
        .catch(setError)
        .then(
            () => setLoading(false)
        )
    }, []);
    if(loading) return (<Loader/>)
    if(error) console.log(setError)
    if(!data) return null;
        return document.querySelector('.weather-location-name').innerHTML = data.name + ', ' + data.sys.country, <DisplayCurrent weatherTemp={Math.floor(data.main.temp)} weatherType={data.weather[0].main} weatherIcon={'http://openweathermap.org/img/wn/'+ data.weather[0].icon + '@4x.png'}/>;
}

// You export it as a Component for the index.js to notice?
export default CurrentWeather;