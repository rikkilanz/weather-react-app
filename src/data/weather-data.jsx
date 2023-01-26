
const API_KEY = '170ca814a8176bd80dd32e7c19f25524'

const VANCOUVER_LATLON = [49.263569, -123.138573]

export function loadCurrentData(){
    let cWeather = 'https://api.openweathermap.org/data/2.5/weather?' + 'units=metric' + '&lat=' + VANCOUVER_LATLON[0] + '&lon=' + VANCOUVER_LATLON[1] + '&appid=' + API_KEY;
    fetch(cWeather)
    .then(
        response=>response.json()
    )
    .then((cWeatherData) => {
        //display data
        currentWeather(cWeatherData);
        console.log(cWeatherData);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(
        //stop loader
    )

}

export function loadForecastData(){
    let fWeather = 'https://api.openweathermap.org/data/2.5/forecast?' + 'units=metric' + '&lat=' + VANCOUVER_LATLON[0] + '&lon=' + VANCOUVER_LATLON[1] + '&appid=' + API_KEY;
    fetch(fWeather)
    .then(
        response=>response.json()
    )
    .then((fWeatherData) => {
        // forecastWeather(fWeatherData);
        // console.log(fWeatherData);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(
        //stop loader
    )
    // You can make this DRY, try doing fetch as a seprate function with parameter, and return data
}

function currentWeather(data){
    document.querySelector('.current-weather-temp').innerHTML = Math.floor(data.main.temp) + '<span class="current-weather-temp-type">&#xb0;C</span>';
    document.querySelector('.current-weather-type').innerHTML = data.weather[0].main;
    document.querySelector('.current-weather-icon').src = 'http://openweathermap.org/img/wn/'+ data.weather[0].icon + '@4x.png'
}

function forecastWeather(data){
    document.querySelector('.forecast-weather-temp').innerHTML = Math.floor(data.list[0].main.temp) + '<span class="forecast-weather-temp-type">&#xb0;C</span>';
    document.querySelector('.forecast-weather-time').innerHTML = new Date(data.list[0].dt_txt).toLocaleString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
}