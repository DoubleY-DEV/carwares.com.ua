$(function() {
    /* Главная. Элемент фильтра. в дальнейшем AJAX */
    var fixBlock = $('#calc-fixed').offset().top + $('#calc-fixed').height();
    $('.s3-filter__link').on('click', function() {
        if($(this).hasClass('s3-filter__link-black')) {
            $('.s3-filter__link').removeClass('s3-filter__link-active');
            $('.s3-loading').hide();
            fixBlock = $('#calc-fixed').offset().top + $('#calc-fixed').height();
        } else {
            $(this).toggleClass('s3-filter__link-active');
            if($('.s3-filter__link').hasClass('s3-filter__link-active')) {
                $('.s3-loading').show();
            } else {
                $('.s3-loading').hide();
            }
            fixBlock = $('#calc-fixed').offset().top + $('#calc-fixed').height();
        }
        return false;
    });

    /* Главная - плавающий блок - калькулятор */
    /*calc-block*/
    /*calc-fixed*/
    $(window).scroll(function() {
        if($('#calc-block').offset().top + 220 < document.documentElement.scrollTop && fixBlock > document.documentElement.scrollTop + $(window).height()) { // узнаем текущее положение блока и сравниваем ее со скроллом
            $('#calc-fixed').addClass('fixed');
        } else {
            $('#calc-fixed').removeClass('fixed');
        }
    });

    /*
    $('.s3-service__item').on('click', function() {
        if(!$(this).hasClass('s3-service__item-active')) {
            $(this).addClass('s3-service__item-active');
            console.log("нажатие");
            $(this).children('.s3-service__check').attr("checked", "checked");
            return false;
        }
    });
    */

    var sum = 0;
    var count = 0;

    $('.s3-service__math-minus').on('click', function() {
        var value = Number($(this).parent().children('.s3-service__input').val());
        if(value > 1) {
            value--;
            $(this).parent().children('.s3-service__input').val(value);
            var price = Number($(this).parent().parent().parent().children('.s3-service__check').data('price'));
            sum = sum - price;
            $('#sum').text(sum);
        }
        return false;
    });
    $('.s3-service__math-plus').on('click', function() {
        var value = Number($(this).parent().children('.s3-service__input').val());
        if(value > 0) {
            value++;
            $(this).parent().children('.s3-service__input').val(value);
            var price = Number($(this).parent().parent().parent().children('.s3-service__check').data('price'));
            sum = sum + price;
            $('#sum').text(sum);
        }
        return false;
    });

    $('.s3-service__label').on('click', function() {
        if($(this).parent().children('.s3-service__check').prop('checked')) {
            sum = sum - Number($(this).parent().children('.s3-service__check').data('price'));
            count--;
        } else {
            sum = sum + Number($(this).parent().children('.s3-service__check').data('price'));
            count++;
        }
        $('#count').val(count);
        $('#sum').text(sum);
        console.log('Количество услуг: ' + count + ' | Сумма: ~ ' + sum + ' ₴');
    });


});