import { page } from "./pageParts.js";
import { changeImg } from "./imgChanger.js";
function postData(data, units) {
    page.city.textContent = data.city;
    page.region.textContent = data.region;
    page.country.textContent = data.country;
    page.condition.textContent = data.condition;
    changeImg(page.image, data.condition);

    page.humidity.textContent = `Humidity: ${data.humidity}%`;
    if(units === "standard"){
        page.temp.innerHTML = `${data.tempS}&deg;F`;
        page.windSpeed.textContent = `Winds @ ${data.speedS}mph`;
    } else {
        page.temp.innerHTML = `${data.tempM}&deg;C`;
        page.windSpeed.textContent = `Winds @ ${data.speedM}kph`;
    }
}

export { postData };