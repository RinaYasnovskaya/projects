export const prevSlides = () => {
  document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    const disabledButton = document.querySelector('.swiper-button-next');
    disabledButton.style.pointerEvents = '';
    disabledButton.style.opacity = '';
    document.querySelector('.result').innerText = '';
  });
};
