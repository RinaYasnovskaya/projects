import { geocoding, mainProperties } from './main';

export const createURLCountryOrCoords = (value) => {
  const lang = mainProperties.getLang();
  
  if (typeof value === 'string') {
    return `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=${geocoding}&language=${lang}`;
  }
  else {
    const lat = value[0];
    const lng = value[1];
    return `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}
    &key=${geocoding}&language=${lang}`;
  }
};
