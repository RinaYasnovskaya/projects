import { cards } from './js/cards';
import { Card } from './js/Card';

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

// flip img
const flipImg = () => {
  document.querySelectorAll('.card-container').forEach(elem => {
    elem.addEventListener('click', (event) => {
      if (event.target.alt === 'rotate') {
        elem.classList.add('transform');
      }
    });
    elem.addEventListener('mouseleave', () => {
      elem.classList.remove('transform');
    });
  });  
}

// switch state imgs play\train
const switchState = () => {
  if (document.querySelector('#switcher').checked) {
    document.querySelectorAll('.rotate, .card-name').forEach((elem) => {
      elem.classList.add('hidden');
    });
    document.querySelector('.button-start').classList.remove('hidden');
    document.querySelectorAll('.front').forEach((elem) => {
      elem.classList.add('cover');
    });
  } else {
    document.querySelectorAll('.rotate, .card-name').forEach((elem) => {
      elem.classList.remove('hidden');
    });
    document.querySelector('.button-start').classList.add('hidden');
    document.querySelectorAll('.front').forEach((elem) => {
      elem.classList.remove('cover');
    });
  }
}

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
  if (items.states.namePage !== 'main') {
    generateCards(cards).forEach((elem) => [
      document.getElementById('innerVocabulary').append(elem.generateCard())
    ]);
    flipImg();
    switchState();
    soundOn();
    playGame();
  }
}

const generateCards = (cards) => {
  let wrapper = getWrapper('#innerVocabulary');
  let allCards = [];
  cards.forEach((item) => {
    if (cards.indexOf(item) === +items.states.namePage) {
      item.forEach((elem) => {
        allCards.push(new Card(elem));
      });
    }
  });
  return allCards;
}

// clear wrapper every time
const getWrapper = (nameWrap) => {
  const editWrap = document.querySelector(`${nameWrap}`);
  editWrap.innerHTML = '';
  return editWrap;
}

const soundOn = () => {
  document.querySelectorAll('.front').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      if (!document.querySelector('#switcher').checked) {
        createSound(event.target.closest(`.card-container`).dataset.audio);
      }
    });
  });
}

const createSound = (audioSrc) => {
  const audio = new Audio(audioSrc);
  audio.autoplay = true; 
}

const playGame = () => {
  let arrSounds = [];

  document.querySelectorAll('.card-container').forEach((elem) => {
    if (elem.dataset.audio) {
      arrSounds.push(elem.dataset.audio);
    }
  });

  let shuffleArr = shuffle(arrSounds);
  let step = 0,
      count = 0;

    document.querySelector('.button').addEventListener('click', () => {
      getWrapper('.button');
      document.querySelector('.button').innerHTML = '<img src="./src/img/rotate.svg">';
      document.querySelector('.button').classList.add('button-repeat');
      createSound(shuffleArr[step]);
    });
    
    document.querySelectorAll('.card-container').forEach((elem) => {
      elem.addEventListener('click', () => {
        if(shuffleArr[step] === elem.dataset.audio) {
          elem.classList.add('inactive');
          step++;
          createSound('./src/audio/correct.mp3');
          createStar('star-win');
          
          setTimeout(() => {createSound(shuffleArr[step]);}, 1000);
        } else {
          if (!elem.classList.contains('inactive')) {
            createSound('./src/audio/error.mp3');
            createStar('star');
          }
        }
      })
    });
}

const createStar = (nameStar) => {
  let star = document.createElement('div');
  star.classList.add('stars__one');
  star.innerHTML = `<img src="../src/img/${nameStar}.svg">`;
  document.querySelector('.stars').append(star);
}

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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