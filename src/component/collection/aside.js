import $ from 'jquery'
$(document).ready(() =>{
    $(".preview.preview_collection .preview_collection__link").on("click", function(e){
        e.preventDefault();
        let id = $(this).attr("id");
        let preview = $(".collection-aside[data-collection="+ id +"]");
        preview.addClass("collection-aside--active");

        $(".overlay").addClass("overlay--collection");
        $(".overlay").removeClass("overlay--disable");

        $("body").addClass("hidden open-collection");
    });

    $(".collection .collection__filter a.label").on("click", function(e){
        e.preventDefault();
        let id = $(this).attr("id");
        let preview = $(".collection-aside[data-collection="+ id +"]");
        preview.addClass("collection-aside--active");

        $(".overlay").addClass("overlay--collection");
        $(".overlay").removeClass("overlay--disable");

        $("body").addClass("hidden open-collection");
    });

    $(".collection-aside .collection-aside__close").on("click", function(){
        $(this).closest(".collection-aside").removeClass("collection-aside--active");
        
        $(".overlay").removeClass("overlay--collection");
        $(".overlay").addClass("overlay--disable");

        $("body").removeClass("hidden");
        $("body").removeClass("open-collection");
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        let collectionActive = $(".collection-aside.collection-aside--active"); // элемент
        if (!collectionActive.is(e.target) // клик был не по блоку
            && collectionActive.has(e.target).length === 0 // и не по его дочерним элементам
            && !$(".collection-aside .collection-aside__close").is(e.target) ) { 
                if( $(".overlay").hasClass("overlay--collection") ){ 
                    $(".overlay").addClass("overlay--disable");
                    $(".overlay").removeClass("overlay--collection");
                }
                if( $("body").hasClass("open-collection") ){ 
                    $("body").removeClass("hidden"); 
                    $("body").removeClass("open-collection"); 
                }
                $(".collection-aside").removeClass("collection-aside--active");
            }
    });
});