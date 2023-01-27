import { React } from "react";
import './Header.css'
import locationPin from '../../images/location-pin-icon.svg'
import searchIcon from '../../images/search-icon.svg'

export function Header(){
    return(
        <div className="header">
            <div className="weather-location d-flex align-items-c">
                <img className="weather-location-pin" src={locationPin} alt=""/>
                <h1 className="weather-location-name"></h1>
                {/* <img className="search-icon" src={searchIcon} alt="" height="20" width="20"/> */}
            </div>
        </div>
    )
}