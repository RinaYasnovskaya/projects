import { createFetch } from './createFetch';
import { weatherApiKey, mainProperties} from './main';

export const getWeather = async (coords) => {
  const lat = coords.latitude;
  const lng = coords.longitude;
  const lang = mainProperties.getLang();
  const unit = mainProperties.getUnit();
  const fetchWeather = `https://api.weatherbit.io/v2.0/forecast/daily?key=${weatherApiKey}&lang=${lang}
  &units=${unit}&days=4&&lat=${lat}&lon=${lng}`;
  
  const resWeather = await createFetch(fetchWeather);
  console.log(resWeather);
  return resWeather;
};
