import { saveUser } from './saveUser';

export const loginUser = async (user, globalUser) => {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();
    globalUser.forEach((elem) => {
      if (elem.email === user.email) {
        if (content.token) {
          elem.token = content.token;
        } else {
          console.log('err');
        }
      }
    });
    saveUser();
};
