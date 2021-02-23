import $ from 'jquery';

$(document).ready(() =>{
  // Слайдер
	if( $('.slider').length > 0 ){
    // Slider On Index Page
    let $slickContent = $('.content-row__slider .slider.slider_content');
		$slickContent.slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows        : false,
			dots          : true,
      autoplay      : false
    });
    // Slider On Collection Page
    let $slickCollectionContent = $('.collection .slider.slider_content');
    $slickCollectionContent.each(function(){
      let count =  $(this).find(".slider_content__item").length;
      if ( count > 1 ){
        $(this).slick({
          infinite      : false,
          slidesToShow  : 1,
          slidesToScroll: 1,
          arrows        : false,
          dots          : true,
          autoplay      : false
        });
      }
    });

    // Slider Collection
    let $slickCollection = $('.slider.slider_collection');
    $slickCollection.each(function(){
      let count = $(this).find('.preview_collection').length;
      $(this).slick({
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
      if( count < 4 ){
        $(this).addClass('slider_collection--full')
      }
    });
		// Slider Product
    let $slickProduct = $('.slider.slider_product');
    $slickProduct.each(function(){
      let count = $(this).find('.slider_product__col').length;
      $(this).slick({
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
      if ( count < 5 ){
        $(this).addClass('slider_product--full');
      }

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
    // Slider Interior
    let $slickInterior = $('.slider.slider_interior');
    $slickInterior.each(function(){
      let count =  $(this).find(".slider_interior__item").length;
      if ( count > 2 ){
        $(this).slick({
          infinite      : false,
          slidesToShow  : 2,
          slidesToScroll: 1,
          arrows        : true,
          dots          : false,
          infinite      : true,
          autoplay      : false,
          responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    });
  }
});