const addArticles = require('./addArticles');
const addTagsToFooter = require('./addTagsToFooter');

const handleFooter = () => {
  const footerElem = document.querySelector('#site-footer');
  if(!footerElem) {
    return;
  }

  addArticles(footerElem);
  addTagsToFooter(footerElem);
};

module.exports = handleFooter;