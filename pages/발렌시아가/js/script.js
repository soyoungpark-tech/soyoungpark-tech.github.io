'use stcict';


// main-banner-active
$(document).ready(function(){
    $('.main__banner').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

// nav bar
$(function(){

    var $navbarItem = $('.navbar__item'),
        $navbarMenu = $('.navbar__menu'),
        $subMenu = $('.navbar__submenu');
    $subMenu.hide();

    $navbarItem.mouseenter(function(){
        $(this).children('.navbar__submenu').stop().slideDown();
        $(this).children('a').addClass('active');
    });
    $navbarItem.mouseleave(function(){
        $(this).children('.navbar__submenu').stop().slideUp();
    });


})