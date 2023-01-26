
const API_KEY = '170ca814a8176bd80dd32e7c19f25524'

const VANCOUVER_LATLON = ['49.263569', '123.138573']

export function loadData(){
    let endpoint = 'https://api.openweathermap.org/data/2.5/weather?' + 'units=metric' + '&lat=' + VANCOUVER_LATLON[0] + '&lon=' + VANCOUVER_LATLON[1] + '&appid=' + API_KEY;
    fetch(endpoint)
    .then(
        response=>response.json()
    )
    .then((data) => {
        //display data
        currentWeather(data);
        console.log(currentWeather);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(
        //stop loader
    )
}

export function currentWeather(data){
    document.querySelector('.current-weather-temp').innerHTML = Math.floor(data.main.temp);
    document.querySelector('.current-weather-type').innerHTML = data.weather[0].main;
}