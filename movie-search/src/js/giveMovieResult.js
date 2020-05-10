import { page, title } from './swiper';

export const giveMovieResult = async () => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=231f8e38&page=${page}&s=${title}`);
  const responseArray = await response.json();
  return responseArray;
};
