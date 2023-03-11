// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const ROUTES = {
    home: 'Home',
    feed: 'Feed',
    register: 'Register',
    login: 'Login'
}

function changePage(route){
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = ROUTES[route]
}

window.addEventListener("click", event => {
    const link = event.target.closest("a[data-link]");
    if (link) {
      event.preventDefault();
      const href = link.getAttribute("href");
      history.pushState(null, null, href);
    }
  });

window.addEventListener('popstate', () => {
  changePage(window.location.pathname)
})