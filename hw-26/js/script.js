const burger = document.querySelector('.menu');
const nav = document.querySelector('.nav');

burger.addEventListener('click', (event) => {
	burger.classList.toggle('menu--active');
	nav.classList.toggle('nav--active');
});

new Splide('#hero-splide', {
	type: 'loop',
	perPage: 1,
	perMove: 1,
	autoplay: true,
	interval: 2500,
	cover: true,
	arrows: false,
}).mount();

new Splide('#new-arrivals', {
	type: 'loop',
	perPage: 5,
	perMove: 1,
	autoplay: true,
	interval: 5000,
	gap: '20px',
	pagination: false,
	breakpoints: {
		768: {
			perPage: 1,
			arrows: false,
			pagination: true,
		},
		1200: {
			perPage: 3,
			gap: '15px',
		},
	},
}).mount();

new Splide('#partnes-splide', {
	type: 'loop',
	perPage: 9,
	perMove: 1,
	autoplay: true,
	interval: 3000,
	gap: '20px',
	pagination: false,
	breakpoints: {
		768: {
			perPage: 2,
			gap: '20px',
			arrows: false,
			pagination: true,
		},
		1200: {
			perPage: 6,
			gap: '10px',
		},
	},
}).mount();
