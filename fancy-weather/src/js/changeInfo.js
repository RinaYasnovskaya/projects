import { getCountry } from './main';

export const changeInfo = async (cord) => {
  const resCountry = await getCountry(cord);
  console.log(resCountry);

  const blockInfoCords = document.querySelector('.map__info');
  const infoCountry = document.querySelector('.weather__location');

  blockInfoCords.innerHTML = '';
  infoCountry.innerHTML = '';

  const lat = resCountry.results[0].annotations.DMS.lat;
  const lng = resCountry.results[0].annotations.DMS.lng;

  const city = resCountry.results[0].components.city;
  const country = resCountry.results[0].components.country;

  const temp = `<p>Latitude: ${lat}</p>
  <p>Longitude: ${lng}</p>`;
  const tempCountry = `<span>${city}, ${country}</span>`;
  
  blockInfoCords.innerHTML = temp;
  infoCountry.innerHTML = tempCountry;
};
