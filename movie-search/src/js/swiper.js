import '../../node_modules/swiper/css/swiper.min.css';
import { renderCards } from './renderCards';
import './clearInput';
import { prevSlides } from './prevSlides';
import { createCard } from './createCard';
import { showPreloader } from './showPreloader';
import { hidePreload } from './hidePreload';
// apikey imd = 23d60cc6
const yandApiKey = 'trnsl.1.1.20200504T183529Z.cb3603e3ad5a2564.ae17d80755908eb850c5ec74d22ce14e1532b491';

// global value
export let page = 1;
export let title = 'dream';
const result = document.querySelector('.result');
let countCLick = 0;

document.querySelector('.search__button').addEventListener('click', async (event) => {
  event.preventDefault();
  const firstTitle = document.querySelector('.search__input').value;
  const slider = document.querySelector('.swiper-container').swiper;

  if (firstTitle && firstTitle !== ' ') {
    const translateTitle = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandApiKey}
  &text=${firstTitle}&lang=ru-en`);
    const jsonTitle = await translateTitle.json();

    title = jsonTitle.text[0];
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

document.querySelector('.swiper-container').addEventListener('mousedown', async () => {
  result.innerText = '';
  const slider = document.querySelector('.swiper-container').swiper;
    if (slider.isEnd) {
      page += 1;
      if(countCLick < 3) {
        renderCards(title)
        .then((resp) => {
          return resp;
        })
        .then((response) => {
          slider.appendSlide(response);
        })
        .then(() => {
          document.querySelector('.swiper-button-next').style.display = 'block';
        })
        .catch((err) => {
          result.innerText = 'You have reached the end of the page';
          const disabledButton = document.querySelector('.swiper-button-disabled');
          disabledButton.style.pointerEvents = 'none';
          disabledButton.style.opacity = '.35';
        })
      } else {
        document.querySelector('.swiper-button-next').style.display = 'none';
        countCLick = 0;
      }
      
    }
    prevSlides();
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  const slider = document.querySelector('.swiper-container').swiper;
  if (slider.isEnd) { 
    countCLick += 1;
  }
});


window.onload = () => {
  createCard();
};
