const { articles } = require('../data/footerData');

const buildEachArticle = (item) => {
  return `
    <article>
      <a href="${item.link}" class=tile-article>
        <header>
          <figure>
            <img src="${item.imgUrl}" alt="${item.imgDesc}">
          </figure>
          <h3 class="article-title">${item.title}</h3>
        </header>
        <div class="article-description">
          <p>${item.description}</p>
        </div>
      </a>
    </article>
  `
};

const buildArticleList = (articles) => {
  let articlesHTML = '';

  articles.forEach(item => {
    articlesHTML += buildEachArticle(item);
  });

  return `
    <div class="related-articles">${articlesHTML}</div>
  `;
};

const addArticles = (footerElem) => {
  const tagsHTML = buildArticleList(articles);
  const tagetSection = footerElem.querySelector('.related-items');
  if (tagetSection) {
    tagetSection.insertAdjacentHTML('beforeend', tagsHTML);
  }
};

module.exports = addArticles;