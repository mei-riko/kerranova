import $ from 'jquery'
$(document).ready(() =>{
    function asideBlock( item ){
        let id = item.attr("id");
        let preview = $(".collection-aside[data-collection="+ id +"]");
        preview.addClass("collection-aside--active");

        $(".overlay").addClass("overlay--aside");
        $(".overlay").removeClass("overlay--disable");

        $("body").addClass("hidden open-aside");
    }
    $(".preview.preview_collection .preview_collection__link").on("click", function(e){
        e.preventDefault();
        asideBlock( $(this) );
    });
    $(".collection .collection__show").on("click", function(e){
        e.preventDefault();
        asideBlock( $(this) );
    });

    $(".collection .collection__filter .label").on("click", function(e){
        e.preventDefault();
        let id = $(this).attr("data-filter");
        let preview = $(".collection-aside[data-collection=filter]");
        preview.addClass("collection-aside--active");

        // запись информации об открытии фильтра на странице
        let pageUrl = location.pathname;
        sessionStorage.setItem("filter", "1");
        sessionStorage.setItem("url", pageUrl);

        $(".collection-aside .toggle-item").each(function(){
            if( $(this).hasClass("toggle-item--active") ){
                $(this).removeClass("toggle-item--active");
                $(this).find(".toggle-item__title").removeClass("toggle-item__title--active");
                $(this).find(".toggle-item__content").hide();
            } 
        });

        let filter  = $(".toggle-item.toggle-item_filter#" + id);
        filter.addClass("toggle-item--active");
        filter.find(".toggle-item__title").addClass("toggle-item__title--active");
        filter.find(".toggle-item__content").show();

        $(".overlay").addClass("overlay--aside");
        $(".overlay").removeClass("overlay--disable");

        $("body").addClass("hidden open-aside");
    });

    $(".collection-aside .collection-aside__close").on("click", function(){
        $(this).closest(".collection-aside").removeClass("collection-aside--active");

        // запись информации о закрытии фильтра на странице
        sessionStorage.clear();
        $(".collection-aside[data-collection=filter]").removeAttr("style");
        
        $(".overlay").removeClass("overlay--aside");
        $(".overlay").addClass("overlay--disable");

        $("body").removeClass("hidden");
        $("body").removeClass("open-aside");
    });

    let url = window.location.search;
    let name, filter, order;
    if( url != "") {
        // Разбираем адрес на части
        filter = url.split('&');

        $.each(filter,function(index,value){
            // Фильтр
            if( value.indexOf('filter') != "-1"){
                name = value.split("=")[0].match(/filter_([^&]+)/)[1];
                $(".collection .collection__filter .label.label_link[data-filter=knv_layered_nav-"+ name +"]").addClass("label_link--active");
            }
            // Сортировка
            if( value.indexOf('orderby') != "-1"){
                $(".collection .collection__filter .label.label_link[data-filter=sort]").addClass("label_link--active");
            }
        });
    }
    $(document).mouseup(function (e){ // событие клика по веб-документу
        let collectionActive = $(".collection-aside.collection-aside--active"); // элемент
        if (!collectionActive.is(e.target) // клик был не по блоку
            && collectionActive.has(e.target).length === 0 // и не по его дочерним элементам
            && !$(".collection-aside .collection-aside__close").is(e.target) ) { 
                if( $(".overlay").hasClass("overlay--aside") ){ 
                    $(".overlay").addClass("overlay--disable");
                    $(".overlay").removeClass("overlay--aside");
                }
                if( $("body").hasClass("open-aside") ){ 
                    $("body").removeClass("hidden"); 
                    $("body").removeClass("open-aside"); 
                }
                $(".collection-aside").removeClass("collection-aside--active");
        
                // запись информации о закрытии фильтра на странице
                sessionStorage.clear();
                $(".collection-aside[data-collection=filter]").removeAttr("style");
            }
    });

    // Проверка информации о фильтре при загрузке
    let pageActive = location.pathname;
    let pageFilter = sessionStorage.getItem("url");

    if( pageFilter != null ){
        if( pageFilter != pageActive){
            // Фильтр был открыт, но сейчас мы на другой странице;
            sessionStorage.clear();
        } else{
            $(".collection-aside[data-collection=filter]").attr("style", "transition: 0s;");

            $(".overlay").addClass("overlay--aside");
            $(".overlay").removeClass("overlay--disable");

            $("body").addClass("hidden open-aside");
            
            $(".collection-aside[data-collection=filter]").addClass("collection-aside--active");
        }
    };

});