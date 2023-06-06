import { page } from "./pageParts.js";
import { data } from "./weatherData.js";
import { postData } from "./postData.js";
import { getWeather } from "./weatherRequest.js";
import { changeImg } from "./imgChanger.js";

let units = "standard";

let weather = await getWeather("raleigh");
postData(weather, units);

page.unitsBtn.addEventListener("click", () => {
    if(units === "standard"){
        units = "metric";
    } else {
        units = "standard";
    }
    postData(weather, units);
});

page.form.addEventListener("submit", async function(event) {
    event.preventDefault();
    if(page.input.validity.valueMissing){
        page.errorP.textContent = "Please enter the name of a city";
    } else {
        let newCity = await getWeather(page.input.value);
        weather = newCity;
        postData(newCity, units);
        page.input.value = "";
    }
})