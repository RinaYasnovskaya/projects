import { renderCards } from './renderCards';
import { startSwiper } from './startSwiper';
import { title, page, apikey } from './swiper';

export const createCard = async() => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&page=${page}&s=${title}`);
  const resArray = await response.json();
  const resultTemplate = await renderCards(resArray);

  document.querySelector('.swiper-wrapper').innerHTML = resultTemplate;

  document.querySelector('.preloader').classList.add('preloader--hidden');
  document.querySelector('.preloader').classList.remove('preloader--visible');
  
  startSwiper();
}
