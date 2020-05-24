import { changeInfoCords } from './changeInfoCords';
import { createMap } from './createMap';

export const getCurrCords = () => {
  const success = (pos) => {
    const crd = pos.coords;
    createMap(crd);
    changeInfoCords(crd);
  };

  const error = (err) => {
    alert('Please, enable geolocation');
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
};
