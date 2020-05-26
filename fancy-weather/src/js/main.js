import { changeBackground } from './changeBackground';
import { getCurrCords } from './getCurrCords';

export const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e2XB0R4kjwU';
// const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e0R4kjwU'; // wrong key for checking

export const geocoding = '54572f3240854bfdbe2c9dd0d9cbd15f';
export const weatherApiKey = 'd638f1c5cf184e38a9654b6b6bad7ccf';

export const numberError = '401';
export const mainQuery = 'weather';
export const lang = 'en';
export const unit = 'C';

document.querySelector('.arrow').addEventListener('click', () => {
  const dropMenu = document.querySelector('.drop-menu');
  console.log(dropMenu.classList.contains('hidden'))
  if (dropMenu.classList.contains('hidden')) {
    dropMenu.classList.remove('hidden');
  } 
  // else {
  //   dropMenu.classList.add('hidden');
  // }
});

document.querySelector('.button-change').addEventListener('click', (event) => {
  document.querySelector('body').style = '';
  const buttonChange = document.querySelector('.change');
  buttonChange.classList.add('rotate');
  changeBackground();
  setTimeout(() => {
    buttonChange.classList.remove('rotate');
  }, 1000);
});

window.onload = () => {
  getCurrCords();
  // changeBackground();
}