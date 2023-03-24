import helpers from './helpers';
const products = {
	number: document.querySelectorAll('.js-number'),
	items: document.querySelectorAll('.js-products-button'),
	overlay: document.querySelector('.js-overlay'),
	popupHolder: document.querySelector('.js-popup-holder'),
	closeButton: document.querySelector('.js-close-popup'),
	overlayActiveClass: 'products__popup-overlay--active',
	popupHolderActiveClass: 'products__popup-holder--active',

	init: function () {
		this.numberCount();
		this.popupImage();
		this.closePopup();
		this.closeOverlay();
	},

	numberCount: function () {
		this.number.forEach((num, index) => {
			num.textContent = `${index + 1 + '.'}`;
		});
	},

	popupImage: function () {
		this.items.forEach((item) => {
			item.addEventListener('click', (e) => {
				const clicked = e.target;
				const parent = clicked.closest('.js-slide');
				const img = parent.querySelector('.js-img');
				const imageUrl = img.getAttribute('src');
				const targetElement = document.querySelector('.js-popup-image');
				targetElement.src = imageUrl;
				this.overlay.classList.add(this.overlayActiveClass);
				this.popupHolder.classList.add(this.popupHolderActiveClass);
				helpers.scrollDisabled();
			});
		});
		// druga verzija
		// this.items.forEach((item) => {
		// 	item.addEventListener('click', (e) => {
		// 		const clicked = e.target;
		// 		const parent = clicked.closest('.js-slide');
		// 		const img = parent.querySelector('.js-img');
		// 		const target = document.querySelector('.js-target');
		// 		let clonedImage = new Image();
		// 		clonedImage.className = 'js-cloned-image';
		// 		clonedImage.src = img.src;
		// 		clonedImage.width = img.naturalWidth;
		// 		clonedImage.height = img.naturalHeight;
		// 		target.appendChild(clonedImage);
		// 		this.overlay.classList.add(this.overlayActiveClass);
		// 		this.popupHolder.classList.add(this.popupHolderActiveClass);
		// 	});
		// });
	},

	closePopup: function () {
		this.closeButton.addEventListener('click', () => {
			this.overlay.classList.remove(this.overlayActiveClass);
			this.popupHolder.classList.remove(this.popupHolderActiveClass);
			helpers.scrollEnabled();

			//za drugu verziju
			// const oldImg = document.querySelector('.js-popup-holder .js-cloned-image');
			// oldImg.remove();
		});
	},
	closeOverlay: function () {
		this.overlay.addEventListener('click', () => {
			this.overlay.classList.remove(this.overlayActiveClass);
			this.popupHolder.classList.remove(this.popupHolderActiveClass);
			helpers.scrollEnabled();
		});
	},
};
export default products;
