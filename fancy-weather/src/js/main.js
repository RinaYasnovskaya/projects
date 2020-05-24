import { changeBackground } from './changeBackground';
import { getCurrCords } from './getCurrCords';

export const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e2XB0R4kjwU';
// const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e0R4kjwU';

// access key geolocation = 5dbc5a39979b10
// запрос https://ipinfo.io/json?token=СЮДА_ТОКЕН

// access key maps = pk.eyJ1IjoicmluYS1yaW5hIiwiYSI6ImNrYWwwZzVrYzA3OXAyeW15M2hlYWw0MHIifQ.Ql70vmV_Oxw2Zz1U96m04Q

export const numberError = '401';
export const mainQuery = 'weather';

window.onload = () => {
  console.log(getCurrCords());
  // changeBackground();
}