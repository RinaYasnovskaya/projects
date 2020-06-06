import { globalUser } from './main';
import { saveUser } from "./saveUser";

export const createUser = async (user) => {
  const response = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await response.json();
  globalUser.id = content.id;
  saveUser();
};
