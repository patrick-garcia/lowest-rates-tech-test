const addGallery = require('./addGallery');
const addSectionCopy = require('./addSectionCopy');

const handleMainContent = () => {
  const mainContentElem = document.querySelector('#main-content');
  if (!mainContentElem) {
    return;
  }

  addGallery();
  addSectionCopy();
};

module.exports = handleMainContent;