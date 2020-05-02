import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from '../../node_modules/swiper/js/swiper';

// apikey = 23d60cc6

async function createCard(title) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=23d60cc6&s=${title}`);
  const resArray = await response.json();

  let resTemplate = '';

  for (const item of resArray.Search) {
    const responseIMD = await fetch(`https://www.omdbapi.com/?apikey=23d60cc6&i=${item.imdbID}`);
    const resIMD = await responseIMD.json();

    const template = `<div class="swiper-slide slide">
      <a href="" class="slide__header">${item.Title}</a>
      <div class="poster" style="background-image: url(${item.Poster})"></div>
      <div class="year">${item.Year}</div>
      <div class="imbscore">
      <span class="imbscore__star"><img src="./src/img/star.svg" alt=""></span>${resIMD.imdbRating}</div>
    </div>`;

    resTemplate += template;
  }
  
  document.querySelector('.swiper-wrapper').innerHTML = resTemplate;
  startSwiper();
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
  // startSwiper();
  createCard('dream');
};
