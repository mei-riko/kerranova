!function(e){var a={};function t(l){if(a[l])return a[l].exports;var o=a[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)t.d(l,o,function(a){return e[a]}.bind(null,o));return l},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";var l,o=t(1),r=(l=o)&&l.__esModule?l:{default:l};(0,r.default)(document).ready((function(){((0,r.default)(".scroll").click((function(){return(0,r.default)("html, body").animate({scrollTop:(0,r.default)((0,r.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,r.default)(".phone").length>0&&(0,r.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,r.default)(this).closest("form").addClass("error-phone"),(0,r.default)(this).addClass("error"),(0,r.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,r.default)(this).closest("form").removeClass("error-phone"),(0,r.default)(this).removeClass("error"),(0,r.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,r.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,r.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,r.default)(this).blur(),!1})),(0,r.default)("[data-fancybox]").fancybox({autoFocus:!1}),(0,r.default)('a[data-trigger="click"]').click((function(e){e.preventDefault()})),(0,r.default)(".toggle-item").on("click",(function(e){e.preventDefault();var a=(0,r.default)(this);a.hasClass("toggle-item--active")?(a.removeClass("toggle-item--active"),a.find(".toggle-item__title").removeClass("toggle-item__title--active"),a.find(".toggle-item__content").slideUp()):(a.addClass("toggle-item--active"),a.find(".toggle-item__title").addClass("toggle-item__title--active"),a.find(".toggle-item__content").slideDown())})),(0,r.default)(".slider").length>0)&&((0,r.default)(".slider.slider_index").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!1}),(0,r.default)(".slider.slider_collection").slick({infinite:!1,slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,autoplay:!1}),(0,r.default)(".slider.slider_product").slick({infinite:!1,slidesToShow:5,slidesToScroll:5,arrows:!0,dots:!1,autoplay:!1}));(0,r.default)(".navbar-toggle#nav").on("click",(function(e){e.preventDefault();var a=(0,r.default)(".navbar-collapse");a.hasClass("navbar-collapse--active")?(a.removeClass("navbar-collapse--active"),(0,r.default)(".navbar-overlay").removeClass("navbar-overlay--active")):(a.addClass("navbar-collapse--active"),(0,r.default)(".navbar-overlay").addClass("navbar-overlay--active"))})),(0,r.default)(".navbar-close").on("click",(function(e){e.preventDefault(),(0,r.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,r.default)(".navbar-overlay").removeClass("navbar-overlay--active")})),(0,r.default)(document).mouseup((function(e){(0,r.default)(".navbar-collapse.navbar-collapse--active").is(e.target)||(0,r.default)(".navbar-toggle#nav").is(e.target)||((0,r.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,r.default)(".navbar-overlay").removeClass("navbar-overlay--active"))})),(0,r.default)(window).resize((function(){((0,r.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches)&&((0,r.default)(".navbar-toggle").removeClass("navbar-toggle--active"),(0,r.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,r.default)(".navbar-overlay").removeClass("navbar-overlay--active"))}))}))},function(e,a){e.exports=jQuery}]);