// import { cards } from './js/cards'

const items = {
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
  },
}

// show new page (main or category)
const newPage = (namePage) => {
  if (namePage === 'main') {
    items.elements.vocabulary.style.display = 'none';
    items.elements.main.style.display = 'block';
  } else {
    items.elements.vocabulary.style.display = 'block';
    items.elements.main.style.display = 'none';
  }
  items.elements.burgerList.forEach((elem) => {
    elem.classList.remove('active');
    if (namePage === elem.name) {
      elem.classList.add('active');
    }
  });
}

// switch toggle
document.querySelector('.switcher').addEventListener('click', () => {
  switchState();
  if (document.querySelector('#switcher').checked) {
    document.querySelector('.menu').style.backgroundColor = "#473764";
    document.querySelectorAll('.info').forEach((elem) => {
      elem.style.backgroundColor = "#473764";
    });
  } else {
    document.querySelector('.menu').style.backgroundColor = "#E86007";
    document.querySelectorAll('.info').forEach((elem) => {
      elem.style.backgroundColor = "#E86007";
    });
  }
});

// switch state imgs
const switchState = () => {
  if (document.querySelector('#switcher').checked) {
    document.querySelectorAll('.rotate, .card-name').forEach((elem) => {
      elem.classList.add('hidden');
    });
    document.querySelector('.button-start').classList.remove('hidden');
    document.querySelectorAll('.front').forEach((elem) => {
      elem.style.backgroundSize = 'cover';
    });
  } else {
    document.querySelectorAll('.rotate, .card-name').forEach((elem) => {
      elem.classList.remove('hidden');
    });
    document.querySelector('.button-start').classList.add('hidden');
    document.querySelectorAll('.front').forEach((elem) => {
      elem.style.backgroundSize = 'contain';
    });
  }
}

// Burger-menu 
document.querySelector('.burger__button').addEventListener('click', () => {
  document.querySelector('#burger__toggle').checked = items.states.checkBurger;
  items.states.checkBurger = !items.states.checkBurger;
});

// Burger links
document.querySelector('.menu').addEventListener('click', (event) => {
  
  items.elements.burgerList.forEach((elem) => {
    if (elem.name === event.target.name) {
      document.querySelector('#burger__toggle').checked = items.states.checkBurger;
    }
  });
  items.states.namePage = event.target.name;
  newPage(items.states.namePage);
});

// menu links
const menuLinks = () => {
  items.elements.main.addEventListener('click', (event) => {
    items.states.namePage = event.target.name;
    newPage(items.states.namePage);
  });
}

const init = () => {
  items.elements.burgerList = document.querySelectorAll('.menu__item');
  items.elements.main = document.getElementById('main');
  items.elements.vocabulary = document.getElementById('vocabulary');
  items.elements.mainCategoryList = document.getElementsByClassName('list');

  newPage(items.states.namePage);
  menuLinks();
}


window.onload = () => {
  init();
  
}