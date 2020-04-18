import { Card } from './Card';
import { items } from '../index';

export const generateCards = (cards) => {
  let allCards = [];
  cards.forEach((item) => {
    if (cards.indexOf(item) === +items.states.namePage) {
      item.forEach((elem) => {
        allCards.push(new Card(elem));
      });
    }
  });
  return allCards;
};
