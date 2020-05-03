import '../../node_modules/swiper/css/swiper.min.css';
import { renderCards } from './renderCards';
import { startSwiper } from './startSwiper';
import './clearInput';

// apikey = 23d60cc6
export let page = 1;

async function createCard(title) {
  const resultTemplate = await renderCards(title);
  document.querySelector('.swiper-wrapper').innerHTML = resultTemplate;
  nextSlides(title);
  startSwiper();
}

document.querySelector('.search__button').addEventListener('click', async (event) => {
  event.preventDefault();
  page = 1;
  const title = document.querySelector('.search__input').value;
  const slider = document.querySelector('.swiper-container').swiper;
  if (title) {
    slider.removeAllSlides();
    const innerTemp = await renderCards(title);
    slider.appendSlide(innerTemp);
    nextSlides(title);
  }
});

const nextSlides = (title) => {
  document.querySelector('.swiper-button-next').addEventListener('click', async () => {
    const slider = document.querySelector('.swiper-container').swiper;
    if (slider.isEnd) {
      page += 1;
      const innerTemp = await renderCards(title);
      slider.appendSlide(innerTemp);
    }
  });
};

window.onload = () => {
  createCard('dream');

};
