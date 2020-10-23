import $ from 'jquery';
$(document).ready(() =>{
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
});