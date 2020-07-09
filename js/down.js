$(function () {
     let st = 200;
    $('.download').mouseenter(function () {
        $(this).find('.down-box').stop(false, true).slideDown(st);
    }).mouseleave(function () {
        $(this).find('.down-box').stop(false, true).slideUp(st);
    });

    $('.car-box').mouseenter(function () {
        $(this).find('.down-shop').stop(false, true).slideDown(st);
    }).mouseleave(function () {
        $(this).find('.down-shop').stop(false, true).slideUp(st);
    });
});