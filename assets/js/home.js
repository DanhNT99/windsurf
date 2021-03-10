$(document).ready(function(){

//function

      //change color header
      function changeColorheader () {
        if($(window).scrollTop() > 0) {
            $('.header').addClass('headerActivity');
        }
        else {
          $('.header').removeClass('headerActivity');
        }
      }
      //end

      //fixed header bottom
      var indexHeadeBottom = $('.header__bottom').offset().top;
      function fixedHeaderBottom(x) {

        let heightScrollWindow = $(window).scrollTop();

        if($(window).width() < 991) {
          console.log(indexHeadeBottom);
          if(heightScrollWindow > x) {
            $('.header__bottom').addClass('fixedHeaderBottom');
            $('.header__bottom').animate({top: 0}, 5000);
            $('.header').css({'position' : 'static'});
          }

          else {
            $('.header__bottom').removeClass('fixedHeaderBottom');
            $('.header').css({'position' : 'fixed'});
          }

        }

      }


      //show btn scroll top
      function showBtnScrollTop() {

        if($(window).scrollTop() > 100){
          $('.btnScrollTop').css({'display':'flex', 'animation':'animateShow 1s forwards ease'});
        }

        else {
          $('.btnScrollTop').attr('style', 'animation :animateClose 1s forwards ease;');
        }
      }

      //khoảng cách đến menu của form search and menu
    function aboutToHeader() {

      if($(window).width() < 991) {
        $('.header__bottomMenu').css({top: $('.header').outerHeight()});
        $('.header__bottomMenuContainsForm').css({top: $('.header').outerHeight()});

          if($(window).scrollTop() > 40) {
            let heightHeaderBottom= $('.header__bottom').outerHeight() - 1 ;
            $('.header__bottomMenu').css({top: heightHeaderBottom,height: '100%'});
            $('.header__bottomMenuContainsForm').css({top: heightHeaderBottom});
          }
        }   
    }

    function toggleClassFormSearch() {

      if($(window).width() > 991) {
        $('.header__bottomMenuContainsForm').css({top: 0});
      }

    }

    //sliderToggle of menu dropdown in mobile
    function toggleClassOfMenu() {

      if($(window).width() < 991) {

        $('.header__bottomMenuListItem').removeClass('showAllMenuDrop');
      }

      else {
        $('.header__bottomMenuListItem').addClass('showAllMenuDrop');
      }

    }

    //show and close video
    function toggleClassVideo() {
      $('.video__containsClip').toggleClass('showClip');
      $('.video__overlayClip').toggleClass('showOverlay');
      $('body').toggleClass('closeScrollBody');
      $('.video__overlayClipBtnClose').slideToggle(0);
    }
//end function





//all event click 

    //click btn show menu sub
    $('.header__bottomMenuListItemIcon').click(function(){

      $(this).next('.header__bottomMenuDropdown').slideToggle();

    })
    //end 

    //click btn  scroll to top
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

    //click show input on desktop
    $('.header__bottomMenuBtnSearch').click(()=> {
      $('.header__bottomMenu').animate({opacity: 0}, 100);
      $('.header__bottomMenuContainsForm').addClass('showInput');
      $('.header__bottomMenuInputSearch').focus();
    })

    $(window).on('click',function(event){
      let clickNameClass =  '.' + event.target.className;
      let flag = $(clickNameClass).hasClass('header__bottomMenuBtnSearch') || $(clickNameClass).hasClass('header__bottomMenuInputSearch');
      if(!flag){
        $('.header__bottomMenuContainsForm').removeClass('showInput');
        $('.header__bottomMenu').animate({opacity: 1}, 1000);
      }
    })
    //end

    //show input on mobile
    $('.header__bottomIcon').click(function (e) { 
      e.preventDefault();
      $('.header__bottomIcon').toggleClass('changeIcon');
      $('.header__bottomMenuContainsForm').toggleClass('formSearchRightToLeft');
      $('.header__bottomMenuInputSearch').focus();
      $('body').toggleClass('closeScrollBody');
    });

    //click btn mouse on bannber to scroll down
    $('.banner__bottom').click(()=> {

      let indexVideo = $('.video').offset().top;
      let headerHeight = $('.header').outerHeight();

      if($(window).width() < 991) {
        headerHeight = $('.header__bottom').outerHeight() - $('.header__top').outerHeight() - 1;
      }

      $('html, body').animate({ scrollTop:  indexVideo - headerHeight}, 1000);
    })
    //end

    //show video
    $('.video__rightBtn').on('click', ()=>{
        toggleClassVideo();

    })
    
    //close video
    $('.video__overlayClipBtnClose').on('click',()=> {
      toggleClassVideo();
    })

//end event click

//all slide of slick

    //slider member
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
      nextArrow: false,
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

//end  slide of slick

//event window
    //window sroll change color menu and show btnTop
    $(window).scroll(()=> {

      //change color header
      changeColorheader();

      //scroll show btn scroll top
      showBtnScrollTop();

      //fixed header bottom
      fixedHeaderBottom(indexHeadeBottom);

      //khoảng cách đến menu của form search and menu
      aboutToHeader();
    })
    //end

    //window change screen 
    $(window).resize(function () { 

      toggleClassFormSearch();
      
      toggleClassOfMenu();

      aboutToHeader();

    });

    //window load
    $(window).on('load',function() {

      if($(window).width() < 991) {

        $('.header__bottomMenuListItem').removeClass('showAllMenuDrop');
        
      }

      aboutToHeader();

    })
//end event window


})

