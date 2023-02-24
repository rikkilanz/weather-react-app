import React from "react";
import './App.css';
import CurrentWeather from './components/CurrentWeather'
import Header from './components/Header'
import './styles/main.css'
import ForecastWeather from "./components/ForecastWeather";
import MessageOfTheDay from "./components/MessageOfTheDay";
import { DisplayForecast } from "./components/ForecastWeather/ForecastWeather";
import { PortfolioFBA } from "./components/PortfolioFBA/PortfolioFBA";

function App() {
  return (
    <div className="App">
        <MessageOfTheDay />
      <div className="card-component-weather">
        <Header />
        <CurrentWeather />
        <DisplayForecast />
        <ForecastWeather />
        <PortfolioFBA />
      </div>
    </div>
  );
}

export default App;