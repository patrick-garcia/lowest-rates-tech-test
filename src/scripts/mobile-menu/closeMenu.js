const { scrollTo } = require('../helpers');
const { removeMobileMenuItems } = require('../mobile-menu/addToMobileMenu');

const closeMenu = (mobileMenuElem) => {
  const closeElem = mobileMenuElem.querySelector('.mobile-menu-close a');
  if(!closeElem) {
    return;
  }

  closeElem.addEventListener('click', (e) =>{
    e.preventDefault();
    removeMobileMenuItems();

    setTimeout(() => {
      mobileMenuElem.classList.remove('open');
      scrollTo(document.querySelector('#site-header'));
    }, 300);

    if(document.body.classList.contains('mobile-open')) {
      document.body.classList.remove('mobile-open');
    }
  });
};

module.exports = closeMenu;