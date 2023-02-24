import React from "react";
import './MessageOfTheDay.css';

function MessageOfTheDay() {
    return(
        <div className="motd">
            <div className="message"><h5 className="message">This is NOWWeather!</h5></div>
            <p className="copyright">Built with React.js | &copy; Rikki Soriano</p>
        </div>
    )
}

export default MessageOfTheDay;