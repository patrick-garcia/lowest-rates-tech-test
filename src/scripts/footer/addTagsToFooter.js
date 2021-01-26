const { insuranceTags } = require('../data/footerData');

const buildEachList = (item) => {
  return `
    <li class="insurance-type-tag" data-insurance-type="${item.tag}">
      <a href="${item.link}">${item.tag}</a>
    </li>
  `
};

const buildTagsList = () => {
  let listHTML = '';

  insuranceTags.forEach(item => {
    listHTML += buildEachList(item);
  });

  return `
    <ul class="types-container">${listHTML}</ul>
  `;
};

const addTagsToFooter = (footerElem) => {
  const tagsHTML = buildTagsList(insuranceTags);
  const tagetSection = footerElem.querySelector('.insurance-types');
  if (tagetSection) {
    tagetSection.insertAdjacentHTML('beforeend', tagsHTML);
  }
};

module.exports = addTagsToFooter;