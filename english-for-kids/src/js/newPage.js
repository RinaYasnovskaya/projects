import { cards } from './cards';
import { switchState } from './switchState';
import { items, resetButton, sortAlphabet } from '../index';
import { generateTable } from "./generateTable";
import { generateCards } from "./generateCards";
import { generateButtons } from "./generateButtons";
import { getWrapper, changeButtonGame } from "./changeElements";
import { flipImg } from "./flipImg";
import { soundOn } from "./sounds";
import { countClickTrain } from "./countClicks";

export const newPage = (namePage) => {
  items.states.endGame = true;
  if (namePage === 'main') {
    items.elements.vocabulary.style.display = 'none';
    items.elements.main.style.display = 'block';
  }
  else {
    items.elements.vocabulary.style.display = 'block';
    items.elements.main.style.display = 'none';
  }
  items.elements.burgerList.forEach((elem) => {
    elem.classList.remove('active');
    if (namePage === elem.name) {
      elem.classList.add('active');
    }
  });
  if (items.states.namePage === 'statistic') {
    getWrapper('.stars');
    let localCards = JSON.parse(localStorage.getItem('cards'));
    getWrapper('#innerVocabulary');
    generateTable(localCards);
    generateButtons();
    resetButton();
  } else  {
    getWrapper('.stars');
    getWrapper('#innerVocabulary');
    generateCards(cards).forEach((elem) => {
      document.getElementById('innerVocabulary').append(elem.generateCard())
    });
    flipImg();
    switchState();
    soundOn();
    countClickTrain();
    changeButtonGame();
  } 
};
