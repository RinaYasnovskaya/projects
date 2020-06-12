import { actionAuth } from './main';
import { saveAuth } from "./saveAuth";

export const clickLogOut = () => {
  const buttonLogout = document.querySelector('.button__logout');
  if (buttonLogout) {
    buttonLogout.addEventListener('click', () => {
      actionAuth.setAuth(false);
      document.querySelector('.click-reload').click();
      saveAuth();
    });
  }
};
