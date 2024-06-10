import React from "react";
import { useWeather } from "../context/Weather";

const Card = ()=>{
    const Weather = useWeather();
    return (
        <div className="card">
            <img src={Weather?.data?.current?.condition?.icon}/>
            <h2>{Weather.data?.current?.temp_c}C</h2>
            <h5>{Weather?.data?.location?.name}, {Weather?.data?.location?.region}, {Weather?.data?.location?.country}</h5>

        </div>
    )
};
export default Card;