import "./Search.css";
import React from "react";

export function Search({value, setValue}) {

    return (
        <div className="search-container">
            <input
                className="search-container__input"
                type="text" 
                value={value}
                onInput={(e) => {setValue(e.target.value)}}
            />
            <button className="search-container__button">search</button>
        </div>
    );
}