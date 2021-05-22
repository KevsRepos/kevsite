var ready = function() {
  const main = document.querySelector('main');

  const route = (hashBang) => {
    const hashValue = hashBang.substring(1);

    fetch(`./frames/${hashValue}.html`, {
        method: 'get'
    }).then(res => res.text()).then((doc) => {
        main.className = "floatOut";
        window.location.hash = hashBang;

        setTimeout( () => {
          document.querySelectorAll('header a').forEach(el => {
            el.classList.remove('focused');
          });
            main.innerHTML = "";
            main.innerHTML = doc;
            main.className = "floatIn";
            document.getElementById(hashValue).className = "focused";
        }, 333);
    });
  }

  console.log('dd');

  if (window.location.hash.length !== 'undefined' && window.location.hash.length > 0) {
      route(window.location.hash);
  } else {
      route("Home");
  }

  window.addEventListener('hashchange', () => route(window.location.hash));

  let menuToggle = false;
  const header = document.querySelector('header');

  document.getElementById('menuBtn').addEventListener('click', () => {
      if(!menuToggle) {
          header.style.display = 'flex';
          menuToggle = true;
      } else {
          header.style.display = 'none';
          menuToggle = false;
      }
  });
}

if (
  document.readyState === 'complete' ||
  ( document.readyState !== 'loading' && ! document.documentElement.doScroll )
) {
  ready();
} else {
  document.addEventListener( 'DOMContentLoaded', ready );
}