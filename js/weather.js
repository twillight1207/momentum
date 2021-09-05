const API_key = "c7bb9d2823bf9f7bc8c6fba8f7546779";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temperature = document.querySelector("#weather span:last-child");

        city.innerHTML = `<i class="fas fa-map-marker-alt"></i>${data.name}`;
        
        weather.innerText = `${data.weather[0].main} / `;
        
        temperature.innerHTML = `<i class="fas fa-thermometer-half"></i>${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you :(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);