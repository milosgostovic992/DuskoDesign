const light = {
	switchBtn: document.querySelector('.js-switch-btn'),
	header: document.querySelector('.js-header'),
	footer: document.querySelector('.js-footer'),
	main: document.querySelector('.js-main'),
	footerImage: document.querySelector('.js-footer-img'),

	headerLightClass: 'header--light',
	headerActiveClass: 'header--active',
	footerLightClass: 'footer--light',
	mainLightClass: 'main--light',

	init: function () {
		this.lightMode();
	},

	lightMode: function () {
		this.switchBtn.addEventListener('click', () => {
			this.header.classList.toggle(this.headerLightClass);
			this.footer.classList.toggle(this.footerLightClass);
			this.main.classList.toggle(this.mainLightClass);
			if (this.footer.classList.contains(this.footerLightClass)) {
				this.footerImage.src = 'assets/14.png';
			} else {
				this.footerImage.src = 'assets/11.png';
			}
		});
	},
};
export default light;
