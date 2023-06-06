import { page } from "./pageParts.js";
import { data } from "./weatherData.js";

async function getWeather(input) {
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0402dd61ebf04c0898f164108230506&q=${input}`);
        const result = await response.json();
        const weather = new data(
            result.location.name,
            result.location.region,
            result.location.country,
            result.current.condition.text,
            result.current.temp_f,
            result.current.temp_c,
            result.current.humidity,
            result.current.wind_mph,
            result.current.wind_kph
        );
        return weather;
    }
    catch(error){
        page.errorP.textContent = "please enter the name of a major city";
        console.error(error);
    }
}


export { getWeather };