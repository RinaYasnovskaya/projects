import { numberError } from './main';

export const createFetch = async (fetchURL) => {
  let resFetch = null;
  try {
    resFetch = await fetch(fetchURL);
    if (resFetch.Response && resFetch.Response.status === numberError) {
      throw new Error;
    }
  }
  catch (err) {
    console.log('error, sorry');
  }
  const resultResp = await resFetch.json();
  
  return resultResp;
};
