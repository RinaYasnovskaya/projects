import { createFetch } from "./createFetch";
import { createUrlImg } from "./createUrlImg";

export const changeBackground = async () => {
  const body = document.querySelector('body');
  const fetchURL = createUrlImg();
  const backImg = await createFetch(fetchURL);
  const imgURL = backImg.urls.regular;
  body.style.background = `linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center center/cover fixed,
  url('${imgURL}') center center/cover no-repeat fixed`;
};
