import { page } from './swiper';

export async function renderCards(title) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=23d60cc6&page=${page}&s=${title}`);
  const resArray = await response.json();
  let resTemplate = '';
  for (const item of resArray.Search) {
    const responseIMD = await fetch(`https://www.omdbapi.com/?apikey=23d60cc6&i=${item.imdbID}`);
    const resIMD = await responseIMD.json();

    const poster = (item.Poster !== 'N/A') ? item.Poster : './src/img/none.png';

    const template = `<div class="swiper-slide slide">
      <a href="https://www.imdb.com/title/${item.imdbID}/videogallery" class="slide__header">${item.Title}</a>
      <div class="poster" style="background-image: url(${poster})"></div>
      <div class="year">${item.Year}</div>
      <div class="imbscore">
      <span class="imbscore__star"><img src="./src/img/star.svg" alt=""></span>${resIMD.imdbRating}</div>
      </div>`;
    resTemplate += template;
  }
  return resTemplate;
}
