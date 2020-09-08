import $ from 'jquery'
$(document).ready(() =>{
  $(".scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask: "+7 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,

      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
      event.preventDefault();
      $(this).blur();
      return false;
    }
  });

  // Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false
  });
  // Отмена стандартного поведения ссылки
  $('a[data-trigger="click"]').click(function(e){
    e.preventDefault();
  })
  // Раскрытие блока
  $('.toggle-item').on("click", function(e){
    e.preventDefault();
    let toggle = $(this);
    if( !toggle.hasClass("toggle-item--active")){
      toggle.addClass("toggle-item--active");
      toggle.find(".toggle-item__title").addClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideDown();
		}else{
			toggle.removeClass("toggle-item--active");
      toggle.find(".toggle-item__title").removeClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideUp();
    }
  });
  // Input Number
  if( $('.input.input_count.input_count--active').length > 0 ){
    $('.input.input_count.input_count--active').number_plugin({
      width: '65px',
      height: '42px'
    });
  }
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
      autoplay      : false
    });
    // Slider Product
    let $slickProduct = $('.slider.slider_product');
		$slickProduct.slick({
      infinite      : false,
			slidesToShow  : 5,
			slidesToScroll: 5,
			arrows        : true,
			dots          : false,
      autoplay      : false
    });
  }
	// Mobile Navbar
  $(".navbar-toggle#nav").on("click", function(e){
		e.preventDefault();
    let navbar = $(".navbar-collapse");
		if( !navbar.hasClass("navbar-collapse--active")){
			navbar.addClass("navbar-collapse--active");
			$(".navbar-overlay").addClass("navbar-overlay--active");
		}else{
			navbar.removeClass("navbar-collapse--active");
			$(".navbar-overlay").removeClass("navbar-overlay--active");
		}
  });
  $(".navbar-close").on("click", function(e){
    e.preventDefault();
    $(".navbar-collapse").removeClass("navbar-collapse--active");
    $(".navbar-overlay").removeClass("navbar-overlay--active");
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".navbar-collapse.navbar-collapse--active"); // элемент
    if (!dropdownActive.is(e.target) // клик был не по блоку
          // && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !$(".navbar-toggle#nav").is(e.target) ) { 
              $(".navbar-collapse").removeClass("navbar-collapse--active");
              $(".navbar-overlay").removeClass("navbar-overlay--active");
            }
  });
  // Hide Navigation on Desktop
  $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      $(".navbar-toggle").removeClass("navbar-toggle--active");
        $(".navbar-collapse").removeClass("navbar-collapse--active");
        $(".navbar-overlay").removeClass("navbar-overlay--active");
    }
  });
});