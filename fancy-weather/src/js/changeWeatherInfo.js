import { createImgWeatherIcon } from "./createImgWeatherIcon";
import { getWeather } from "./getWeather";
import { mainProperties } from "./main";

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

export const changeWeatherInfo = async () => {
  const coords = mainProperties.getCoords();
  const arrWeather = await getWeather(coords);
  const today = document.querySelector('.weather__today-info');
  const next = document.querySelector('.weather__next');
  today.innerHTML = '';
  next.innerHTML = '';
  const iconMainURL = createImgWeatherIcon(arrWeather.data[0].weather.icon);

  const tempToday = `<div class="weather__temperature">
    <span>${Math.floor(arrWeather.data[0].temp)}</span>
  </div>
  <div class="weather-info">
    <div class="weather-info__icon">
      <img alt="" src="${iconMainURL}">
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
    const iconNextURL = createImgWeatherIcon(arrWeather.data[i].weather.icon);
    const day = new Date(Date.parse(arrWeather.data[i].datetime)).getDay();
    tempNextDays += `<div class="next-day">
    <p class="next-day__day">${days[day]}</p>
    <p class="next-day__temperature">${Math.floor(arrWeather.data[i].temp)}°</p>
    <img class="next-day__icon" alt="" src="${iconNextURL}">
    </div>`;
  }
  today.innerHTML = tempToday;
  next.innerHTML = tempNextDays;
};
