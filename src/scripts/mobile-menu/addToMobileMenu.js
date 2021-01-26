const { menuItemsAddOn } = require('../data/mobileMenuData');

const addToMobileMenu = () => {
  const targetElem = document.querySelector('.mobile-menu-primary');

  if (targetElem && menuItemsAddOn.length > 0) {
    menuItemsAddOn.forEach(item => {
      targetElem.insertAdjacentHTML('afterbegin', `
        <li data-menu="${item.tag}" class="custom-add-on">
          <a href="${item.link}">${item.title}</a>
        </li>
      `);
    });
  }
};

const removeMobileMenuItems = () => {
  const menuItems = [...document.querySelectorAll('.mobile-menu-primary .custom-add-on')]
  if(menuItems.length > 0) {
    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      item.remove();
    }
  }
}

module.exports = { addToMobileMenu, removeMobileMenuItems };