import { createImgWeatherIcon } from "./createImgWeatherIcon";
import { getWeather } from "./getWeather";
import { mainProperties} from "./main";
import { changeBackground } from './changeBackground';
import { translateWords } from './translateWords';
import { daysOtherLang, infoOtherLang } from './constantsForTranslation';

export const changeWeatherInfo = async () => {
  const coords = mainProperties.getCoords();
  const currLang = mainProperties.getLang();
  const arrWeather = await getWeather(coords);
  if (arrWeather) { 
    const today = document.querySelector('.weather__today-info');
    const next = document.querySelector('.weather__next');
    today.innerHTML = '';
    next.innerHTML = '';
    const iconMainURL = createImgWeatherIcon(arrWeather.data[0].weather.icon);
    mainProperties.setQueryWeather(arrWeather.data[0].weather.description);
    const readyArr = infoOtherLang[currLang];
    const descr = arrWeather.data[0].weather.description;
    
    let descrInfoTranslate = await translateWords(descr, currLang);

    const tempToday = `<div class="weather__temperature">
      <span>${Math.floor(arrWeather.data[0].temp)}</span>
    </div>
    <div class="weather-info">
      <div class="weather-info__icon">
        <img alt="" src="${iconMainURL}">
      </div>
      <div class="weather-info__info">
        <p data-description>${descrInfoTranslate}</p>
        <p><span data-weather>${readyArr[0]}</span>: ${Math.floor(arrWeather.data[0].app_max_temp)}°</p>
        <p><span data-weather>${readyArr[1]}</span>: 
        ${Math.floor(arrWeather.data[0].wind_spd)} <span data-weather>${readyArr[2]}</span></p>
        <p><span data-weather>${readyArr[3]}</span>: ${arrWeather.data[0].rh}%</p>
      </div>
    </div>`;

    let tempNextDays = '';
    let arrDays = daysOtherLang[currLang];
    for (let i = 1; i < arrWeather.data.length; i++) {
      const iconNextURL = createImgWeatherIcon(arrWeather.data[i].weather.icon);
      const day = new Date(Date.parse(arrWeather.data[i].datetime)).getDay();
      tempNextDays += `<div class="next-day">
      <p class="next-day__day" data-day>${arrDays[day]}</p> 
      <p class="next-day__temperature">${Math.floor(arrWeather.data[i].temp)}°</p>
      <img class="next-day__icon" alt="" src="${iconNextURL}">
      </div>`;
    }

    today.innerHTML = tempToday;
    next.innerHTML = tempNextDays;
  }

  changeBackground();
};
