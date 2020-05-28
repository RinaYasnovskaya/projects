import { changeBackground } from './changeBackground';
import { getCurrCords } from './getCurrCords';
import { saveLang } from './saveLang';
import { restoreLang } from './restoreLang';
import { changeUnit } from './changeUnit';
import { changeInfo } from './changeInfo';
import { createMap } from './createMap';
import { changeWeatherInfo } from './changeWeatherInfo';
import { createFetch } from './createFetch';
import { createURLCountryOrCoords } from './createURLCountryOrCoords';

export const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e2XB0R4kjwU';
// const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e0R4kjwU'; // wrong key for checking

export const geocoding = '54572f3240854bfdbe2c9dd0d9cbd15f';
export const weatherApiKey = 'd638f1c5cf184e38a9654b6b6bad7ccf';

export const mainProperties = {
  langs: 'en',
  unit: 'C',
  mainQuery: 'weather',
  coordsLat: null,
  coordsLng: null,

  setLang(langValue) {
    this.langs = langValue;
  },
  getLang() {
    return this.langs;
  },

  setUnit(unitValue) {
    this.unit = unitValue;
  },
  getUnit() {
    return this.unit;
  },

  setQueryWeather(weatherValue) {
    this.mainQuery = weatherValue;
  },
  getQueryWeather() {
    return this.mainQuery;
  },

  setCoords(latValue, lngValue) {
    this.coordsLat = latValue;
    this.coordsLng = lngValue;
  },
  getCoords() {
    return [this.coordsLat, this.coordsLng];
  }
}

document.querySelector('.arrow').addEventListener('click', () => {
  const dropMenu = document.querySelector('.drop-menu');
  if (dropMenu.classList.contains('hidden')) {
    dropMenu.classList.remove('hidden');
  }
  else {
    dropMenu.classList.add('hidden');
  }
});

document.querySelector('.button-change').addEventListener('click', (event) => {
  document.querySelector('body').style = '';
  const buttonChange = document.querySelector('.change');
  buttonChange.classList.add('rotate');
  changeBackground();
  setTimeout(() => {
    buttonChange.classList.remove('rotate');
  }, 1000);
});

document.querySelector('.drop-menu').addEventListener('click', (event) => {
  const startItem = document.querySelector('.drop-menu__start-item');
  startItem.innerText = event.target.id;

  document.querySelectorAll('.drop-menu__item').forEach((item) => {
    item.classList.remove('unavailable');
    if (event.target.id !== item.id) {
      item.classList.add('unavailable');
      document.querySelector('.drop-menu').classList.add('hidden');
    }
  });
  mainProperties.setLang(event.target.id);
  saveLang();
})

document.querySelectorAll('.drop-menu__item').forEach((item) => {
  item.addEventListener('click', () => {
  });
})

const findCountry = async () => {
  const str = document.querySelector('.search').value.trim();
  const strRes = str.replace(/,/g, ' ').replace(/\s+/g, ' ');
  const res = /\d\s/.test(strRes);
  const startValidCoords = -90;
  const endValidCoords = 90;
  if (str) {
    if (res) {
      const resArr = str.split(' ').map(item => +((item.replace(/[a-zа-я]/ig, '').replace(/[*+?%&^${}()|[\]\\]/g, ''))));

      mainProperties.setCoords(resArr[0], resArr[1]);
      if (resArr[0] <= startValidCoords || resArr[0] >= endValidCoords 
        || resArr[1] <= startValidCoords || resArr[1] >= endValidCoords) {
        alert('Wrong coordinates! ');
        document.querySelector('.search').value = '';
      }
      else{
        createMap();
        changeInfo(); 
        changeWeatherInfo();
        document.querySelector('.search').value = '';
      }
    } else {
      const url = createURLCountryOrCoords(str);
      const result = await createFetch(url);
      const lat = result.results[0].geometry.lat;
      const lng = result.results[0].geometry.lng;
      mainProperties.setCoords(lat, lng);
      createMap();
      changeInfo(); 
      changeWeatherInfo();
      document.querySelector('.search').value = '';
    }
  } else {
    alert('Please enter name of city or coordinates');
  }
}

document.querySelector('.search__button').addEventListener('click', () => {
  findCountry();
});
document.querySelector('.search').addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    findCountry();
  }
});

window.onload = () => {
  changeUnit();
  getCurrCords();
  restoreLang();
  // changeBackground();
}