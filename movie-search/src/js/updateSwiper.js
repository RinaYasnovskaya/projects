let oldWidth = window.innerWidth;
const NO_SLIDER = 'undefined';
window.onresize = () => {
  const slider = document.querySelector('.swiper-container').swiper;
  if(slider !== NO_SLIDER) {
    let newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
      slider.update();
    }
  }
};
