import { switchState } from './js/switchState';
import { newPage } from './js/newPage';

export const items = {
  elements: {
    burgerList: [],
    main: null,
    vocabulary: null, 
    mainCategoryList: [],
  },
  states: {
    checkBurger: true,
    namePage: 'main',
    checkToggle: true,
    endGame: false,
  },
}
const colorTrain = '#473764';
const colorPlay = '#E86007';

// change style for all when we switch toggle 
document.querySelector('.switcher').addEventListener('click', () => {
  switchState();
  if (document.querySelector('#switcher').checked) {
    document.querySelector('.menu').style.backgroundColor = `${colorTrain}`;
    document.querySelectorAll('.info').forEach((elem) => {
      elem.style.backgroundColor = `${colorTrain}`;
    });
  } else {
    document.querySelector('.menu').style.backgroundColor = `${colorPlay}`;
    document.querySelectorAll('.info').forEach((elem) => {
      elem.style.backgroundColor = `${colorPlay}`;
    });
  }
});

// change state when we click on burger span
document.addEventListener('click',  () => {
  if (document.querySelector('#burger__toggle').checked) {
    document.querySelector('#burger__toggle').checked = !items.states.checkBurger;
    items.states.checkBurger = !items.states.checkBurger;
  }
  document.querySelector('.burger__button').addEventListener('click', () => {
    document.querySelector('#burger__toggle').checked = items.states.checkBurger;
    items.states.checkBurger = !items.states.checkBurger;
  });
})

// create new page when we click on burger links
document.querySelector('.menu').addEventListener('click', (event) => {
  items.elements.burgerList.forEach((elem) => {
    if (elem.name === event.target.name) {
      document.querySelector('#burger__toggle').checked = items.states.checkBurger;
      items.states.namePage = event.target.name
      newPage(items.states.namePage);
    }
  });
});

// create new page when we click on main page links
const menuLinks = () => {
  items.elements.main.addEventListener('click', (event) => {
    if (event.target.name) {
      items.states.namePage = event.target.name;
      newPage(items.states.namePage);
    }
  });
}

const init = () => {
  items.elements.burgerList = document.querySelectorAll('.menu__item');
  items.elements.main = document.getElementById('main');
  items.elements.vocabulary = document.getElementById('vocabulary');
  items.elements.mainCategoryList = document.getElementsByClassName('list');

  newPage(items.states.namePage);
  menuLinks();

  // localStorage.setItem('cards', JSON.stringify(cards));
  // let rr = JSON.parse(localStorage.getItem('cards'));
  // console.log(rr);
}

window.onload = () => {
  init();
}