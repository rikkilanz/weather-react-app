import React from "react";
import './Loader.css';

function Loader() {
    return(
        <div className="loaders">
            <div class="loading-indicator">
                <div class="loader circle-ping"></div>
                <div class="loader circle-ping"></div>
            </div>
        </div>
    )
}

export default Loader;