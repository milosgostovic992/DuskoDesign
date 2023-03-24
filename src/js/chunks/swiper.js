const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: false,
	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,

	breakpoints: {
		425: {
			slidesPerView: 2,
			spaceBetween: 28,
			slidesPerGroup: 2,
		},

		769: {
			slidesPerView: 3,
			spaceBetween: 50,
			slidesPerGroup: 3,
		},
	},

	// If we need pagination

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
export default swiper;
