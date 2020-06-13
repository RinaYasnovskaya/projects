import { saveUser } from './saveUser';

export const loginUser = async (user, globalUser) => {
  try {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
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
    const content = await rawResponse.json();
    globalUser.forEach((elem) => {
      if (elem.email === user.email) {
        elem.token = content.token;
      }
    });
    saveUser();
  }
  catch (err) {
    alert('Application error. Try later');
  }
};
