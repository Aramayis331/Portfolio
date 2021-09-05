$('.rev_slider_project').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: false,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 4,
			infinite: true,
			dots: true
		}
		},
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
		}
		},
		{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		}
		}
	]
});