$(function () {
    let nav = $('nav'),
        nav_switch = $('.nav-switch');

    nav_switch.click(function () {
        if(nav.hasClass('show')){
            nav.removeClass('show');
            nav_switch.removeClass('reversal');
        }else{
            nav.addClass('show');
            nav_switch.addClass('reversal');
        }
    });
});