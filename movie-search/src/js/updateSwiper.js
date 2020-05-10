let oldWidth = window.innerWidth;
window.onresize = () => {
  const slider = document.querySelector('.swiper-container').swiper;
  let newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    slider.update();
  }
};
