import React, { useEffect } from "react";
import './ForecastWeather.css';
import weatherIcon from '../../images/sun-icon.svg';
import { loadForecastData } from "../../data/weather-data.jsx";
import Loader from "../Loader/Loader";
import { useState } from 'react';

export function ForecastWeather() {

    function forecastWeather(data){
        var forecastContainer = document.querySelector('.forecast-weather-container');
        forecastContainer.innerHTML = '';
        // For every iteration:
        // create/display weeather component with data loaded
        for(let i=0; i<9; i++){
            var forecastInfo = document.createElement('li');
            forecastInfo.classList.add('forecast-weather-info');
            var forecastTemp = document.createElement('h4');
            forecastTemp.classList.add('forecast-weather-temp');
            forecastTemp.innerHTML = Math.floor(data.list[i].main.temp) + '<span class="forecast-weather-temp-type">&#xb0;C</span>';
            var forecastIcon = document.createElement('img');
            forecastIcon.classList.add('forecast-weather-icon');
            forecastIcon.src = 'http://openweathermap.org/img/wn/'+ data.list[i].weather[0].icon + '@4x.png';
            var forecastTime = document.createElement('p');
            forecastTime.classList.add('forecast-weather-time');
            forecastTime.innerHTML = new Date(data.list[i].dt_txt).toLocaleTimeString().replace(/([\d])(:[\d]{2})(:[\d]{2})(.*)/, "$1$4");
            forecastInfo.appendChild(forecastTemp);
            forecastInfo.appendChild(forecastIcon);
            forecastInfo.appendChild(forecastTime);
            forecastContainer.appendChild(forecastInfo); 
        }
    }

    function DisplayForecast({data}){
        return (
            <div className="forecast-weather">
                <h3 style={{textAlign: 'left', fontWeight: 800, marginBottom: '15px'}}>Tomorrow</h3>
                <ul className="d-flex forecast-weather-container">
                </ul>
            </div>
        )
    }
    // We store the api key in a variabble
    // we hard set the coordinates of Vancouver currently, but I'd like to make this dynamic in the future
    const API_KEY = '170ca814a8176bd80dd32e7c19f25524';
    const VANCOUVER_LATLON = [49.263569, -123.138573];
    // This is a useState
    // in the array instantiated, the first value is the default state or value which is passed from the useState function
    // in this current array, data is set to null
    // setData is a setter function
    // Basically we call it when we're changing data or setting some sort of state
    // you pass null to the intial state. when you call data, it'll return null which is falsy
    const [data, setData] = useState(null);
    // same for this
    const [error, setError] = useState(null);
    // finally, we set the initial state of loading to false, so when we call it, we setLoading to true and when it is true, we load the loader, until we set it to false again
    const [loading, setLoading] = useState(false)
    // We are creating 3 different types of states base on this app
    // one for data (whether its loaded or not), another is for error (checking if there is an error during load of data) and finally for loading (which has two state, whether its looking for data, or it already has data)

    // A useEffect is called at an instant. Once it is called at an instant, we follow with a set of code blocks to run such as loading data for fetching the data.
    // During this fetch data
    useEffect(() =>{
        // When use effect is run, we set the state of loading to true, this will be related later where if the loading is true, we return/display the Loader component
        setLoading(true);
        // We place the the link API query to a variable, where we call it later. it doesnt have to be in a variable
        let fWeather = 'https://api.openweathermap.org/data/2.5/forecast?' + 'units=metric' + '&lat=' + VANCOUVER_LATLON[0] + '&lon=' + VANCOUVER_LATLON[1] + '&appid=' + API_KEY;
        // We call the fetch function and pass that link that was stored in variable
        fetch(fWeather)
        // Once fetch, you put the response into a readable format which is json
        .then(
            response=>response.json()
        )
        // We chain again. WE instantiate the setData?
        .then(setData)
        // so if there are any errors, insantiate the setError state
        .catch(setError)
        // after all the data is loaded, we set the setLoading back to false so we can take out the loader
        .then(
            () => setLoading(false)
        )
    }, []);
    // A conditional statement. If loading is currently true, which it is because we used the useEffect and fetch the data, we display the loader
    if(loading) return (<Loader />)
    // if error is true, console log the caught error that is stored in setError
    if(error) console.log(setError)
    // Finally, we check if there is no data or data is false
    if(!data) return null;
    //Finally, if all of those passed, we continue to finally display the data we've fetched
    if(data) return (<DisplayForecast data={data} />) 
}
