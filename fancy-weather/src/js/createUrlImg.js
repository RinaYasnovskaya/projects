import { mainProperties, accessKeyImg } from './main';

export const createUrlImg = () => {
  const mainQuery = mainProperties.getQueryWeather();
  const startURL = `https://api.unsplash.com/photos/random?page=1&query=${mainQuery}&client_id=${accessKeyImg}`;
  return startURL;
};
