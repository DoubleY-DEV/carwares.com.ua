$(function() {

	/* Шапка сайта - Поиск */
    $('.h-search__input').on('keyup',function(){

        var $this = $(this),
            val = $this.val();

        if(val.length >= 1){
        	$(this).addClass('h-search__input-visible');
            $('.h-search__toggle').fadeIn(100);
        }else {
            $(this).removeClass('h-search__input-visible');
            $('.h-search__toggle').fadeOut(100);
        }

    });

    /* Шапка сайта - Услуги */
    $('.h-serv').hover(function() {
    	$(this).children('.h-servlist').stop(true, false).fadeIn(100);
	}, function() {
        $(this).children('.h-servlist').stop(true, false).fadeOut(100);
	});

    /* Шапка сата - Ширина окна корзины */
    var el1 = $('.h-basket').width();
    var el2 = $('.h-outfit').width();
    var formul1 = el1 + el2 + 8;
    $('.h-basket__toggle').css({
		'width': formul1 + 'px'
	});

    /* Шапка сайта - Корзина */
    $('.h-basket').hover(function() {
    	$('.h-basket__toggle').stop(true, false).fadeIn();
	}, function() {
        $('.h-basket__toggle').stop(true, false).fadeOut();
	});

    /* Шапка сайта - Телефон */
    $('.h-phone__current').hover(function() {
        $(this).parent().children('.h-phone__modal').stop(true, false).fadeIn(100);
    }, function() {});
    $('.h-phone__modal').hover(function() {}, function() {
        $(this).stop(true, false).fadeOut(100);
    });

    /* Шапка сайта - Модалка об успешной отправке */
    $('.fb-modal').fancybox();

    /* Маска телефона для input */
    $('.input-mask-phone').inputmask("+38 (099) 999-99-99");

    /* Шапка сайта - Мобильное меню */
    $('.m-nav__link-submenu').on('click', function() {
        $(this).toggleClass('m-nav__link-active');
        $(this).parent().children('.m-nav__sublist').slideToggle(100);
        return false;
    });

    /* Делаем первый баннер на главной странице на всю высоту первого экрана */
    var firstWindowHeight = $('.index-100vh').height();
    var headerHeight = $('.header').height();
    $('.section-1 .section-1__container').css({
        'min-height': firstWindowHeight - headerHeight + 'px'
    });
    $('.section-32').css({
        'min-height': firstWindowHeight - headerHeight + 'px'
    });

    /* Анимация для маркерованного списка */
    setInterval(function() {
        $('.s4-info__icon').toggleClass('my-animation');
    }, 1000);

    /* Слайдер работ */

    $('.s7-slider__top').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        fade: false,
        asNavFor: '.s7-slider__bottom',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });
    $('.s7-slider__bottom').slick({
        slidesToShow: 12,
        slidesToScroll: 1,
        asNavFor: '.s7-slider__top',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });

    /* Слайдер сертификатов */
    $('.s9-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    /* Слайдер партнеров */
    $('.s10-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: false
    });

    /* Главная - Читать дальше */
    $('.s12-bottom__more').on('click', function() {
        $('.section-12__more').hide();
        $('.section-12').removeClass('section-12-hidden');
        return false;
    });

    /**/
    $('.s32-video__item').on('click', function() {
        $('.s31-map').show();
        return false;
    });

    /* Fancybox */
    $('.fb-img').fancybox();


});