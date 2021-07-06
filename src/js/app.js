import $ from 'jquery';

import '../../node_modules/popper.js/dist/umd/popper';
import '../../node_modules/bootstrap/js/dist/util';
import '../../node_modules/bootstrap/js/dist/tooltip';
import '../component/header/search';
import '../component/navbar/navbar';
import '../component/slider/slider';
import '../component/input/input';
import '../component/product/product';
import '../component/collection/aside';
import '../component/modal/popup';

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
  $('[data-fancybox]').fancybox({autoFocus: false, touch: false});
  // Отмена стандартного поведения ссылки
  $('a[data-trigger="click"]').click(function(e){e.preventDefault();})
  // Раскрытие блока
  $('.toggle-item .toggle-item__title').on("click", function(e){
    e.preventDefault();
    let toggle = $(this).parent();
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
  // Блок с купоном
  $('#toggle-coupon').on("click", function(e){
    e.preventDefault();
    $('#form-coupon').slideToggle();
  });
  // Подсказки
  $('[data-toggle="tooltip"]').tooltip();
  // Lazy Load Image
  if( $('.b-lazy').length > 0 ){
    // Lazy Load
    ;(function() {
        var bLazy = new Blazy({
          success: function(element){
            setTimeout(function(){
              var parent = element.parentNode;
              parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
          }
        });
    })();
  }
  // Скрыть ненужные фильтры
  $('.woocommerce .woocommerce-widget-layered-nav-list .woocommerce-widget-layered-nav-list__item span.count').each(function(){
    if ( $(this).text() === '(0)' ){ 
      $(this).parent().hide(); 
    }
  })
});
