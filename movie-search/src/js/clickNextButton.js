import { prevSlides } from './prevSlides';
import { result, innerActions } from './swiper';

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  result.innerText = '';
  const slider = document.querySelector('.swiper-container').swiper;
  innerActions(slider);
  prevSlides();
});
