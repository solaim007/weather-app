const BaseURL = "https://api.weatherapi.com/v1/current.json?key=b4dbe99186e44a058da111114241006";

export const getWeather = async (city) => {
    const response = await fetch(`${BaseURL}&q=${city}&aqi=yes`);
    return await response.json();
};
export const getWeatherForLocation = async (lat,lon) => {
    const response = await fetch(`${BaseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};


