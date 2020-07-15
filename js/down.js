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

    $('.xiaomiphone').mousemove(function () {
        $(this).find('.down-nav-mi').stop(false, true).slideDown();
        $('.down-nav-readmi').css('display','none');    // 防止动画未加载完毕
    }).mouseleave(function () {
        $(this).find('.down-nav-mi').stop(false, true).slideUp();
    });
    $('.readmiphone').mousemove(function () {
        $('.down-nav-tv').css('display','none');
        $('.down-nav-mi').css('display','none');
        $(this).find('.down-nav-readmi').stop(false, true).slideDown();
    }).mouseleave(function () {
        $(this).find('.down-nav-readmi').stop(false, true).slideUp();
    });

    $('.tv').mousemove(function () {
        $('.down-nav-readmi').css('display','none');    // 防止动画未加载完毕

        $(this).find('.down-nav-tv').stop(false, true).slideDown();
    }).mouseleave(function () {
        $(this).find('.down-nav-tv').stop(false, true).slideUp();
    });
});