import { translateWords } from './translateWords';
import { daysOtherLang, infoOtherLang, nameOfPositionCoords, inputOtherLang } from './constantsForTranslation';

export const translateInfo = async (lang) => {
  const countryToTranslate = document.querySelector('[data-country]');
  const dateToTranslate = document.querySelector('[data-time]');
  const descriptionToTranslate = document.querySelector('[data-description]');

  const weatherInfoToTranslate = document.querySelectorAll('[data-weather]');
  const nextDayToTranslate = document.querySelectorAll('[data-day]');
  const posToTranslate = document.querySelectorAll('[data-pos]');
  const inputToTranslate = document.querySelector('.search');
  const button = document.querySelector('.search__button');

  const infoReady = infoOtherLang[lang];
  const dayReady = daysOtherLang[lang];
  const posReady = nameOfPositionCoords[lang];
  const inputReady = inputOtherLang[lang];

  const countryReady = await translateWords(countryToTranslate.textContent, lang);
  const dateReady = await translateWords(dateToTranslate.textContent, lang);
  const descriptionReady = await translateWords(descriptionToTranslate.textContent, lang);

  weatherInfoToTranslate.forEach((elem, index) => {
    elem.textContent = infoReady[index];
  });
  nextDayToTranslate.forEach((elem, index) => {
    elem.textContent = dayReady[index];
  });
  posToTranslate.forEach((elem, index) => {
    elem.textContent = posReady[index];
  })
  inputToTranslate.placeholder = inputReady[0];
  button.textContent = inputReady[1];
  countryToTranslate.textContent = countryReady;
  dateToTranslate.textContent = dateReady;
  descriptionToTranslate.textContent = descriptionReady;
};
