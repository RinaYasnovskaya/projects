export const showPreloader = () => {
  document.querySelector('.preloader').classList.remove('preloader--hidden');
  document.querySelector('.preloader').classList.add('preloader--visible');
};
