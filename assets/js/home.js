$(document).ready(function () {
    //show menu in mobile
    $('.header-icon-bar').click(()=> {
        $('.menu').addClass('menu-active')
    })
    //close menu in mobile
    $(window).click((e) => {
        if(!e.target.closest('.menu') && !e.target.closest('.header-icon-bar')) {
            $('.menu').removeClass('menu-active')
        }
    })
    $(".menu-icon-close").click(function (e) { 
        $('.menu').removeClass('menu-active')
    });
    //window scroll
    $(window).scroll(function () { 
        //header-active
        if($(window).scrollTop() > 0) {
            $(".header").addClass('header-active');
        } else {
            $(".header").removeClass('header-active');
        }
        //show btn scroll top 
        if($(window).scrollTop() > 200) {
            $(".btn-scroll-top").removeClass('btn-scroll-top-hide').addClass('btn-scroll-top-show');
        } else {
            $(".btn-scroll-top").removeClass('btn-scroll-top-show').addClass('btn-scroll-top-hide');
        }
    });
    //scroll up
    $('.hero-bottom').click(function (){ 
        let indexBottomVideo = $('.video').offset().top;
        let heighHeader = $('.header').height();
        $('html, body').animate({scrollTop: `${indexBottomVideo - heighHeader}px`})
        
    })
    //scroll top
    $('.btn-scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        })
    });
    //run progress bar
    $(window).scroll(function () { 
        let indexTopProgress = $('.progress').offset().top
        if($(window).scrollTop() > indexTopProgress - 200) {
            $('.progress-item-bar').addClass('progress-item-bar-active')
        }
        else {
            $('.progress-item-bar').removeClass('progress-item-bar-active')
        }
    });
    //show menu drop in mobile
    $('.menu-icon').click(function (e) { 
        e.preventDefault()
        $(".menu-child").toggleClass('menu-child-active');
    });
    
    $(window).on('load',function (e) { 
        addCLassMenuItem()
    });
    $(window).resize(function (e) { 
        addCLassMenuItem()
    });
    function addCLassMenuItem () {
        if($(window).width() < 1024) {
            $('.menu-child').parent().removeClass('has-child')
        }
        else {
            $('.menu-child').parent().addClass('has-child')
        }
    }
    //slider review
    $('.review-slider').slick({
        dots: true,
        speed: 500,
        slidesToShow:2, 
        slidesToScroll:2, 
        autoplay: true,
        arrows : false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                 }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})