import {createContext,useContext,useState} from 'react';
import { getWeather,getWeatherForLocation } from '../api';
const WeatherContext = createContext(null);
export const useWeather = ()=>{
    return useContext(WeatherContext);
};
export const WeatherProvider = (props)=>{
    const [data,setData] = useState(null);
    const [searchCity,setSearchCity] = useState(null);
    const fetchData = async ()=>{
        const response = await getWeather(searchCity);
        setData(response);
    }
    const fetchCurrentUserLocationData = async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherForLocation(lat,lon).then((data)=>{
                setData(data);
            })
        })
    };
    return (
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
};