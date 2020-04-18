import { newPage } from './newPage';
import { items } from '../index';
import { changeButtonGame } from "./changeElements";
import { createSound } from "./sounds";

export const createStar = (nameStar) => {
  let star = document.createElement('div');
  star.classList.add('stars__one');
  star.innerHTML = `<img src="../src/img/${nameStar}.svg">`;
  document.querySelector('.stars').append(star);
};

export const createSmile = (name, countError) => {
  let smileDiv = document.createElement('div');
  smileDiv.classList.add('result');
  smileDiv.innerHTML = `<p>${countError} errors</p><img src='./src/img/${name}.jpg'>`;
  document.querySelector('#innerVocabulary').append(smileDiv);
  createSound(`./src/audio/${name}.mp3`);
  items.states.namePage = 'main';
  setTimeout(() => {
    newPage('main');
    changeButtonGame();
  }, 2000);
};
