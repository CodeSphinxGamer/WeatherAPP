const apiKey = "c2ec2cbbca137d3ea2e21f850ed177fb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // Cambié "unit" a "units"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        } else {
            document.querySelector(".error").style.display = "none";

            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "./images/clouds.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "./images/clear.png";
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "./images/rain.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "./images/drizzle.png";
            } else if (data.weather[0].main === "Mist") { // Cambié "Mits" a "Mist"
                weatherIcon.src = "./images/mist.png";
            } else {
                weatherIcon.src = "./images/default.png"; // Agregado un ícono por defecto
            }

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            document.querySelector(".weather").style.display = "block";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
