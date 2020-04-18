export const soundOn = () => {
  document.querySelectorAll('.front').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      if (!document.querySelector('#switcher').checked) {
        createSound(event.target.closest(`.card-container`).dataset.audio);
      }
    });
  });
};
export const createSound = (audioSrc) => {
  const audio = new Audio(audioSrc);
  audio.autoplay = true;
};
