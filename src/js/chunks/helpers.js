const helpers = {
	scrollDisabled: function () {
		document.querySelector('html').style.overflow = 'hidden';
	},
	scrollEnabled: function () {
		document.querySelector('html').style.overflow = '';
	},
};
export default helpers;
