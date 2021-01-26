const { menuItems } = require('../data/mobileMenuData');
const closeMenu = require('./closeMenu');

const buildEachMenu = (menuItems) => {
  let menuHTML = '';

  menuItems.forEach(item => {
    menuHTML += `
      <li data-menu="${item.tag}">
        <a href="${item.link}">${item.title}</a>
      </li>
    `;
  });

  return `
    <ul class="mobile-menu-primary">${menuHTML}</ul>
  `;
};

const addMenuList = (mobileMenuElem) => {
  const menuHTML = buildEachMenu(menuItems);
  mobileMenuElem.insertAdjacentHTML('beforeend', menuHTML);
};

const handleMobileMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) {
    return;
  }

  addMenuList(mobileMenu);
  closeMenu(mobileMenu);
};

module.exports = handleMobileMenu;