import { controlForm } from './form';

const HomeComponent = {
  render: () => {
    return createHomePage();
  }
} 
const ErrorComponent = {
  render: () => {
    return `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>`;
  }
}

const createHomePage = () => {
  return `<section class="inner-section__start">
      <div class="start-enter">
        <div class="start-enter__inner">
          <nav class="start-enter__nav">
            <ul class="start-enter__nav-links">
              <li class="sign sign__in animation active"><a class="control">Sign in</a></li>
              <li class="sign sign__up animation inactive"><a class="control">Sign up</a></li>
            </ul>
          </nav>
          <div>
            <form class="form form__sign-in" action="#" method="post" name="form">
              <label for="login">Login</label>
              <input class="form__styling sign-in__login" type="text" name="login" placeholder=""/>
              <label for="password">Password</label>
              <input class="form__styling sign-in__pass" type="text" name="password" placeholder=""/>
              <button class="button">Sign in</button>
            </form>
            <form class="form form__sign-up" action="#" method="post" name="form">
              <label for="email">Email</label>
              <input class="form__styling sign-up__login" type="text" name="email" placeholder=""/>
              <label for="password">Password</label>
              <input class="form__styling sign-up__pass" type="text" name="password" placeholder=""/>
              <button class="button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}


const routes = [
  { path: '/', component: HomeComponent, },
];

const parseLocation = () => {
  return document.location.hash.slice(1).toLowerCase() || '/';
}
const findComponentByPath = (path, routes) => {
  return routes.find(r => r.path.match(new RegExp(`^${path}$`, 'gm'))) || undefined;
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
}