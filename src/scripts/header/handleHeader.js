const { debounce, scrollTo } = require('../helpers');
const { addToMobileMenu } = require('../mobile-menu/addToMobileMenu');

const headerOnScroll = debounce(function() {
  const headerElem = document.querySelector('#site-header');
  if(!headerElem) {
    return;
  }

  const windowTop = window.scrollY;
  windowTop > 0
    ? headerElem.classList.add('scrolled')
    : headerElem.classList.remove('scrolled');

}, 60);

const addClickToLogin = () => {
  const login = document.querySelector('.login');
  const menuElem = document.querySelector('.mobile-menu');
  if(login && menuElem) {
    login.addEventListener('click', function(e) {
      
      if(!menuElem.classList.contains('open')) {
        menuElem.classList.add('open');
        setTimeout(() => {
          addToMobileMenu();
        }, 600)
        
        document.body.classList.add('mobile-open');
      
      }
      //  else {
      //   e.preventDefault();
      // }

      scrollTo(document.querySelector('#site-footer'));
    });
  }
};

const handleHeader = () => {
  const headerElem = document.querySelector('#site-header');
  if(!headerElem) {
    return;
  }

  addClickToLogin();
};

module.exports = { handleHeader, headerOnScroll };