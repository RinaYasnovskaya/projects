import { cards } from './cards';
import { items } from '../index';

export const countClickTrain = () => {
  document.querySelectorAll('.voc-card').forEach((item) => {
    item.addEventListener('click', () => {
      if (!document.querySelector('#switcher').checked) {
        countClick(item.dataset.audio, 'train');
      }
    });
  });
};
export const countClick = (src, nameParam) => {
  for (let i = 0; i < cards.length; i++) {
    if (src === cards[items.states.namePage][i]['audioSrc']) {
      cards[items.states.namePage][i][`${nameParam}`] += 1;
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  }
};
