const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e2XB0R4kjwU';
// const accessKeyImg = 'OAUOq7MLCCJIn1ifqbPUopNrq5Ebmzl6e0R4kjwU';

const mainQuery = 'weather';
const numberError = '401';

const createUrlImg = () => {
  const startURL = `https://api.unsplash.com/photos/random?page=1&query=${mainQuery}&client_id=${accessKeyImg}`;
  return startURL;
}

const createFetch = async () => {
  const fetchURL = createUrlImg();
  let imgFetch = null;
  try{
    imgFetch = await fetch(fetchURL);
    if (imgFetch.Response && imgFetch.Response.status === numberError) {
      throw new Error;
    }
  } catch (err) {
    console.log(err);
    console.log('error, sorry');
  }
  const imgRes = await imgFetch.json();
  console.log(imgRes);
  return imgRes;
}

const changeBackground = async () => {
  const body = document.querySelector('body');
  const backImg = await createFetch();
  const imgURL = backImg.urls.regular;

  body.style.background = `linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center center/cover fixed,
  url('${imgURL}') center center/cover no-repeat fixed`;;
}

window.onload = () => {
  changeBackground();
}