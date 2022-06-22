const burger = document.querySelector('.menu');
const nav = document.querySelector('.nav');

burger.addEventListener('click', (event) => {
	burger.classList.toggle('menu--active');
	nav.classList.toggle('nav--active');
});
