import { numberError } from './main';
import { createUrlImg } from "./createUrlImg";

export const createFetch = async () => {
  const fetchURL = createUrlImg();
  let imgFetch = null;
  try {
    imgFetch = await fetch(fetchURL);
    if (imgFetch.Response && imgFetch.Response.status === numberError) {
      throw new Error;
    }
  }
  catch (err) {
    console.log('error, sorry');
  }
  const imgRes = await imgFetch.json();
  console.log(imgRes);
  return imgRes;
};
