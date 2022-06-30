const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
let isTop = true;

AOS.init();

burger.addEventListener('click', openMobileMenu);

function openMobileMenu(e) {
	headerMenu.classList.toggle('mobile');
	burger.classList.toggle('active');
	if (isTop) header.classList.toggle('has-background');
}

//remove AOS classes for hero's elements
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

//hero splide setup
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

//news splide setup
let newsSplide = new Splide('#news-splide', {
	type: 'loop',
	autoplay: true,
	interval: 3000,
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

//map setup
const displayMap = document.getElementById('map');

function initMap(newLat, newLng) {
	const uluru = { lat: newLat, lng: newLng };

	const map = new google.maps.Map(displayMap, {
		zoom: 10,
		center: uluru,
		disableDefaultUI: true,
		styles: [
			{
				stylers: [
					{
						saturation: -90,
					},
				],
			},
		],
	});

	const image = new google.maps.MarkerImage(
		'../img/purple-dot.png',
		null, // size
		null, // origin
		new google.maps.Point(8, 8), // anchor (move to center of marker)
		new google.maps.Size(16, 16) // scaled size (required for Retina display icon)
	);

	const marker = new google.maps.Marker({
		flat: true,
		optimized: false,
		position: uluru,
		map: map,
		icon: image,
		title: 'We are here!',
	});
}

window.initMap = initMap(46.48811798529199, 30.74121463237711);

//adding background for header

const className = 'has-background';
const scrollTrigger = 60;

window.addEventListener('scroll', function (e) {
	if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
		header.classList.add(className);
		isTop = false;
	} else {
		isTop = true;
		header.classList.remove(className);
	}
});

//adding active class for nav list while scrolling
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
	let scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;

		const sectionTop =
			current.getBoundingClientRect().top + window.pageYOffset - 50;
		let sectionId = current.getAttribute('id');

		const navItem = header.querySelector(
			'.nav__item a[href*=' + sectionId + ']'
		);

		if (navItem) {
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				navItem.classList.add('active');
			} else {
				navItem.classList.remove('active');
			}
		}
	});
}
