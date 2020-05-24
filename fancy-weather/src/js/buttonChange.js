document.querySelector('.button-change').addEventListener('click', (event) => {
  document.querySelector('body').style = '';
  const buttonChange = document.querySelector('.change');
  buttonChange.classList.add('rotate');
  setTimeout(() => {
    buttonChange.classList.remove('rotate');
  }, 1000);
  // changeBackground();
});
