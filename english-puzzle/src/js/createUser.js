import { saveUser } from "./saveUser";

const correctStatus = 200;

export const createUser = async (user, count, globalUser) => {
  try{
    const response = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (response.Response && response.Response.status !== correctStatus) {
      throw new Error;
    }
    const content = await response.json();
    globalUser[count].id = content.id;
    saveUser();
  } 
  catch (err) {
    alert('Application error. Try later');
  }
  
};
