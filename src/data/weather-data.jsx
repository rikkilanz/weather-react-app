
const API_KEY = '170ca814a8176bd80dd32e7c19f25524'

const VANCOUVER_LATLON = [49.263569, -123.138573]

export function loadForecastData(){
    let fWeather = 'https://api.openweathermap.org/data/2.5/forecast?' + 'units=metric' + '&lat=' + VANCOUVER_LATLON[0] + '&lon=' + VANCOUVER_LATLON[1] + '&appid=' + API_KEY;
    fetch(fWeather)
    .then(
        response=>response.json()
    )
    .then((fWeatherData) => {
        forecastWeather(fWeatherData);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(
        //stop loader
    )
    // You can make this DRY, try doing fetch as a seprate function with parameter, and return data
}

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