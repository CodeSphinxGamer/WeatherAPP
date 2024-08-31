const apiKey = "c2ec2cbbca137d3ea2e21f850ed177fb";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&unit=metric&q="

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const wreatherIcon = document.querySelector(".weather-icon");


    async function checkWeather(city) {

      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.display = "none";

        
      }
      else {
        if (data.weather[0].main == "Clouds") {

            wreatherIcon.src = "./images/clouds.png";
    
    
          } else if (data.weather[0].main == "Clear") {
    
            wreatherIcon.src = "./images/clear.png";
          }
    
          else if (data.weather[0].main == "Rain") {
    
            wreatherIcon.src = "./images/rain.png";
          }
    
          else if (data.weather[0].main == "Drizzle") {
    
            wreatherIcon.src = "./images/drizzle.png";
          }
    
          else if (data.weather[0].main == "Mits") {
    
            wreatherIcon.src = "./images/mist.png";
          }
        
      }

      var data = await response.json();

      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


     

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

    }

    searchBtn.addEventListener("click", () => {


      checkWeather(searchBox.value);


    })
