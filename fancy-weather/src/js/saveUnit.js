import { mainProperties } from './main';

export const saveUnit = () => {
  const unit = mainProperties.getUnit();
  localStorage.setItem('unit', unit);
};
