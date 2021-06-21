'use strict';

$(function(){

/* ===================== slider effect ===================== */
    AOS.init({
        once: true,
        duration: 500,
        debounceDelay: 50
    });

/* ================= navbar ===================== */
    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
});
    var $navToggle = $('.nav-icon-7'),
        $navList = $('.nav__list'),
        $dimmed = $('#dimmed');
    
    $navToggle.click(function(){
        $dimmed.toggleClass('visible');
        $(this).toggleClass('active');
        $navList.toggleClass('visible');
    })

});
    /* ================= navbar 이동 ===================== */
    var $navItem = $('.nav__item');
    $navItem.click(function(e){
        e.preventDefault();
        var link = $(this).children('a').attr('data-link');
        var $target = $(link);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
        $('.nav__container').removeClass('visible');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    /* ================= About ================= */
    $('.stoudyCount, .pracCount, .projectCount').each(function () {
        $(this).prop('Counter',0).animate({
                Counter: $(this).text()
        }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
            }
        });
    });

    /* ================= skill tabs ================= */
    $('.skills__header').click(function(){
        $(this).children('.skill__icon--arrow').toggleClass('active');
        $(this).siblings('.skill__data').stop().slideToggle();
    })

    /* ================= qualifictaion ================= */
    var $qualificationTab = $('.qualification__tab');
    var $qualificationContent = $('.qualification__content');
    $qualificationContent.eq(1).hide();
    $qualificationTab.click(function(e){
        // e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var idx = $(this).index();
        $qualificationContent.hide();
        $qualificationContent.eq(idx).show();
    })

    /* ================= scroll up ================= */
    var skillsDistance = $('#skills').offset().top;
    var $scrollUp = $('.scrollup');
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if( scrollTop > skillsDistance ){
            $scrollUp.addClass('visible');
        }else{
            $scrollUp.removeClass('visible');
        }
    })
    $scrollUp.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0});
    })

    /* ================= slick banner works ================= */
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    // modal
    var $modal = $('.modal');
        var $overlay = $('.overlay');
        var $btn = $('.detail_modal');
        var $btnClose = $('.close__modal');
        var $modalImg = $('#modalImg');
        $overlay.hide();
        $btn.click(function(){
            
            var imgSrc = $(this).attr('data-img');
            console.log(imgSrc)
            // var imgSrc = "";
            $modalImg.attr('src', imgSrc);
            $overlay.fadeIn();
        })
        $btnClose.click(function(){
                $overlay.fadeOut();
            })
            $overlay.click(function(e){
                if(e.target == e.currentTarget){
                    $(this).fadeOut();
            }
        });

});



