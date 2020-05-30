import { getCountry } from "./getCountry";
import { mainProperties } from "./main";
import { translateWords } from "./translateWords";
import { nameOfPositionCoords, inputOtherLang } from "./constantsForTranslation";

export const changeInfo = async () => {
  const coords = mainProperties.getCoords();
  console.log(coords);
  const resCountry = await getCountry(coords);
  if (resCountry) {
    const curLang = mainProperties.getLang();
    const blockInfoCords = document.querySelector('.map__info');
    const infoCountry = document.querySelector('.weather__location');
    const blockTimeStamp = document.querySelector('.weather__date');

    const lat = resCountry.results[0].annotations.DMS.lat;
    const lng = resCountry.results[0].annotations.DMS.lng;

    const city = resCountry.results[0].components.city || resCountry.results[0].components.town;
    const country = resCountry.results[0].components.country;
    const timeStamp = resCountry.timestamp.created_http;

    const posOnLang = nameOfPositionCoords[curLang];
    const inputPlaceholder = inputOtherLang[curLang];

    const timeNow = await translateWords(timeStamp, curLang);

    const temp = `<p><span data-pos>${posOnLang[0]}</span>: ${lat}</p>
    <p><span data-pos>${posOnLang[1]}</span>: ${lng}</p>`;
    const tempCountry = `<span data-country>${city}, ${country}</span>`;
    const tempTime = `<span data-time>${timeNow}</span>`;

    document.querySelector('.search').placeholder = inputPlaceholder;
    blockInfoCords.innerHTML = temp;
    infoCountry.innerHTML = tempCountry;
    blockTimeStamp.innerHTML = tempTime;
  }
};