function openMenu(menuId) {
  document.getElementById(menuId).style.width = '25%';
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeMenu(menuId) {
  document.getElementById(menuId).style.width = '0';
  document.getElementsByTagName('body')[0].style.overflow = 'auto';
}
