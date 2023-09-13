import "./Select.css";
import React from "react";

export function Select({value, setValue, options, children}) {
    return (
        <>
            <label className="select-container__label">
                <p className="select-container__caption">{children}</p>
                <select
                    className="select-container__select"
                    onInput={(e) => {setValue(e.target.value);}}
                    value={value}
                >
                    {options.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>;
                    })}
                </select>
            </label>
        </>
    );
}