const page = function() {
    const city = document.getElementById("city");
    const region = document.getElementById('region');
    const country = document.getElementById('country');
    const image = document.getElementById("img");
    const form = document.getElementById('form');
    const input = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit');
    const condition = document.getElementById('current-weather');
    const temp = document.getElementById('temp');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const unitsBtn = document.getElementById('change-units');
    const errorP = document.getElementById('form-error');

    return {
        city,
        region,
        country,
        form,
        input,
        submitBtn,
        condition,
        temp,
        humidity,
        windSpeed,
        unitsBtn,
        errorP,
        image
    }
}();

export { page };