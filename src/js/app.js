import $ from 'jquery';

import '../../node_modules/popper.js/dist/umd/popper';
import '../../node_modules/bootstrap/js/dist/util';
import '../../node_modules/bootstrap/js/dist/tooltip';
import '../component/slider/slider';
import '../component/input/input';

$(document).ready(() =>{
  // Плавные скролл
  $(".scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Fancybox Modal Form
  $('[data-fancybox]').fancybox({autoFocus: false});
  // Отмена стандартного поведения ссылки
  $('a[data-trigger="click"]').click(function(e){e.preventDefault();})
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
  $('.product-content #toggleContent').on("click", function(e){
    e.preventDefault();
    let btn = $(this).parent();
    if( !btn.hasClass("product-content__btn--active")){
      btn.addClass("product-content__btn--active");
      $(this).text("Скрыть подробности");
      $(".product-content").removeClass("product-content--close").addClass("product-content--open");
		}else{
      btn.removeClass("product-content__btn--active");
      $(this).text("Подробнее о товаре");
      $(".product-content").removeClass("product-content--open").addClass("product-content--close");
    }
  });
  // Подсказки
  $('[data-toggle="tooltip"]').tooltip();
});