import { apikey } from './swiper';

export async function renderCards(resArray) {
  let resTemplate = '';
  for (const item of resArray.Search) {
    const responseIMD = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${item.imdbID}`);
    const resIMD = await responseIMD.json();

    const poster = (item.Poster !== 'N/A') ? item.Poster : './src/img/none.png';
    const year = (item.Year !== 'N/A') ? item.Year : '????';
    const rating = (resIMD.imdbRating !== 'N/A') ? resIMD.imdbRating : '?.?';

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

