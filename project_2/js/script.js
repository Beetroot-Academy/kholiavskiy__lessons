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
	wheel: true,
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
