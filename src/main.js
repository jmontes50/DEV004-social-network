// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const ROUTES = {
    '/': '<h1>Home</h1><a href="login" data-link>Link</a>',
    'feed': 'Feed',
    'register': 'Register',
    'login': 'Login'
}

function changePage(route = '/'){
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = ROUTES[route]
}

changePage()

window.addEventListener("click", event => {
    const link = event.target.closest("a[data-link]");
    console.log({link})
    if (link) {
      event.preventDefault();
      const href = link.getAttribute("href");
      console.log({href})
      history.pushState(null, null, href);
    }
  });

  window.onpopstate = function(){
    console.log('works')
  }
// window.addEventListener('popstate', () => {
//   console.log('works')
//   console.log(window.location.pathname)
//   changePage(window.location.pathname)
// })