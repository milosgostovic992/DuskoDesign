import helpers from './helpers';
const header = {
	header: document.querySelector('header'),
	hamburger: document.querySelector('.js-menu'),
	headerActiveClass: 'header--active',
	hamburgerActiveClass: 'header__menu--active',
	nav: document.querySelector('.js-nav'),
	navActiveClass: 'nav--active',

	init: function () {
		this.navToggle();
		this.fixedNav();
		this.scrollNav();
	},

	navToggle: function () {
		this.hamburger.addEventListener('click', () => {
			this.hamburger.classList.toggle(this.hamburgerActiveClass);
			if (this.hamburger.classList.contains(this.hamburgerActiveClass)) {
				this.nav.classList.add(this.navActiveClass);
				helpers.scrollDisabled();
			} else {
				this.nav.classList.remove(this.navActiveClass);
				helpers.scrollEnabled();
			}
		});
	},

	fixedNav: function () {
		let lastScrollPosition = 0;
		window.addEventListener('scroll', () => {
			lastScrollPosition = window.scrollY;

			if (lastScrollPosition > 30) {
				this.header.classList.add(this.headerActiveClass);
			} else {
				this.header.classList.remove(this.headerActiveClass);
			}
		});
	},

	scrollNav: function () {
		const navLinks = document.querySelectorAll('.js-link');
		const sections = document.querySelectorAll('.js-section');

		navLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				const clicked = e.target;
				const id = +clicked.getAttribute('data-nav-for');
				sections.forEach((section) => {
					const sectionId = +section.getAttribute('data-nav-id');
					if (id === sectionId) {
						this.nav.classList.remove(this.navActiveClass);
						this.hamburger.classList.remove(this.hamburgerActiveClass);
						helpers.scrollEnabled();
						const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
						window.scrollTo({
							top: sectionTop,
							behavior: 'smooth',
						});
					} else {
						return;
					}
				});
			});
		});
	},

	// navLinks.forEach((link, index) => {
	// 	link.addEventListener('click', (e) => {
	// 		e.preventDefault();
	// 		this.scrollToSection(index);
	// 	});
	// });

	// scrollToSection: function (index) {
	// 	const sections = document.querySelectorAll('.js-section');
	// 	const header = document.querySelector('.js-header');
	// 	const top = sections[index].getBoundingClientRect().top + document.documentElement.scrollTop - header.getBoundingClientRect().height;
	// 	window.scrollTo({
	// 		top: top,
	// 		behavior: 'smooth',
	// 	});
	// },
};

export default header;
