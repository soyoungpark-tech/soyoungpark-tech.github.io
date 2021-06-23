'use strict';

$(function(){
    
        /* ================= navbar ===================== */
        var $header = $('#header');
        var $navItem = $('.nav__item');

        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var headerHeight = $('#header').outerHeight();
            var homeHeight = $('#home').outerHeight();
    
            if( scrollTop > headerHeight ){
                $header.addClass('fixed');
                $navItem.children().addClass('fixed');
                $navItem.children().addClass('active');
            }else{
                $header.removeClass('fixed');
                $navItem.children().removeClass('fixed');
            }
    
            // aboutSection을 지나치면 보여라
            // scrollTop 값이 about section 높이보다 커지면
            // if( scrollTop > aboutHeight ){
            //     $arrowUp.addClass('visible');
            // }else{
            //     $arrowUp.removeClass('visible');
            // }        
    
        })

        /* nav submenu */
        var $navItem = $('.nav__item'),
            $navMenu = $('.nav__link'),
            $subMenu = $('.nav__submenu');
        // console.log($subMenu);
        $subMenu.hide();

        $navItem.mouseenter(function(){
            $(this).children('.nav__submenu').stop().slideDown();
        });
        $navItem.mouseleave(function(){
            $(this).children('.nav__submenu').stop().slideUp();
        });

})