const { gallery } = require('../data/mainContentData');

const buildTile = (item) => {
  let descText = '';

  if(item.description) {
    descText = `<p>${item.description}</p>`;
  
  } else if (item.multilineDesc && Array.isArray(item.multilineDesc)) {
    descText = item.multilineDesc.map((itemText) => {
      return `<p>${itemText}</p>`;
    }).join('');
  }

  return `
    <li class="tile">
      <figure>
        <img src="${item.img}" alt="${item.imgDesc}">
      </figure>
      <div class="tile-copy ${item.multilineDesc ? 'tile-copy-multiline' : ''}">
        <h3>${item.title}</h3>
        ${descText}
      </div>
    </li>
  `;
};

const buildGallery = (gallery) => {
  let html = '';

  gallery.forEach(item => {
    html += buildTile(item);
  });

  return `
    <ul class="gallery">${html}</ul>
  `;
};

const addGallery = () => {
  const promoElem = document.querySelector('.promotions');
  if (!promoElem) {
    return;
  }

  const galleryHTML = buildGallery(gallery);
  promoElem.insertAdjacentHTML('beforeend', galleryHTML);
};

module.exports = addGallery;