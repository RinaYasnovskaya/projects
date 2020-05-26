import { days } from './main';
import { getWeather } from "./getWeather";

export const changeWeatherInfo = async (coords) => {
  const arrWeather = await getWeather(coords);
  const today = document.querySelector('.weather__today-info');
  const next = document.querySelector('.weather__next');
  today.innerHTML = '';
  next.innerHTML = '';
  const tempToday = `<div class="weather__temperature">
    <span>${Math.floor(arrWeather.data[0].temp)}</span>
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
};
