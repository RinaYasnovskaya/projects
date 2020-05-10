import { result } from './swiper';

export const prevSlides = () => {
  document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    result.innerText = '';
    const disabledButton = document.querySelector('.swiper-button-next');
    disabledButton.style.pointerEvents = '';
    disabledButton.style.opacity = '';
    document.querySelector('.swiper-button-next').style.display = 'block';
  });
};
