document.addEventListener('DOMContentLoaded', function(event) {
  const app = document.getElementById('root');
  const logo = document.createElement('img');
  logo.src = './img/logo.png';
  
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  
  app.appendChild(logo);
  app.appendChild(container);
  
  const xhr = new XMLHttpRequest();
  const url = 'https://ghibliapi.herokuapp.com/films';
  xhr.open('GET', url);
  xhr.onreadystatechange = () => { 
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.response);
        data.forEach(movie => {
          const card = createElement('div', 'card');
          container.appendChild(card);

          // const movieTitle = createElement('h1', 'movie-title', movie.title);
          card.appendChild(createElement('h1', 'movie-title', movie.title));

          // Limit description to 300 chars to keep equal vertical card heights.
          card.appendChild(createElement('p', 'movie-desc', movie.description.substring(0, 300)));
        });
      }
    }
  }
  xhr.send(); 
});

const createElement = (elem, classString, content = '' ) => {
  const htmlElement = document.createElement(elem);
  htmlElement.setAttribute('class', classString);
  if (content) {
    htmlElement.textContent = content;
  }
  return htmlElement;
}

