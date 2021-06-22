'use strict';

$(function(){
    
/* ================= navbar ===================== */
        var $navItem = $('.nav__container ul li a'),
        $subMenu = $('.nav__submenu');
        // console.log($navItem);
        $subMenu.hide();

        $navItem.mouseover(function(){
            $($subMenu).stop().slideDown();
        });
        $subMenu.mouseleave(function(){
            $(this).stop().slideUp();
        });

/* ================= main banner ===================== */
    $('.main__banner').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

/* ================= tab menu ===================== */
    var $item = $('.tab__item');
    var $tabMenu = $('.tab__menu a');
    var $secondItem = $('.tab__item:nth-of-type(2)')
    var $thirdItem = $('.tab__item:nth-of-type(3)')
    // 초기 세팅

    $secondItem.hide();
    $thirdItem.hide();
    // $desc.eq(0).show();
    // $tabMenu
    $tabMenu.mouseover(function(){
        var idx = $(this).index();
        $tabMenu.removeClass('selected');
        $(this).addClass('selected');
        $item.hide();
        $item.eq(idx).stop().slideDown();
    });
        

})