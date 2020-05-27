import { mainProperties } from './main';

export const restoreLang = () => {
  console.log(localStorage);
  if (localStorage.getItem('lang')) {
    mainProperties.setLang(localStorage.getItem('lang'));
    const lang = mainProperties.getLang();
    document.querySelector('.drop-menu__start-item').innerText = lang;
    document.querySelectorAll('.drop-menu__item').forEach((item) => {
      item.classList.remove('unavailable');
      if (item.id !== lang) {
        item.classList.add('unavailable');
      }
    });
  }
  if (localStorage.getItem('unit')) {
    mainProperties.setUnit(localStorage.getItem('unit'));
    const unit = mainProperties.getUnit();
    const fareng = document.querySelector('.button__fareng');
    const celc = document.querySelector('.button__celc');
    fareng.classList.remove('unavailable');
    celc.classList.remove('unavailable');
    if (unit === (fareng.innerText).slice(1)) {
      celc.classList.add('unavailable');
    }
    else {
      fareng.classList.add('unavailable');
    }
  }
};
