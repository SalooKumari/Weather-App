const apiKey="e87e3becbcd7c2228408f8211b7f13c6";

function getWeather(){

const city=document.getElementById("city").value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

.then(response=>response.json())

.then(data=>displayWeather(data))

.catch(()=>{

document.getElementById("weather").innerHTML="City not found";

});

}

function getLocationWeather(){

navigator.geolocation.getCurrentPosition(position=>{

const lat=position.coords.latitude;

const lon=position.coords.longitude;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

.then(response=>response.json())

.then(data=>displayWeather(data));

});

}

function displayWeather(data){

document.getElementById("weather").innerHTML=`

<h2>${data.name}</h2>

<h1>${data.main.temp} °C</h1>

<p><b>${data.weather[0].main}</b></p>

<p>${data.weather[0].description}</p>

<p>💧 Humidity : ${data.main.humidity}%</p>

<p>🌬 Wind : ${data.wind.speed} m/s</p>

`;

}