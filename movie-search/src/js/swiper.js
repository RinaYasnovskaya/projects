import '../../node_modules/swiper/css/swiper.min.css';
import { renderCards } from './renderCards';
import { startSwiper } from './startSwiper';
import './clearInput';
import { prevSlides } from './prevSlides';

// apikey = 23d60cc6
export let page = 1;
const result = document.querySelector('.result');

async function createCard(title) {
  const resultTemplate = await renderCards(title);
  document.querySelector('.swiper-wrapper').innerHTML = resultTemplate;
  nextSlides(title);
  renderCards()
    .then(() => {
      document.querySelector('.preloader').classList.add('preloader--hidden');
      document.querySelector('.preloader').classList.remove('preloader--visible');
    });
  startSwiper();
}

document.querySelector('.search__button').addEventListener('click', async (event) => {
  event.preventDefault();
  document.querySelector('.preloader').classList.remove('preloader--hidden');
  document.querySelector('.preloader').classList.add('preloader--visible');
  const title = document.querySelector('.search__input').value;
  const slider = document.querySelector('.swiper-container').swiper;
  if (title && title !== ' ') {
    result.innerText = '';
    page = 1
    slider.removeAllSlides();
    const innerTemp = await renderCards(title);
    slider.appendSlide(innerTemp);
    nextSlides(title);
    renderCards()
      .then(() => {
        document.querySelector('.preloader').classList.add('preloader--hidden');
        document.querySelector('.preloader').classList.remove('preloader--visible');
      });
  } 
  else {
    result.innerText = 'Please enter movie title';
  }
});

const nextSlides = (title) => {
  document.querySelector('.swiper-container').addEventListener('mousedown', async () => {
    result.innerText = '';
    const slider = document.querySelector('.swiper-container').swiper;
      if (slider.isEnd) {
        page += 1;
        try{
          const innerTemp = await renderCards(title);
          slider.appendSlide(innerTemp);
        }
        catch (err) {
          result.innerText = 'You have reached the end of the page';
          const disabledButton = document.querySelector('.swiper-button-disabled');
          disabledButton.style.pointerEvents = 'none';
          disabledButton.style.opacity = '.35';
        }
      }
      prevSlides();
  });
}; // TODO: add swipe in future

const preloader = () => {

}

window.onload = () => {
  createCard('dream');
};
