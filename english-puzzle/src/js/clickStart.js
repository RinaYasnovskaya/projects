export const clickStart = () => {
  const buttonStart = document.querySelector('.button__start');
  const goToGame = document.querySelector('.click-game');
  if (buttonStart) {
    buttonStart.addEventListener('click', () => {
      goToGame.click();
    });
  }
};
