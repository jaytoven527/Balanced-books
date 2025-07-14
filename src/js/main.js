// Import our custom CSS
import '~/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  manageLocation();
}

const routes = {
  404: "/src/404.html", 
  "/": "/src/home.html", 
  "/about": "/src/about.html",
}

const manageLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then(data => data.text());
  document.querySelector("#app").innerHTML = html;
}


window.onpopstate = manageLocation();
window.route = route;

manageLocation();