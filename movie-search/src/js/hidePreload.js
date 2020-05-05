export const hidePreload = () => {
  document.querySelector('.preloader').classList.add('preloader--hidden');
  document.querySelector('.preloader').classList.remove('preloader--visible');
};
