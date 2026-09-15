(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


    // Hero resize

    function mainHeroResize() {
        $(".main-slider .slides li").css('height', $(window).height());
    }

    $(function() {
            mainHeroResize()
        }),
        $(window).resize(function() {
            mainHeroResize()
        });


    // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + 500 && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
            });
        } else if ($(this).scrollTop() <= pos.top + 500 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
            });
        }
    });



    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -57
    });


    // Slider

    $('.slider').flexslider({
        animation: "fade",
        slideshow: true,
        directionNav: true,
        controlNav: false,
        pauseOnAction: false,
        animationSpeed: 500
    });


    $('.review-slider').flexslider({
        animation: "slide",
        slideshow: true,
        slideshowSpeed: 15000,
        directionNav: true,
        controlNav: false,
        pauseOnAction: false,
        animationSpeed: 500
    });



    // Mobile menu

    var mobileBtn = $('.mobile-but');
    var nav = $('.main-nav ul');
    var navHeight = nav.height();

    $(mobileBtn).on("click", function() {
        $(".toggle-mobile-but").toggleClass("active");
        nav.slideToggle();
        $('.main-nav li a').addClass('mobile');
        return false;


    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && nav.is(':hidden')) {
            nav.removeAttr('style');
            $('.main-nav li a').removeClass('mobile');
        }

    });

    $('.main-nav li a').on("click", function() {
        if ($(this).hasClass('mobile')) {
            nav.slideToggle();
            $(".toggle-mobile-but").toggleClass("active");
        }

    });



    // Append images as css background, fading each one in only once it has fully loaded

    for (var i = 0; i < $('.background-img').length; i++) {

        var el = $('.background-img').eq(i);
        var path = el.children('img').attr('src');
        el.addClass('parallax');
        el.children('img').detach();
        el.css('background-position', 'initial');

        var preload = new Image();
        preload.onload = function(el, path) {
            return function() {
                el.css('background', 'url("' + path + '")');
                el[0].offsetHeight; // force reflow so the opacity transition reliably fires
                el.addClass('loaded');
            };
        }(el, path);
        preload.src = path;

    }




    // Tabbed content 

    $(".block-tabs li").on("click", function() {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $(".block-tabs li.active").removeClass("active");
            $(this).addClass("active");
            $(".block-tab li.active").removeClass("active");
            $(".block-tab li:nth-child(" + nthChild + ")").addClass("active");
        }
    });


    // Special zoom	

    $('.block-special').on("mouseenter", function() {
        $(this).closest('.special').find('.block-special').removeClass('active');
        $(this).addClass('active');
    });


})(jQuery);




