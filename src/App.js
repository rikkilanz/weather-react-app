import React from "react";
import logo from './logo.svg';
import './App.css';
import CurrentWeather from './components/CurrentWeather'
import Header from './components/Header'
import './styles/main.css'
import ForecastWeather from "./components/ForecastWeather";
import MessageOfTheDay from "./components/MessageOfTheDay";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
        <MessageOfTheDay />
      <div className="card-component-weather">
        <Header />
        <CurrentWeather />
        <ForecastWeather />
      </div>
    </div>
  );
}

export default App;