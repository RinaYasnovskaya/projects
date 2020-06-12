import { globalUser, actionAuth } from './main';
import { saveAuth } from "./saveAuth";
import { loginUser } from './loginUser';

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
        const user = {email: login, password: password};
        loginUser(user, globalUser);
        actionAuth.setAuth(true);
        saveAuth();
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
