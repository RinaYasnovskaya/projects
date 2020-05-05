import { renderCards } from './renderCards';
import { startSwiper } from './startSwiper';
import { title } from './swiper';

export async function createCard() {
  const resultTemplate = await renderCards(title);
  document.querySelector('.swiper-wrapper').innerHTML = resultTemplate;
  renderCards()
    .then(() => {
      document.querySelector('.preloader').classList.add('preloader--hidden');
      document.querySelector('.preloader').classList.remove('preloader--visible');
    });
  startSwiper(title);
}
