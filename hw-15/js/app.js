const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__navigation-list')

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--mobile')
  menu.classList.toggle('active')
})