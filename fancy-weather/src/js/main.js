import { changeBackground } from './changeBackground';
import { getCurrCords } from './getCurrCords';

export const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e2XB0R4kjwU';
// const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e0R4kjwU';

// access key geolocation = 5dbc5a39979b10
// запрос https://ipinfo.io/json?token=СЮДА_ТОКЕН

const geocoding = '54572f3240854bfdbe2c9dd0d9cbd15f';
// Reverse geocoding
// https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=YOUR-API-KEY
// Forward geocoding
// https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=YOUR-API-KEY

const weatherApiKey = 'd638f1c5cf184e38a9654b6b6bad7ccf';
// запрос https://api.weatherbit.io/v2.0/forecast/daily

export const numberError = '401';
export const mainQuery = 'weather';
const lang = 'en';
const unit = 'C';
const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

export const getCountry =  async (coords) => {
  const lat = coords.latitude;
  const lng = coords.longitude;
  const fetchCoords = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${geocoding}`);
  const resCoords = await fetchCoords.json();
  
  return resCoords;
}

export const getWeather = async (coords) => {
  const lat = coords.latitude;
  const lng = coords.longitude;
  const fetchWeather = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${weatherApiKey}&lang=${lang}
  &units=${unit}&days=4&&lat=${lat}&lon=${lng}`);
  const resWeather = await fetchWeather.json();

  console.log(resWeather);
  return resWeather;
}

export const changeWeatherInfo = async (coords) => {
  const arrWeather = await getWeather(coords);
  const today = document.querySelector('.weather__today-info');
  const next = document.querySelector('.weather__next');
  today.innerHTML = '';
  next.innerHTML = '';

  const tempToday = `<div class="weather__temperature">
    <span>${arrWeather.data[0].temp}</span>
  </div>
  <div class="weather-info">
    <div class="weather-info__icon">
      <img alt="" src="">
    </div>
    <div class="weather-info__info">
      <p>Overcast</p>
      <p>Feels Like: ${Math.floor(arrWeather.data[0].app_max_temp)}°</p>
      <p>Wind: ${Math.floor(arrWeather.data[0].wind_spd)} m/s</p>
      <p>Humidity: ${arrWeather.data[0].rh}%</p>
    </div>
  </div>`;

  let tempNextDays = '';
  for (let i = 1; i < arrWeather.data.length; i++) {
    const day = new Date(Date.parse(arrWeather.data[i].datetime)).getDay();

    tempNextDays += `<div class="next-day">
    <p class="next-day__day">${days[day]}</p>
    <p class="next-day__temperature">${Math.floor(arrWeather.data[i].temp)}°</p>
    <img class="next-day__icon" alt="" src="">
    </div>`;
  }

  today.innerHTML = tempToday;
  next.innerHTML = tempNextDays;
}

// document.querySelector('.arrow').addEventListener('click', () => {
//   const dropMenu = document.querySelector('.drop-menu');
//   console.log(dropMenu.classList.contains('hidden'))
//   if (dropMenu.classList.contains('hidden')) {
//     dropMenu.classList.remove('hidden');
//   } else {
//     dropMenu.classList.add('hidden');
//   }
// });

window.onload = () => {
  getCurrCords();
  // changeBackground();
}