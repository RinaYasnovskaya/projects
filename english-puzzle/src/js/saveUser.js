import { globalUser } from './main';

export const saveUser = () => {
  localStorage.setItem('user', globalUser);
};
