import { apikey } from './swiper';

const NO_RESOURCE = 'N/A';

export async function renderCards(resArray) {
  let resTemplate = '';
  for (const item of resArray.Search) {
    const responseIMD = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${item.imdbID}`);
    const resIMD = await responseIMD.json();

    const poster = (item.Poster !== NO_RESOURCE) ? item.Poster : './src/img/none.png';
    const year = (item.Year !== NO_RESOURCE) ? item.Year : '????';
    const rating = (resIMD.imdbRating !== NO_RESOURCE) ? resIMD.imdbRating : '?.?';

    const template = `<div class="swiper-slide slide">
      <a href="https://www.imdb.com/title/${item.imdbID}/videogallery" class="slide__header">${item.Title}</a>
      <img class="poster" src="${poster}" onerror="this.onerror=null; this.src='./src/img/none.png'">
      <div class="year">${year}</div>
      <div class="imbscore">
      <span class="imbscore__star"><img src="./src/img/star.svg" alt=""></span>${rating}</div>
      </div>`;
    resTemplate += template;
  }
  return resTemplate;
}

