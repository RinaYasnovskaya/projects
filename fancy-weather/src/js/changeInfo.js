import { getCountry } from "./getCountry";
import { mainProperties } from "./main";

export const changeInfo = async () => {
  const coords = mainProperties.getCoords();
  const resCountry = await getCountry(coords);
  console.log(resCountry);
  const blockInfoCords = document.querySelector('.map__info');
  const infoCountry = document.querySelector('.weather__location');
  const blockTimeStamp = document.querySelector('.weather__date');

  const lat = resCountry.results[0].annotations.DMS.lat;
  const lng = resCountry.results[0].annotations.DMS.lng;

  const city = resCountry.results[0].components.city;
  const country = resCountry.results[0].components.country;
  const timeStamp = resCountry.timestamp.created_http;

  const temp = `<p>Latitude: ${lat}</p>
  <p>Longitude: ${lng}</p>`;
  const tempCountry = `<span>${city}, ${country}</span>`;
  const tempTime = `<span>${timeStamp}</span>`;
  
  blockInfoCords.innerHTML = temp;
  infoCountry.innerHTML = tempCountry;
  blockTimeStamp.innerHTML = tempTime;
};