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
  // Подсказки
  $('[data-toggle="tooltip"]').tooltip();
  // Инициализация b-lazy
  var blazy = new Blazy({
    breakpoints: [{
   	    width: 480, // max-width
   	    src: 'data-src-xs' // name attr
   	}]
  });
});