$(function () {
	const swiper = new Swiper('.swiper', {
		autoplay: {
			delay: 5000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		speed: 1800,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		effect: 'creative',
		creativeEffect: {
			prev: {
				// will set `translateZ(-400px)` on previous slides
				translate: [0, 0, -400],
			},
			next: {
				// will set `translateX(100%)` on next slides
				translate: ['100%', 0, 0],
			},
		},
	})

	$('.slider-carousel').slick({
		dots: true,
		infinite: false,
		arrows: false,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 3,

		// centerMode: true,
		// variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	})

	$('.slider-carousel--double').slick({
		dots: true,

		infinite: false,
		arrows: false,
		speed: 800,
		slidesToShow: 2,
		slidesToScroll: 1,

		adaptiveHeight: true,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	})
})
