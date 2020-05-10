let oldWidth = window.innerWidth;
window.onresize = () => {
  const slider = document.querySelector('.swiper-container').swiper;
  if(slider !== 'undefined') {
    let newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
      slider.update();
    }
  }
};
