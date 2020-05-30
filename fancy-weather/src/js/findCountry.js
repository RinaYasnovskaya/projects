import { changeInfo } from './changeInfo';
import { createMap } from './createMap';
import { changeWeatherInfo } from './changeWeatherInfo';
import { createFetch } from './createFetch';
import { createURLCountryOrCoords } from './createURLCountryOrCoords';
import { mainProperties } from './main';

export const findCountry = async () => {
  const str = document.querySelector('.search').value.trim();
  const strRes = str.replace(/,/g, ' ').replace(/\s+/g, ' ');
  const res = /\d\s/.test(strRes);
  const startValidCoords = -90;
  const endValidCoords = 90;
  const undefinedCoords = 0;
  const undefinedCoordsStr = '0';
  if (str && str !== undefinedCoordsStr) {
    if (res) {
      const resArr = str.split(' ').map(item => 
        +((item
          .replace(/[a-zа-я]/ig, '')
          .replace(/[*+?!`~;:%&^${}()_=#№@"|[\]\\]/g, ''))));

      mainProperties.setCoords(resArr[0], resArr[1]);
      if (resArr[1] === undefinedCoords || resArr[0] === undefinedCoords
        || !resArr[0] || !resArr[1]
        || (resArr[0] <= startValidCoords || resArr[0] >= endValidCoords
        || resArr[1] <= startValidCoords || resArr[1] >= endValidCoords)) {
        alert('Wrong coordinates! ');
        document.querySelector('.search').value = '';
      }
      else {
        doActions();
      }
    }
    else {
      const url = createURLCountryOrCoords(str);
      const result = await createFetch(url);
      const lat = result.results[0].geometry.lat;
      const lng = result.results[0].geometry.lng;
      mainProperties.setCoords(lat, lng);
      doActions();
    }
  }
  else {
    alert('Please enter name of city or coordinates');
  }
};

const doActions = () => {
  createMap();
  changeInfo();
  changeWeatherInfo();
  document.querySelector('.search').value = '';
}