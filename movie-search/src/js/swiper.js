import '../../node_modules/swiper/css/swiper.min.css';
import { renderCards } from './renderCards';
import './clearInput';
import { createCard } from './createCard';
import { showPreloader } from './showPreloader';
import { hidePreload } from './hidePreload';
import { giveMovieResult } from './giveMovieResult';
import { translateWord } from './translateWord';
import './clickNextButton';
import './swipeSlides';
import { stateButton } from './stateButton';
import './updateSwiper';

export const apikey = '231f8e38';
export let page = 1;
export let title = 'dream';
export const result = document.querySelector('.result');
const MOVIE_NOT_FOUND_ERROR = 'Movie not found!';
const FIRST_SLIDE = 0;

document.querySelector('.search__button').addEventListener('click', async (event) => {
  event.preventDefault();

  const firstTitle = document.querySelector('.search__input').value;
  const slider = document.querySelector('.swiper-container').swiper;

  document.querySelector('.swiper-button-next').style.display = 'block';

  if (firstTitle && firstTitle !== ' ') {
    const jsonTitle = await translateWord(firstTitle);
    title = (/^[0-9]+$/ig.test(firstTitle)) ? firstTitle : jsonTitle;

    result.innerText = '';
    page = 1;

    showPreloader();
    const resArray = await giveMovieResult();

    if (!resArray.Error) {
      const resTemp = await renderCards(resArray);
      if (/^[а-яё]+$/ig.test(firstTitle)) {
        result.innerText = `Showing results for ${title}`;
      }
      slider.removeAllSlides();
      slider.appendSlide(resTemp);
      hidePreload();
      slider.slideTo(FIRST_SLIDE);
    } else {
      if (resArray.Error === MOVIE_NOT_FOUND_ERROR) {
        result.innerText = `No results were found for ${title}`;
      } else {
        result.innerText = resArray.Error;
      }
      hidePreload();
    }
  } else {
    result.innerText = '';
    result.innerText = 'Please enter movie title';
  }
});

export const innerActions = async (slider) => {
  if (slider.isEnd) {
    page += 1;
    stateButton('block', 'none');
    try{
      const resArray = await giveMovieResult();
      const resTemp = await renderCards(resArray);
      slider.appendSlide(resTemp);
      slider.slideNext();
      stateButton('none', 'block');
    } catch(err) {
      result.innerText = 'You have reached the end of the page';
      stateButton('none', 'block');
    }
  }
}

window.onload = () => {
  createCard();
};


