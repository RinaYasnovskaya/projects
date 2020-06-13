import { controlForm } from './controlForm';
import { createHomePage } from './createHomePage';
import { createStartPage } from './createStartPage';
import { createErrorPage } from './createErrorPage';
import { clickButtonUp } from './clickButtonUp';
import { loadUser } from './loadUser';
import { clickButtonIn} from './clickButtonIn';
import { clickLogOut } from './clickLogOut';
import { loadAuth } from './loadAuth';

export let globalUser = [];

export const actionAuth = {
  setAuth(auth) {
    this._isAuth = auth;
  },
  getAuth() {
    return this._isAuth;
  },
};

const HomeComponent = {
  render: () => {
    return createHomePage();
  }
} 
const StartComponent = {
  render: () => {
    return createStartPage();
  }
}
const GameComponent = {
  render: () => {
    return createGamePage();
  }
}
const ErrorComponent = {
  render: () => {
    return createErrorPage();
  }
}

const createGamePage = () => {
  return `
    <p>Hello</p>
  `;
}

const routes = [
  { path: '/', component: HomeComponent, },
  { path: '/start', component: StartComponent, },
  { path: '/game', component: GameComponent, },
];

const parseLocation = () => {
  return document.location.hash.slice(1).toLowerCase() || '/';
}
const findComponentByPath = (path, routes) => {
  return routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
} 

const router = () => {
  const isAuth = actionAuth.getAuth();
  if (isAuth === 'true') {
    document.querySelector('.click-enter').click();
  }

  const path = parseLocation();
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  document.getElementById('main').innerHTML = component.render();

  switch(path) {
    case '/': {
      controlForm();
      clickButtonUp();
      clickButtonIn();
    }
    case '/start': {
      clickLogOut();
    }
    case '/game': {
  
    }
  }
};

window.addEventListener('hashchange', router);
window.onload = () => {
  loadAuth();
  globalUser = loadUser();
  router();
  
  console.log(globalUser,localStorage);
}