import '../../node_modules/swiper/css/swiper.min.css';
import { renderCards } from './renderCards';
import { startSwiper } from './startSwiper';

// apikey = 23d60cc6
export let page = 1;

async function createCard(title) {
  const resultTemplate = await renderCards(title);
  document.querySelector('.swiper-wrapper').innerHTML = resultTemplate;
  startSwiper();
}

async function nextSlides(title) {
  const resultTemplate = await renderCards(title);
  return resultTemplate;
}

document.querySelector('.search__button').addEventListener('click', async (event) => {
  event.preventDefault();
  page = 1;
  const title = document.querySelector('.search__input').value;
  const slider = document.querySelector('.swiper-container').swiper;
  slider.removeAllSlides();
  const innerTemp = await nextSlides(title);

  slider.appendSlide(innerTemp);
});

window.onload = () => {
  createCard('dream');
};
