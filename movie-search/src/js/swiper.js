import '../../node_modules/swiper/css/swiper.min.css';
import { renderCards } from './renderCards';
import { startSwiper } from './startSwiper';
import './clearInput';
import { prevSlides } from './prevSlides';
// apikey = 23d60cc6

// global value
export let page = 1;
let title = 'dream';
const result = document.querySelector('.result');

async function createCard() {
  const resultTemplate = await renderCards(title);
  document.querySelector('.swiper-wrapper').innerHTML = resultTemplate;
  renderCards()
    .then(() => {
      document.querySelector('.preloader').classList.add('preloader--hidden');
      document.querySelector('.preloader').classList.remove('preloader--visible');
    });
  startSwiper(title);
}

document.querySelector('.search__button').addEventListener('click', async (event) => {
  event.preventDefault();
  title = document.querySelector('.search__input').value;
  const slider = document.querySelector('.swiper-container').swiper;
  if (title && title !== ' ') {
    result.innerText = '';
    page = 1;
    document.querySelector('.preloader').classList.remove('preloader--hidden');
    document.querySelector('.preloader').classList.add('preloader--visible');
    renderCards(title)
      .then((response) => {
        if(!response) {
          throw new Error;
        }
        return response;
      })
      .then((result) => {
        slider.removeAllSlides();
        slider.appendSlide(result);
      })
      .then(() => {
        document.querySelector('.preloader').classList.add('preloader--hidden');
        document.querySelector('.preloader').classList.remove('preloader--visible');
      })
      .catch((err) => {
        result.innerText = `No result for ${title}`;
        document.querySelector('.preloader').classList.add('preloader--hidden');
        document.querySelector('.preloader').classList.remove('preloader--visible');
      })
  } else {
    result.innerText = 'Please enter movie title';
  }
});

document.querySelector('.swiper-container').addEventListener('mousedown', async () => {
  console.log(title);
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
}); // TODO: add swipe in future

window.onload = () => {
  createCard();
};
