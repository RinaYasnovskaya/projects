import { globalUser } from './main';
import { createUser } from "./createUser";

export const clickButtonUp = () => {
  const nextButton = document.querySelector('.click-reload');
  const errorBlock = document.querySelector('.error-block');
  
  document.querySelector('[data-up]').addEventListener('submit', (event) => {
    event.preventDefault();
    const password = document.querySelector('[name="password-up"]').value;
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+-_@$!%*?&#.,;:[\]{}]).{8,}$/;
    console.log(reg.test(password), password);
    if (reg.test(password)) {
      const login = document.querySelector('[name="email"]').value;
      nextButton.click();
      const user = {
        email: login,
        password: password
      };
      globalUser.email = login;
      globalUser.password = password;
      createUser(user);
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
