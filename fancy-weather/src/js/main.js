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

export const numberError = '401';
export const mainQuery = 'weather';

export const getCountry =  async (coords) => {
  const lat = coords.latitude;
  const lng = coords.longitude;
  const fetchCoords = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${geocoding}`);
  const resCoords = await fetchCoords.json();
  
  return resCoords;
}

window.onload = () => {
  getCurrCords();
  // changeBackground();
}