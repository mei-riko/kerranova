import $ from 'jquery'
$(document).ready(() =>{
    // Mobile Navbar
    $(".header .header__nav#open-nav").on("click", function(){
        $(".navbar.navbar_header").addClass("navbar_header--active");
        $(".overlay").addClass("overlay--navbar");
        $(".overlay").removeClass("overlay--disable");
        $("body").addClass("hidden open-navbar");
    });
    $(".navbar.navbar_header #close-nav").on("click", function(){
        $(".navbar.navbar_header").removeClass("navbar_header--active");
        $(".navbar .navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");

        $(".overlay").removeClass("overlay--navbar");
        $(".overlay").addClass("overlay--disable");
        
        $("body").removeClass("hidden");
        $("body").removeClass("open-navbar");
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        let navActive = $(".navbar.navbar_header.navbar_header--active"); // элемент
        if (!navActive.is(e.target) // клик был не по блоку
            && navActive.has(e.target).length === 0 // и не по его дочерним элементам
            && !$(".navbar.navbar_header #close-nav").is(e.target) ) { 
                if( $(".overlay").hasClass("overlay--navbar") ){ 
                    $(".overlay").addClass("overlay--disable"); 
                    $(".overlay").removeClass("overlay--navbar");
                }
                if( $("body").hasClass("open-navbar") ){ 
                    $("body").removeClass("hidden"); 
                    $("body").removeClass("open-navbar");
                }
                $(".navbar .navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");
                $(".navbar.navbar_header").removeClass("navbar_header--active");
            }
    });
    
    function navbarMobileClick( itemNav ){
        itemNav.on("click", function(e){
            if( $(".navbar").hasClass("navbar--mobile") ){
                e.preventDefault();
                let id = $(this).data("nav");
                let navbar = $(".navbar-inside#" + id);
                if( !navbar.hasClass("navbar-inside--active")){
                    navbar.addClass("navbar-inside--active");
                }
            }
        });
    }

    // Desktop Navbar   
    function navbarHover( itemNav ){
        let item = itemNav.find(".navbar__item");
        let nav = item.data("nav");

        if( $(".navbar").hasClass("navbar--desktop") ){
            if($(".navbar__item.navbar__item--active").length > 0 && !item.hasClass("navbar-inside--active") ){
                let navActive = $(".navbar__item.navbar__item--active");
                navActive.removeClass("navbar__item--active");
                $(".navbar-inside#" + navActive.data("nav")).removeClass("navbar-inside--active");
            }
            item.addClass("navbar__item--active");
            $(".navbar-inside#" + nav).addClass("navbar-inside--active");
        }
    }
    function navbarUnHover(){
        let item = $(".navbar").find(".navbar__item.navbar__item--active");
        let nav = item.data("nav");

        if( $(".navbar").hasClass("navbar--desktop") ){
            item.removeClass("navbar__item--active");
            $(".navbar-inside#" + nav).removeClass("navbar-inside--active");
        }
    }

    if ( $(window).width() > 1400 || !window.matchMedia('screen and (max-width: 1400px)').matches ){
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }

    // Desktop Hover Nav
    var timeout = null;
    // Задержка скрытия меню 0.5сек
    $('.navbar.navbar_header .navbar_header__parent').mouseenter(function(){
        clearTimeout(timeout);
        navbarHover( $(this) );
    });    
    $('.navbar.navbar_header .navbar_header__parent').mouseleave(function(){
        clearTimeout(timeout);
        timeout = setTimeout( navbarUnHover , 500);
    });
    
    // Mobile Click Nav
    navbarMobileClick( $(".navbar.navbar_header .navbar_header__parent .navbar__item") );
    
    $(".navbar.navbar_header .navbar_header__back").on("click", function(e){
        // e.preventDefault();
        let id = $(this).data("close");
        let navbar = $(".navbar-inside#" + id);
        // console.log( id + '   ' + navbar)
        navbar.removeClass("navbar-inside--active");
    });

    // Resize
    $(window).resize(function(){
        if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
            // Hide Navigation on Desktop
            $(".navbar.navbar_header").removeClass("navbar_header--active");
            $(".navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");
            
            if( $(".overlay").hasClass("overlay--navbar") ){ 
                $(".overlay").addClass("overlay--disable"); 
                $(".overlay").removeClass("overlay--navbar");
            }
            if( $("body").hasClass("open-navbar") ){ 
                $("body").removeClass("hidden"); 
                $("body").removeClass("open-navbar");
            }

            // Remove Class
            $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
        }else{
            // Remove Class
            $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
        }
    });
});