const burger = document.querySelector('.menu');
const nav = document.querySelector('.nav');

burger.addEventListener('click', (event) => {
	burger.classList.toggle('menu--active');
	nav.classList.toggle('nav--active');
});

new Splide('#hero-splide', {
	type: 'loop',
	perPage: 1,
	autoplay: true,
	interval: 2500,
	cover: true,
	arrows: false,
}).mount();
