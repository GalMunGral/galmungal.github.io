window.onload = function() {
  const menu = document.querySelector('#menu');
  const article = document.querySelector('#article');
  fetch('meta.json').then(res => res.json())
  .then(json => {
    const items = json.map(entry => {
      const li = document.createElement('li');
      li.id = entry.id;
      li.innerHTML = entry.title;
      return li;
    });
    const ul = document.querySelector('#menu').querySelector('ul');
    ul.append(...items)
  });
  article.remove();

  function loadArticle(id) {
    fetch(id + '.txt').then(res => {
      if (res.status === 404) throw new Error('Not Found');
      return res.text();
    }).then(text => {
      article.innerHTML = text;
    }).catch(() => {
      article.innerHTML = '404 NOT FOUND';
    }).finally(() => {
      menu.remove();
      document.body.append(article);
    });
  }
  menu.onclick = function(e) {
    const id = e.target.id;
    loadArticle(id);
     history.pushState( { id }, '', '/' + id);
  }
  window.onpopstate = function(e) {
    // If in article-displaying state
    if (e.state) {
      loadArticle(e.state.id);
    } else {
      article.remove();
      document.body.append(menu);
    }
  }
}
