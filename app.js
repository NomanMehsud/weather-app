// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
// const apiKEY = "0313f248fa0cc5f1e56ba691142b24d8";

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "&appid=0313f248fa0cc5f1e56ba691142b24d8"
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const weather = document.querySelector(".weather");




async function weatherData(city) {
    const response = await fetch(url + city + apikey);
    var data = await response.json();
    console.log(data);
    if(data.cod == "404"){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
    
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Drizle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
    }



}

searchbtn.addEventListener("click", () =>{
    weatherData(searchbox.value);
})

