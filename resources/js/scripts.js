$(document).ready(function () {
    /*just a sample - changes background color of headline on click
    $('h1').click(function () {
        $(this).css('background-color', '#ff0000');
    })*/

    /* For sticky navigation - to stay at top when scrolling down */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=1])').click(function () {
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });
    });

    /* Animation on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
            offset: '50%'
        });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
            offset: '50%'
        });

    /* Animation on scroll */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
        if ($(".js--mobile-icon-menu-opened").hasClass("not-hidden")) {
            $('.js--mobile-icon-menu-opened').removeClass('not-hidden');
            $('.js--mobile-icon-menu-opened').addClass('hidden');
            $('.js--mobile-icon-menu-closed').removeClass('hidden');
            $(".js--mobile-icon-menu-closed").addClass("not-hidden");
        } else {
            $('.js--mobile-icon-menu-opened').removeClass('hidden');
            $('.js--mobile-icon-menu-opened').addClass('not-hidden');
            $('.js--mobile-icon-menu-closed').removeClass('not-hidden');
            $(".js--mobile-icon-menu-closed").addClass("hidden");
        }
    })
})