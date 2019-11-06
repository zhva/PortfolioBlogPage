function openMenu(menuId, menuOpen, menuClose) {
  const objMenu = document.getElementById(menuId);
  if (objMenu == null) {
    return;
  }

  objMenu.classList.remove(menuClose);
  objMenu.classList.add(menuOpen);
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeMenu(menuId, menuOpen, menuClose) {
  const objMenu = document.getElementById(menuId);
  if (objMenu == null) {
    return;
  }

  objMenu.classList.remove(menuOpen);
  objMenu.classList.add(menuClose);
  document.getElementsByTagName('body')[0].style.overflow = 'auto';
}

function toggleMenuState(elementId, subMenuClose) {
  const menuElement = document.getElementById(elementId);
  if (menuElement == null) {
    return;
  }
  const subMenuOgj = menuElement.nextElementSibling;
  if (subMenuOgj.classList.contains(subMenuClose)) {
    menuElement.classList.replace('triangle-down', 'triangle-up');
    subMenuOgj.classList.remove(subMenuClose);
  }
  else {
    menuElement.classList.replace('triangle-up', 'triangle-down');
    subMenuOgj.classList.add(subMenuClose);
  }
}
