import { globalUser } from './main';
import { createUser } from "./createUser";

let countUser = 0;

export const clickButtonUp = () => {
  const nextButton = document.querySelector('.click-reload');
  const errorBlock = document.querySelector('.error-block');
  
  document.querySelector('[data-up]').addEventListener('submit', (event) => {
    event.preventDefault();
    const password = document.querySelector('[name="password-up"]').value;
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+-_@$!%*?&#.,;:[\]{}]).{8,}$/;
    if (reg.test(password)) {
      const login = document.querySelector('[name="email"]').value;
      const user = {email: login, password: password};
      globalUser.push({email: login, password: password, id: null, token: null});
      createUser(user, countUser, globalUser);
      countUser += 1;
      nextButton.click();
    }
    else {
      errorBlock.innerHTML = `
      <p> Password must be minimum: </p>
      <p>- 8 symbols; </p>
      <p>- one uppercase letter;</p>
      <p>- one lowercase letter;</p>
      <p>- one digital;</p>
      <p>- one special symbols;</p>
      `;
    }
  });
};
