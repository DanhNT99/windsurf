$(document).ready(function(){
    $(window).scroll(()=> {
        if($(window).scrollTop() > 0) {
            $('.header').addClass('header-activity');
        }
        else {
            $('.header').removeClass('header-activity');
        }
        if($(window).scrollTop() > 100){
            $('.btn-scroll').css({'display':'flex', 'animation':'animateShow 0.5s forwards ease'});
        }
        else {
            $('.btn-scroll').css({'display': 'none'})
        }
    })
    $('.btn-scroll').click(()=> {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    })
    
    var flag = 1;
    $('.mobile-position').click(()=> {
        //if 0 => mặt trăng hiện là sáng, 1 => mặt trời hiện
        if(flag == 0) {
            $('.icon-moon').show();
            $('.icon-sun').hide();
            flag = 1;
        }
        else {
            $('.icon-moon').hide();
            $('.icon-sun').show();
            flag = 0;
        }
    })

    $('.showSildeMain').slick({
        dots: true,
        speed: 500,
        slidesToShow:2, 
        slidesToScroll:2, 
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
    
    // $('.dropdown').on('show.bs.dropdown', function () {
    //     //trước khi hiện;
    //     let dropdownMenu = $('.dropdown > div.dropdown-menu');
    //         dropdownMenu.removeClass('close');
    //         dropdownMenu.removeClass('none');
    //   })

    // $('.dropdown').on('hide.bs.dropdown', function () {
    //     //trước khi ẩn
    //     let dropdownMenu = $('.dropdown > div.dropdown-menu.show')
    //         dropdownMenu.addClass("close");
    //     $('div.dropdown-menu').on('transitionend', function () {
    //             $('div.dropdown-menu').addClass('none');
    //     })
    //   })

})
// var listNavLink = document.querySelectorAll('.nav-link');
// listNavLink.forEach((link)=> {
//     link.addEventListener('click', ()=> {
//         var dropMenu = link.nextElementSibling;
//         dropMenu.classList.add('close');
//     })
// })

