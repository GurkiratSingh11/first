const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key = "ab669a0e0dc4da8aa2526f6475bb466c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);


    if(weather_data.cod === `404`){
        weather_img.src = "/Images/not-found.png";
    
    }


    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/Images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/Images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/Images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/Images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/Images/snow.png";
            break;

    }
}   

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});