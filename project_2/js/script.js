const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');

AOS.init();

burger.addEventListener('click', openMobileMenu);

const heroTitles = document.querySelectorAll('.hero__title');
const heroSubtitles = document.querySelectorAll('.hero__subtitle');

document.addEventListener('DOMContentLoaded', () => {
	removeAOSClassesExceptZeroIndex(heroTitles);
	removeAOSClassesExceptZeroIndex(heroSubtitles);
});

function removeAOSClassesExceptZeroIndex(array) {
	array.forEach((element, index) => {
		if (index != 0) {
			element.classList.remove('aos-init', 'aos-animate');
		}
	});
}

function openMobileMenu() {
	headerMenu.classList.toggle('mobile');
	burger.classList.toggle('active');
}

let heroSplide = new Splide('#hero-splide', {
	type: 'loop',
	autoplay: true,
	interval: 4000,
	perPage: 1,
	width: '100vw',
	height: '100vh',
	cover: true,
	arrows: false,
	paginationDirection: 'ttb',
	direction: 'ttb',
});

heroSplide.on('active', (Slide) => {
	const heroTitle = Slide.slide.querySelector('.hero__title');
	const heroSubtitle = Slide.slide.querySelector('.hero__subtitle');
	heroTitle.classList.add('aos-init', 'aos-animate');
	heroSubtitle.classList.add('aos-init', 'aos-animate');
});

heroSplide.on('inactive', (Slide) => {
	const heroTitle = Slide.slide.querySelector('.hero__title');
	const heroSubtitle = Slide.slide.querySelector('.hero__subtitle');
	heroTitle.classList.remove('aos-init', 'aos-animate');
	heroSubtitle.classList.remove('aos-init', 'aos-animate');
});

heroSplide.mount();

let newsSplide = new Splide('#news-splide', {
	type: 'loop',
	autoplay: true,
	interval: 4000,
	perPage: 3,
	perMove: 1,
	gap: '30px',
	breakpoints: {
		1375: {
			arrows: false,
		},
		1200: {
			perPage: 2,
			width: '770px',
		},
		800: {
			perPage: 1,
			width: '370px',
		},
	},
});

newsSplide.mount();

const displayMap = document.getElementById('map');

function initMap(newLat, newLng) {
	const uluru = { lat: newLat, lng: newLng };

	const map = new google.maps.Map(displayMap, {
		zoom: 16,
		center: uluru,
		disableDefaultUI: true,
	});

	const image = 'https://i.ibb.co/Lh8d7SH/location.png';

	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image,
	});
}

window.initMap = initMap(46.48811798529199, 30.74121463237711);
