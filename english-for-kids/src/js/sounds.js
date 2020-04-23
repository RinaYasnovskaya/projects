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
  const audio = document.querySelector('.audio');
  audio.src = audioSrc;
  audio.autoplay = true;
  console.log(audio);
};
