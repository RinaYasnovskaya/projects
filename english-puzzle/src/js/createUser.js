import { saveUser } from "./saveUser";

const correctStatus = 200;

export const createUser = async (user, count, globalUser) => {
  const response = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await response.json();
  globalUser[count].id = content.id;
  saveUser();
};
