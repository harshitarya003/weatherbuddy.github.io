document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "ca5c129fad4468640a8c4a5b904476f9";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    // default city
    checkWeather("Delhi");

    async function checkWeather(city) {
        const response = await fetch(url + city + `&appid=${apiKey}`);
        if (response.status == 404) document.querySelector(".error").style.display = "block";
        else {
            document.querySelector(".error").style.display = "none";
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            var day = data.weather[0].main;
            if (day == "Mist") document.querySelector(".weather img").src = "images/mist.png";
            else if (day == "Clear") document.querySelector(".weather img").src = "images/clear.png";
            else if (day == "Clouds") document.querySelector(".weather img").src = "images/clouds.png";
            else if (day == "Drizzle") document.querySelector(".weather img").src = "images/drizzle.png";
            else if (day == "Humidity") document.querySelector(".weather img").src = "images/humidity.png";
            else if (day == "Rain") document.querySelector(".weather img").src = "images/rain.png";
            else if (day == "Snow") document.querySelector(".weather img").src = "images/snow.png";
            else if (day == "Wind") document.querySelector(".weather img").src = "images/wind.png";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
