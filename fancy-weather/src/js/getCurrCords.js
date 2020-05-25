import { changeInfo } from './changeInfo';
import { createMap } from './createMap';

export const getCurrCords = () => {
  const success = (pos) => {
    const crd = pos.coords;
    createMap(crd);
    changeInfo(crd);    
  };

  const error = (err) => {
    alert('Please, enable geolocation');
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
};
