import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from '../../node_modules/swiper/js/swiper';

const startSwiper = () => {
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 80,
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
