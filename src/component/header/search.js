import $ from 'jquery';
$(document).ready(() =>{
    $('.header .header__search#open-search').on("click", function(e){
        e.preventDefault();
        $(".overlay").addClass("overlay--search");
        $(".overlay").removeClass("overlay--disable");

        $("body").addClass("hidden open-search");

        $(".header.header_search").addClass("header_search--open");
    });
    
    $('.header.header_search #close-search').on("click", function(e){
        e.preventDefault();
        $(".overlay").addClass("overlay--disable");
        $(".overlay").removeClass("overlay--search");

        $("body").removeClass("open-search");
        $("body").removeClass("hidden");

        $(".header.header_search").removeClass("header_search--open");
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        let searchActive = $(".header.header_search.header_search--open"); // элемент
        if (!searchActive.is(e.target) // клик был не по блоку
            && searchActive.has(e.target).length === 0 // и не по его дочерним элементам
            && !$(".header .header_search #close-search").is(e.target) ) { 
                if( $(".overlay").hasClass("overlay--search") ){ 
                    $(".overlay").addClass("overlay--disable");
                    $(".overlay").removeClass("overlay--search");
                }
                if( $("body").hasClass("open-search") ){ 
                    $("body").removeClass("hidden"); 
                    $("body").removeClass("open-search"); 
                }
                $(".header.header_search").removeClass("header_search--open");
            }
    });
});