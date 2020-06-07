import { globalUser } from './main';

export const saveUser = () => {
  const json = JSON.stringify(globalUser);
  localStorage.setItem('user', json);
};
