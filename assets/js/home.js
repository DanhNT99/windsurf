$(document).ready(function(){

  //window sroll change color menu and show btnTop
    $(window).scroll(()=> {

        if($(window).scrollTop() > 0) {
            $('.header').addClass('headerActivity');
        }
        else {
            $('.header').removeClass('headerActivity');
        }

        if($(window).scrollTop() > 100){
            $('.btnScrollTop').css({'display':'flex', 'animation':'animateShow 0.5s forwards ease'});
        }
        else {
            $('.btnScrollTop').css({'display': 'none'})
        }

    })
    //end

    //click btn để màn hình scroll lên top 0
    $('.btnScrollTop').click(()=> {

        $('html, body').animate({ scrollTop: 0 }, 1000);

    })
    //end

    //click show menu mobile
    $('.header__bottomBtnBar').click(()=> {

      $('.header__bottomBtnBar .show').toggle();

      $('.header__bottomBtnBar .close').toggle();

      $('.header__bottomMenu').toggleClass('headerMenuToRight');

      $('body').toggleClass('closeScrollBody');

    })
    //end

    //sliderToggle of menu dropdown in mobile
    if($(window).width() < 991) {

      $('.header__bottomMenuListItem').removeClass('showAllMenuDrop');

      $('.header__bottomMenuListItemIcon').click(function(){

        $(this).next('.header__bottomMenuDropdown').slideToggle();

      })

    }
    // end

    //click show input in menu
    $('.header__bottomMenuBtnSearch').click(()=> {
      $('.header__bottomMenu').addClass('showInput');
      $('.header__bottomMenuInputSearch').focus();
    })

    $(window).on('click',function(event){
      var clickNameClass =  '.' + event.target.className;
      var flag = $(clickNameClass).hasClass('header__bottomMenuBtnSearch');
      if(!flag) {
        $('.header__bottomMenu').removeClass('showInput');
      }
    })

    //ẩn hiện icon sun và moon
    //end
    $('.header__bottom-icon').click(()=> {
      $('[bg ="changeColor"]').css({'background': '#111'});
    })

    //click btn mouse on bannber to scroll down
    $('.banner__bottom').click(()=> {
      let bannerHieght = $(".banner").outerHeight();
      let headerHeight = $('.header').outerHeight();
      $('html, body').animate({ scrollTop: bannerHieght - headerHeight }, 1000);
    })
    //end

    //show and close video
    function toggleClassVideo() {
      $('.video__containsClip').toggleClass('showClip');
      $('.video__overlayClip').toggleClass('showOverlay');
      $('body').toggleClass('closeScrollBody');
    }
    $('.video__rightBtn').on('click', ()=>{
        toggleClassVideo();
    })
    //close video
    $('.video__overlayClipBtnClose').on('click',()=> {
      toggleClassVideo();
    })

    //slider of member
    $('.showSildeMember').slick({
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


    // slider of post
    $('.showSilderPost').slick({
      dots: true,
      speed: 500,
      slidesToShow:1, 
      slidesToScroll:1,
      prevArrow : false, 
      // prevArrow: '<button type="button" class="btnSliderSlickPrev prev"><i class="fas fa-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="btnSliderSlickNext next"><i class="fas fa-arrow-right"></i></button>',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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

