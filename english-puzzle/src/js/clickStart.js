export const clickStart = () => {
  const buttonStart = document.querySelector('.button__start');
  if (buttonStart) {
    buttonStart.addEventListener('click', () => {
      document.querySelector('.click-game').click();
    });
  }
};
