import { mainProperties } from './main';

export const saveLang = () => {
  const lang = mainProperties.getLang();
  localStorage.setItem('lang', lang);
};
