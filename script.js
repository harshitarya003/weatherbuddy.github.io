document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "ca5c129fad4468640a8c4a5b904476f9";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    //search box
    // default city
    searchweather("Delhi");
    async function searchweather(city) {
        const response = await fetch(url + city + `&appid=${apiKey}`);
        if (response.status == 404) document.querySelector(".error").style.display = "block";
        else {
            document.querySelector(".error").style.display = "none";
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name.toUpperCase();
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
            document.querySelector(".feelslike h2").innerHTML = Math.round(data.main.feels_like) + "°C";
            document.querySelector(".pressure").innerHTML = Math.round(data.main.pressure) + " atm";

            var day = data.weather[0].main;
            if (day == "Mist") document.querySelector(".banner img").src = "images/mist.png";
            else if (day == "Clear") document.querySelector(".banner img").src = "images/clear.png";
            else if (day == "Clouds") document.querySelector(".banner img").src = "images/clouds.png";
            else if (day == "Drizzle") document.querySelector(".banner img").src = "images/drizzle.png";
            else if (day == "Humidity") document.querySelector(".banner img").src = "images/humidity.png";
            else if (day == "Rain") document.querySelector(".banner img").src = "images/rain.png";
            else if (day == "Snow") document.querySelector(".banner img").src = "images/snow.png";
            else if (day == "Wind") document.querySelector(".banner img").src = "images/wind.png";
        }
    }

    searchBtn.addEventListener("click", () => {
        searchweather(searchBox.value);
    });

    //card-1
    async function card_1(city) {
        const response = await fetch(url + city + `&appid=${apiKey}`);
        if (response.status == 404) document.querySelector(".error").style.display = "block";
        else {
            document.querySelector(".error").style.display = "none";
            var data = await response.json();
            console.log(data);
            document.querySelector(".card-1 .city").innerHTML = data.name.toUpperCase();
            document.querySelector(".card-1 .humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".card-1 .temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".card-1 .wind").innerHTML = Math.round(data.wind.speed) + " km/h";
            document.querySelector(".card-1 .feelslike h2").innerHTML = Math.round(data.main.feels_like) + "°C";
            document.querySelector(".card-1 .pressure").innerHTML = Math.round(data.main.pressure) + " atm";

            var day = data.weather[0].main;
            if (day == "Mist") document.querySelector(".card-1  img").src = "images/mist.png";
            else if (day == "Clear") document.querySelector(".card-1 img").src = "images/clear.png";
            else if (day == "Clouds") document.querySelector(".card-1 img").src = "images/clouds.png";
            else if (day == "Drizzle") document.querySelector(".card-1  img").src = "images/drizzle.png";
            else if (day == "Humidity") document.querySelector(".card-1  img").src = "images/humidity.png";
            else if (day == "Rain") document.querySelector(".card-1 img").src = "images/rain.png";
            else if (day == "Snow") document.querySelector(".card-1 img").src = "images/snow.png";
            else if (day == "Wind") document.querySelector(".card-1 img").src = "images/wind.png";
        }
    }
    card_1("Delhi");

    //card-2
    async function card_2(city) {
        const response = await fetch(url + city + `&appid=${apiKey}`);
        if (response.status == 404) document.querySelector(".error").style.display = "block";
        else {
            document.querySelector(".error").style.display = "none";
            var data = await response.json();
            console.log(data);
            document.querySelector(".card-2 .city").innerHTML = data.name.toUpperCase();
            document.querySelector(".card-2 .humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".card-2 .temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".card-2 .wind").innerHTML = Math.round(data.wind.speed) + " km/h";
            document.querySelector(".card-2 .feelslike h2").innerHTML = Math.round(data.main.feels_like) + "°C";
            document.querySelector(".card-2 .pressure").innerHTML = Math.round(data.main.pressure) + " atm";

            var day = data.weather[0].main;
            if (day == "Mist") document.querySelector(".weather-icon-2").src = "images/mist.png";
            else if (day == "Clear") document.querySelector(".weather-icon-2").src = "images/clear.png";
            else if (day == "Clouds") document.querySelector(".weather-icon-2").src = "images/clouds.png";
            else if (day == "Drizzle") document.querySelector(".weather-icon-2").src = "images/drizzle.png";
            else if (day == "Humidity") document.querySelector(".weather-icon-2").src = "images/humidity.png";
            else if (day == "Rain") document.querySelector(".weather-icon-2").src = "images/rain.png";
            else if (day == "Snow") document.querySelector(".weather-icon-2").src = "images/snow.png";
            else if (day == "Wind") document.querySelector(".weather-icon-2").src = "images/wind.png";
        }
    }
    card_2("New York");

    //card-3
    async function card_3(city) {
        const response = await fetch(url + city + `&appid=${apiKey}`);
        if (response.status == 404) document.querySelector(".error").style.display = "block";
        else {
            document.querySelector(".error").style.display = "none";
            var data = await response.json();
            console.log(data);
            document.querySelector(".card-3 .city").innerHTML = data.name.toUpperCase();
            document.querySelector(".card-3 .humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".card-3 .temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".card-3 .wind").innerHTML = Math.round(data.wind.speed) + " km/h";
            document.querySelector(".card-3 .feelslike h2").innerHTML = Math.round(data.main.feels_like) + "°C";
            document.querySelector(".card-3 .pressure").innerHTML = Math.round(data.main.pressure) + " atm";

            var day = data.weather[0].main;
            if (day == "Mist") document.querySelector(".weather-icon-3").src = "images/mist.png";
            else if (day == "Clear") document.querySelector(".weather-icon-3").src = "images/clear.png";
            else if (day == "Clouds") document.querySelector(".weather-icon-3").src = "images/clouds.png";
            else if (day == "Drizzle") document.querySelector(".weather-icon-3").src = "images/drizzle.png";
            else if (day == "Humidity") document.querySelector(".weather-icon-3").src = "images/humidity.png";
            else if (day == "Rain") document.querySelector(".weather-icon-3").src = "images/rain.png";
            else if (day == "Snow") document.querySelector(".weather-icon-3").src = "images/snow.png";
            else if (day == "Wind") document.querySelector(".weather-icon-3").src = "images/wind.png";
        }
    }
    card_3("London");
});
