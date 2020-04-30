import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from '../../node_modules/swiper/js/swiper';

const startSwiper = () => {
  const mySwiper = new Swiper('.swiper-container', {
    breakpoints: {
      50: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    // centeredSlides: true,
    spaceBetween: 10,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  return mySwiper;
};

export default startSwiper;
