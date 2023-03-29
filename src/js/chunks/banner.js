const banner = {
	init: function () {
		this.bannerScroll();
	},

	bannerScroll: function () {
		const button = document.querySelector('.js-banner-btn');
		const productsSection = document.querySelector('.js-products-section');
		button.addEventListener('click', () => {
			const id = +button.getAttribute('data-nav-for');
			const sectionId = +productsSection.getAttribute('data-nav-id');
			if (id === sectionId) {
				const sectionTop = productsSection.getBoundingClientRect().top + window.scrollY - 100;
				window.scrollTo({
					top: sectionTop,
					behavior: 'smooth',
				});
			} else {
				return;
			}
		});
	},
};
export default banner;
