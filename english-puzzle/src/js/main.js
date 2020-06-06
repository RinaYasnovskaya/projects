import { controlForm } from './controlForm';
import { createHomePage } from './createHomePage';
import { createStartPage } from './createStartPage';
import { createErrorPage } from './createErrorPage';
import { clickButtonUp } from './clickButtonUp';

export const globalUser = {
  email: null,
  password: null,
  id: null
}

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
const ErrorComponent = {
  render: () => {
    return createErrorPage();
  }
}

const routes = [
  { path: '/', component: HomeComponent, },
  { path: '/start', component: StartComponent, },
];

const parseLocation = () => {
  return document.location.hash.slice(1).toLowerCase() || '/';
}
const findComponentByPath = (path, routes) => {
  return routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
} 

const router = () => {
  const path = parseLocation();
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  document.getElementById('main').innerHTML = component.render();
};

window.addEventListener('hashchange', router);
window.onload = () => {
  router();
  controlForm();
  clickButtonUp();
}