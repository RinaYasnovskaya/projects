import { mainProperties } from './main';
import { changeInfo } from './changeInfo';

export const saveLang = () => {
  const lang = mainProperties.getLang();
  localStorage.setItem('lang', lang);
};
