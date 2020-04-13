import { cards } from './js/cards'

const items = {
  elements: {
    burgerList: [],
  },
  properties: {
    checkBurger: true,
  },
}

const init = () => {
  items.elements.burgerList = document.querySelectorAll('.menu__item');
}
// Burger-menu 
document.querySelector('.burger__button').addEventListener('click', () => {
  document.querySelector('#burger__toggle').checked = items.checkBurger;
  items.checkBurger = !items.checkBurger;
});




window.onload = () => {
  init();
}