import '../../node_modules/swiper/css/swiper.min.css';
import { renderCards } from './renderCards';
import './clearInput';
import { prevSlides } from './prevSlides';
import { createCard } from './createCard';
import { showPreloader } from './showPreloader';
import { hidePreload } from './hidePreload';
// apikey imd = 231f8e38
const yandApiKey = 'trnsl.1.1.20200504T183529Z.cb3603e3ad5a2564.ae17d80755908eb850c5ec74d22ce14e1532b491';

// global value
export let page = 1;
export let title = 'dream';
const result = document.querySelector('.result');

document.querySelector('.search__button').addEventListener('click', async (event) => {
  event.preventDefault();
  const firstTitle = document.querySelector('.search__input').value;
  const slider = document.querySelector('.swiper-container').swiper;
  document.querySelector('.swiper-button-next').style.display = 'block';
  if (firstTitle && firstTitle !== ' ') {
    const translateTitle = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandApiKey}
  &text=${firstTitle}&lang=ru-en`);
    const jsonTitle = await translateTitle.json();

    title = (/^[0-9]+$/ig.test(firstTitle)) ? firstTitle : jsonTitle.text[0];
    result.innerText = '';
    page = 1;
    showPreloader();
    renderCards(title)
      .then((response) => {
        if(!response) {
          throw new Error;
        }
        if (/^[а-яё]+$/ig.test(firstTitle)) {
          result.innerText = `Showing results for ${title}`;
        }
        return response;
      })
      .then((result) => {
        slider.removeAllSlides();
        slider.appendSlide(result);
      })
      .then(() => {
        hidePreload();
        slider.slideTo(0);
      })
      .catch((err) => {
        result.innerText = `No result for ${title}`;
        hidePreload();
      })
  } else {
    result.innerText = '';
    result.innerText = 'Please enter movie title';
  }
});

document.querySelector('.swiper-button-next').addEventListener('click', async () => {
  result.innerText = '';
  const slider = document.querySelector('.swiper-container').swiper;
  innerActions(slider);
  prevSlides();
});

document.querySelector('.swiper-container').addEventListener('mousedown', (event) => {
  const slider = document.querySelector('.swiper-container').swiper;
  innerActions(slider);
});

const innerActions = async (slider) => {
  if (slider.isEnd) {
    page += 1;
    document.querySelector('.wait').style.display = 'block';
    document.querySelector('.swiper-button-next').style.display = 'none';
    try{
      const resTemp = await renderCards(title);
      slider.appendSlide(resTemp);
      slider.slideNext();
      document.querySelector('.swiper-button-next').style.display = 'block';
      document.querySelector('.wait').style.display = 'none';
    } catch(err) {
      result.innerText = 'You have reached the end of the page';
      document.querySelector('.wait').style.display = 'none';
    }
  }
}

window.onload = () => {
  createCard();
};
