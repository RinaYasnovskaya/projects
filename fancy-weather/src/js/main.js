import { changeBackground } from './changeBackground';
import { getCurrCords } from './getCurrCords';

export const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e2XB0R4kjwU';
// const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e0R4kjwU'; // wrong key for checking

export const geocoding = '54572f3240854bfdbe2c9dd0d9cbd15f';
export const weatherApiKey = 'd638f1c5cf184e38a9654b6b6bad7ccf';

export const numberError = ['401', '403', '404', '405', '406', '409', '411', '412', '413', '415', 
'416', '422', '423', '429', '500', '503', '504', '507', '509'];
export const mainQuery = 'weather';
export let lang = '';
export const unit = 'C';

let clickCount = 0;
document.querySelector('.arrow').addEventListener('click', () => {
  clickCount += 1;
  const dropMenu = document.querySelector('.drop-menu');
  if (clickCount === 1) {
    dropMenu.classList.remove('hidden');
  } else {
    clickCount = 0;
    dropMenu.classList.add('hidden');
  }
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

const saveLang = () => {
  sessionStorage.setItem('lang', lang);
}

const restoreLang = () => {
  if (sessionStorage.getItem('lang')) {
    lang = sessionStorage.getItem('lang');
    document.querySelector('.drop-menu__start-item').innerText = lang; 
    document.querySelectorAll('.drop-menu__item').forEach((item) => {
      item.classList.remove('unavailable');
      if (item.id !== lang) {
        item.classList.add('unavailable');
      }
    });
  } else {
    lang = 'en';
  }
};

document.querySelector('.drop-menu').addEventListener('click', (event) => {
  const startItem = document.querySelector('.drop-menu__start-item');
  startItem.innerText = event.target.id;

  document.querySelectorAll('.drop-menu__item').forEach((item) => {
    item.classList.remove('unavailable');
    if (event.target.id !== item.id) {
      item.classList.add('unavailable');
      document.querySelector('.drop-menu').classList.add('hidden');
    }
  });

  lang = event.target.id;
  saveLang();
})

window.onload = () => {
  getCurrCords();
  restoreLang();
  // changeBackground();
}