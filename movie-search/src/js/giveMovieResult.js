import { page, title, apikey } from './swiper';

export const giveMovieResult = async () => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&page=${page}&s=${title}`);
  const responseArray = await response.json();
  return responseArray;
};
