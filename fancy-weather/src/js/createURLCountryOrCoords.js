import { geocoding, mainProperties } from './main';

export const createURLCountryOrCoords = (value) => {
  const lang = mainProperties.getLang();
  
  if (typeof value === 'string') {
    return `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=${geocoding}&language=${lang}`;
  }
  else {
    const lat = value.latitude;
    const lng = value.longitude;
    return `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}
    &key=${geocoding}&language=${lang}`;
  }
};
