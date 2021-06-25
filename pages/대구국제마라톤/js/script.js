'use strict';

$(function(){
    /* ================= modal ===================== */
        var $modal = $('.notice');
        var $btnClose = $('.notice-modal__close');

        $btnClose.click(function(){
            $modal.hide();
        })
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

    })

  /* ================= nav submenu ===================== */
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