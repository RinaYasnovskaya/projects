import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from '../../node_modules/swiper/js/swiper';

async function createCard(title) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=b74de48f&s=${title}`);
  const resArray = await response.json();

  console.log(resArray);
}


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

window.onload = () => {
  startSwiper();
  createCard('dream');
};
