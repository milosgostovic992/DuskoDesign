const header = {
	header: document.querySelector('header'),
	hamburger: document.querySelector('.js-menu'),
	hamburgerActiveClass: 'header__menu--active',
	nav: document.querySelector('.js-nav'),
	navActiveClass: 'nav--active',

	init: function () {
		this.navToggle();
	},

	navToggle: function () {
		this.hamburger.addEventListener('click', () => {
			this.hamburger.classList.toggle(this.hamburgerActiveClass);
			if (this.hamburger.classList.contains(this.hamburgerActiveClass)) {
				this.nav.classList.add(this.navActiveClass);
			} else {
				this.nav.classList.remove(this.navActiveClass);
			}
		});
	},
};

export default header;
