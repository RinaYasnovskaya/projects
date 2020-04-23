import { items } from '../index';
import { getWrapper } from "./changeElements";
import { createSound } from "./sounds";
import { countClick } from "./countClicks";
import { createStar, createSmile } from "./createSymbols";

export const playGame = () => {
  let arrSounds = [];
  let step = 0, 
      countError = 0,
      startFlag = false;
  document.querySelectorAll('.voc-card').forEach((elem) => {
    if (elem.dataset.audio) {
      arrSounds.push(elem.dataset.audio);
    }
  });
  let shuffleArr = shuffle(arrSounds);
  document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('.button').innerHTML = '<img src="./src/img/repeat.svg">';
    document.querySelector('.button').classList.add('button-repeat');
    createSound(shuffleArr[step]);
    startFlag = true;
  });
  
  document.querySelectorAll('.voc-card').forEach((elem) => {
    elem.addEventListener('click', () => {
      if (shuffleArr[step] === elem.dataset.audio && startFlag) {
        countClick(elem.dataset.audio, 'correct');
        elem.classList.add('inactive');
        step++;
        createSound('./src/audio/correct.mp3');
        createStar('star-win');
        setTimeout(() => { createSound(shuffleArr[step]); }, 1000);
        if (step === arrSounds.length) {
          items.states.endGame = true;
          setTimeout(() => {
            getWrapper('.stars');
            getWrapper('#innerVocabulary');
            document.querySelector('.button').classList.add('hidden');
            if (countError <= 0) {
              createSmile("success", countError);
            }
            else {
              createSmile("failure", countError);
            }
          }, 1000);
        }
      }
      else {
        if (!elem.classList.contains('inactive') && startFlag) {
          countClick(shuffleArr[step], 'error');
          countError++;
          createSound('./src/audio/error.mp3');
          createStar('star');
        }
      }
    });
  });
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}