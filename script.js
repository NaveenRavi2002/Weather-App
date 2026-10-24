const apiKey = "e75f2c8380a39f708066eeb15ee0c3f6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"
    console.log(data)
}
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// console.log(searchBox)
// console.log(searchBtn)
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

