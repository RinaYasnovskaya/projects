import { globalUser } from './main';

export const clickButtonIn = () => {
  const nextButton = document.querySelector('.click-enter');
  const errorBlock = document.querySelector('.error-block');
  document.querySelector('[data-in]').addEventListener('submit', (event) => {
    event.preventDefault();
    const login = document.querySelector('[name="login"]').value;
    const password = document.querySelector('[name="password-in"]').value;
    const existUser = globalUser.find(user => user.email === login);
    if (existUser) {
      if (existUser.password === password) {
        console.log(existUser);
        nextButton.click();
      }
      else {
        errorBlock.textContent = 'Invalid password. Try again';
      }
    }
    else {
      errorBlock.textContent = "The user doesn't exist";
    }
  });
};
