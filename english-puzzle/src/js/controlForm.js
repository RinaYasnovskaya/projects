export const controlForm = (pos) => {
  document.querySelector(`.control-in`).addEventListener('click', () => {
    controlButton();
  });
  document.querySelector(`.control-up`).addEventListener('click', () => {
    controlButton();
  });
} 

const controlButton = () => {
  const signUp = document.querySelector(".sign__up");
  const signIn = document.querySelector(".sign__in");
  document.querySelector('.form__sign-in').classList.toggle("sign-in_left");
  document.querySelector('.form__sign-up').classList.toggle("sign-up_left");

  if (signUp.classList.contains('inactive')) {
    signUp.classList.remove('inactive');
    signUp.classList.add('active');
  } else {
    signUp.classList.remove('active');
    signUp.classList.add('inactive');
  }

  if (signIn.classList.contains('inactive')) {
    signIn.classList.remove('inactive');
    signIn.classList.add('active');
  } else {
    signIn.classList.remove('active');
    signIn.classList.add('inactive');
  }
}

