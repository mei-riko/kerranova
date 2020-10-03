import $ from 'jquery';

$(document).ready(() =>{
  // Слайдер
	if( $('.slider').length > 0 ){
    // Slider On Index Page
    let $slickIndex = $('.slider.slider_index');
		$slickIndex.slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows        : false,
			dots          : true,
      autoplay      : false
    });
    // Slider Collection
    let $slickCollection = $('.slider.slider_collection');
		$slickCollection.slick({
      infinite      : false,
			slidesToShow  : 4,
			slidesToScroll: 4,
			arrows        : true,
			dots          : false,
      autoplay      : false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });
    // Slider Product
    let $slickProduct = $('.slider.slider_product');
		$slickProduct.slick({
      infinite      : false,
			slidesToShow  : 5,
			slidesToScroll: 5,
			arrows        : true,
			dots          : false,
      autoplay      : false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    });
    // Slider Card
    $('.product-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider-nav'
    });
    $('.product-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-slider',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
});