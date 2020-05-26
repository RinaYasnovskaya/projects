import { changeInfo } from './changeInfo';
import { createMap } from './createMap';
import { changeWeatherInfo } from "./changeWeatherInfo";

export const getCurrCords = () => {
  const success = (pos) => {
    const crd = pos.coords;
    // createMap(crd);
    // changeInfo(crd); 
    // changeWeatherInfo(crd);
  };

  const error = (err) => {
    alert('Please, enable geolocation');
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
};
