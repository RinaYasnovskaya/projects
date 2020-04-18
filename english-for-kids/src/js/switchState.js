import { playGame } from "./playGame";
// switch state imgs play\train
export const switchState = () => {
  if (document.querySelector('#switcher').checked) {
    document.querySelectorAll('.rotate, .card-name').forEach((elem) => {
      elem.classList.add('hidden');
    });
    document.querySelector('.button-start').classList.remove('hidden');
    document.querySelectorAll('.front').forEach((elem) => {
      elem.classList.add('cover');
    });
    playGame();
  }
  else {
    document.querySelectorAll('.rotate, .card-name').forEach((elem) => {
      elem.classList.remove('hidden');
    });
    document.querySelector('.button-start').classList.add('hidden');
    document.querySelectorAll('.front').forEach((elem) => {
      elem.classList.remove('cover');
    });
  }
};
