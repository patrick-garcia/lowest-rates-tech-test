const { sectionCopy } = require('../data/mainContentData');

const handleAboutSection = (targetElem) => {
  if (!targetElem || !sectionCopy || !sectionCopy.section1) {
    return;
  }

  const source = sectionCopy.section1;

  targetElem.insertAdjacentHTML('beforeend', `
    <header>
      <h2>${source.title}</h2>
    </header>
    <figure>
      <img src="${source.img}" alt="${source.alt}">
    </figure>
  `);
};

const handleWhatSection = (targetElem) => {
  if (!targetElem || !sectionCopy || !sectionCopy.section2) {
    return;
  }

  const source = sectionCopy.section2;

  targetElem.insertAdjacentHTML('beforeend', `
    <header>
      <h2>${source.title}</h2>
      <p>${source.subtitle}</p>
    </header>
    <aside>
      <p>${source.description}</p>
    </aside>
  `);
};

const addSectionCopy = () => {
  const aboutElem = document.querySelector('.about-section');
  const whatElem = document.querySelector('.what-section');

  handleAboutSection(aboutElem);
  handleWhatSection(whatElem);
};

module.exports = addSectionCopy;