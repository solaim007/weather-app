import React from "react";
import { useWeather } from "../context/Weather";
const Input = (props) => {
    const Weather = useWeather();
    console.log(Weather);
  return (
    <div>
      <input className="input-field" 
      placeholder="search Here"
      value={Weather.searchCity} onChange={(e)=>Weather.setSearchCity(e.target.value)} />
      
    </div>
  );
};
export default Input;