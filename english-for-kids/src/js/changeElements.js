import { items } from '../index';

// clear wrapper every time
export const getWrapper = (nameWrap) => {
  const editWrap = document.querySelector(`${nameWrap}`);
  editWrap.innerHTML = '';
  return editWrap;
};

export const changeButtonGame = () => {
  getWrapper('.button');
  document.querySelector('.button').textContent = 'Start Game';
  document.querySelector('.button').classList.remove('button-repeat');
  document.querySelector('.button').classList.remove('hidden');
  items.states.endGame = false;
};
