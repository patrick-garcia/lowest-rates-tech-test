require('./main.scss');
const { handleHeader, headerOnScroll } = require('./scripts/header/handleHeader');
const handleMobileMenu = require('./scripts/mobile-menu/handleMobileMenu');
const handleMainContent = require('./scripts/main-content/handleMainContent');
const handleFooter = require('./scripts/footer/handleFooter');

const init = () => {
  document.body.style.opacity = 1;
  handleHeader();
  handleMainContent();
  handleMobileMenu();
  handleFooter();
};

window.onload = init();
window.onscroll = () => {
  headerOnScroll();
};