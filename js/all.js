$(document).ready(function () {
    $(window).resize(function () {
        funCheckSticky();
    });

    function funCheckSticky() {
        if ($(window).width() <= 768) {
            $("#pcmenu-sticky-wrapper").unstick();
        } else {
            $("#pcmenu-sticky-wrapper").sticky({ topSpacing: 0 });
        }
    }

    funCheckSticky();

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            }
        }
    });

    $('#newsContent__prev').click(function (e) {
        e.preventDefault();
        swiper.slidePrev();
    });

    $('#newsContent__next').click(function (e) {
        e.preventDefault();
        swiper.slideNext();
    });

    $('.logo_showMenuBtn').click(function (e) {
        e.preventDefault();
        $('body').addClass('overflow__hidden');
        $('.sticky-wrapper').addClass('sticky-wrapper--active');
    });

    $('.menuMHeader__close').click(function (e) {
        e.preventDefault();
        $('body').removeClass('overflow__hidden');
        $('.sticky-wrapper').removeClass('sticky-wrapper--active');
    });

    $('.headerMenu__link').click(function (e) {
        if (!$(this).parent().find('.headerMenu__subMenu').length) return;
        e.preventDefault();
        $('.headerMenu__link img').attr('src', 'theme/frontend/img/icon/Plus.svg');
        $(this)
            .find('img')
            .attr('src', 'theme/frontend/img/icon/-.svg');
        if (
            $(this)
                .closest('.headerMenu__item')
                .hasClass('headerMenu__item--active')
        ) {
            $(this)
                .find('img')
                .attr('src', 'theme/frontend/img/icon/Plus.svg');
        }
        $(this)
            .closest('.headerMenu__item')
            .toggleClass('headerMenu__item--active')
            .siblings('.headerMenu__item')
            .removeClass('headerMenu__item--active');
    });

});
