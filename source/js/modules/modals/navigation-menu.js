const CLOSE_ATTRIBUTE_VALUE = 'close';
const OPEN_ATTRIBUTE_VALUE = 'open';
const ATTRIBUTE_BUTTON_TOGGLE = 'data-navigation-toggle-btn';
const ATTRIBUTE_NAVIGATION_MENU = 'data-navigation-menu';
const NO_JS_CLASS_NAME = 'wrapper--no-js';
const SCROLL_LOCK = 'scroll-lock';

const body = document.querySelector('body');
const bodyOverlay = document.querySelector('.body-overlay');
const bodyWrapper = document.querySelector('.wrapper');
const headerMenu = bodyWrapper && bodyWrapper.querySelector('.header');
const navigationMenuToggle = headerMenu && headerMenu.querySelector('.header__navigation-btn');
const menuNavigationItems = headerMenu && headerMenu.querySelectorAll('.link--navigation-header');

const setAttributeToClose = (element, attributeName) => element.setAttribute(attributeName, CLOSE_ATTRIBUTE_VALUE);
const setAttributeToOpen = (element, attributeName) => element.setAttribute(attributeName, OPEN_ATTRIBUTE_VALUE);
const isOpenAtribute = (elemnt, attributeName) => elemnt.getAttribute(attributeName) === OPEN_ATTRIBUTE_VALUE;
const lockBodyScroll = () => body.classList.add(SCROLL_LOCK);
const unlockBodyScroll = () => body.classList.remove(SCROLL_LOCK);

const setNavigationMenuToClose = () => {
  setAttributeToClose(navigationMenuToggle, ATTRIBUTE_BUTTON_TOGGLE);
  setAttributeToClose(bodyWrapper, ATTRIBUTE_NAVIGATION_MENU);
  unlockBodyScroll();
};

const setNavigationMenuToOpen = () => {
  setAttributeToOpen(navigationMenuToggle, ATTRIBUTE_BUTTON_TOGGLE);
  setAttributeToOpen(bodyWrapper, ATTRIBUTE_NAVIGATION_MENU);
  lockBodyScroll();
};

const buttonClickHeandler = (button) => {
  if (!isOpenAtribute(button, ATTRIBUTE_BUTTON_TOGGLE)) {
    setNavigationMenuToOpen();
  } else {
    setNavigationMenuToClose();
  }
};

const setButtonHeandler = (button) => {
  if (button) {
    button.addEventListener('click', () => buttonClickHeandler(button));
  }
};

const setMenuNavigatuinItem = (item) => {
  if (item) {
    item.addEventListener('click', () => setNavigationMenuToClose());
  }
};

const setBodyOverlay = (item) => {
  if (item) {
    item.addEventListener('click', () => setNavigationMenuToClose());
  }
};

const setMenuNavigationItems = (menuItems) => {
  if (menuItems[0]) {
    menuItems.forEach((item) => {
      setMenuNavigatuinItem(item);
    });
  }
};

const setNavigationMenu = () => {
  bodyWrapper.classList.remove(NO_JS_CLASS_NAME);
  setMenuNavigationItems(menuNavigationItems);
  setNavigationMenuToClose();
  setButtonHeandler(navigationMenuToggle);
  setBodyOverlay(bodyOverlay);
};

export {setNavigationMenu};
