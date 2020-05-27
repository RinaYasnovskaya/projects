import { saveUnit } from './saveUnit';
import { mainProperties } from './main';
import { changeWeatherInfo } from './changeWeatherInfo';

export const changeUnit = () => {
  const fareng = document.querySelector('.button__fareng');
  const celc = document.querySelector('.button__celc');
  fareng.addEventListener('click', () => {
    if (fareng.classList.contains('unavailable')) {
      fareng.classList.remove('unavailable');
      celc.classList.add('unavailable');
      mainProperties.setUnit((fareng.innerText).slice(1));
      changeWeatherInfo();
    }
    saveUnit();
  });
  celc.addEventListener('click', () => {
    if (celc.classList.contains('unavailable')) {
      celc.classList.remove('unavailable');
      fareng.classList.add('unavailable');
      mainProperties.setUnit((celc.innerText).slice(1));
      changeWeatherInfo();
    }
    saveUnit();
  });
};
