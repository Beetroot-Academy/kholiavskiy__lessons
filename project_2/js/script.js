const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', openMobileMenu);

function openMobileMenu(event) {
	headerMenu.classList.toggle('mobile');
	burger.classList.toggle('active');
}
