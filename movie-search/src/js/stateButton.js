export const stateButton = (wait, next) => {
  document.querySelector('.wait').style.display = wait;
  document.querySelector('.swiper-button-next').style.display = next;
};
