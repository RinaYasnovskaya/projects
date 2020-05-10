import { result, innerActions } from './swiper';

document.querySelector('.swiper-container').addEventListener('touchstart', () => {
  result.innerText = '';
  const slider = document.querySelector('.swiper-container').swiper;
  innerActions(slider);
});
