import { changeInfo } from './changeInfo';
import { createMap } from './createMap';
import { changeWeatherInfo } from "./changeWeatherInfo";
import { mainProperties } from './main';
 
export const getCurrCords = () => {
  const success = (pos) => {
    mainProperties.setCoords(pos.coords.latitude, pos.coords.longitude);
    createMap();
    changeInfo(); 
    changeWeatherInfo();
  };

  const error = (err) => {
    alert('Please, enable geolocation');
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
};
