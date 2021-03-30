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
      
      function fixedHeaderBottom() {

        if($(window).width() <= 991) {

          if($(window).scrollTop()> 0) {
            let heightHeaderTop = $('.header__top').height();
              $('.header').css({top: -heightHeaderTop});
          }

          else {
            $('.header').css({top: 0}, 500);
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

    function aboutToHeader() {

      if($(window).width() <= 991) {
        $('.header__bottomMenu').css({top: $('.header').outerHeight()});
        $('.header__bottomMenuContainsForm').css({top: $('.header').outerHeight()});


          if($(window).scrollTop() > 0) {
            let heightHeaderBottom= $('.header__bottom').outerHeight() - 1 ;
            $('.header__bottomMenu').css({top: heightHeaderBottom});
            $('.header__bottomMenu').addClass('changeHeight');
            $('.header__bottomMenuContainsForm').css({top: heightHeaderBottom});
          }
          else {
            $('.header__bottomMenu').removeClass('changeHeight');
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

      $('html, body').toggleClass('closeScrollBody');

    })
    //end

    //click show input on desktop
    $('.header__bottomMenuBtnSearch').click(()=> {
      $('.header__bottomMenu').animate({opacity: 0}, 500);
      $('.header__bottomMenuContainsForm').addClass('showInput');
      $('.header__bottomMenuInputSearch').focus();
    })

    $(window).on('click',function(event){
      let clickNameClass =  '.' + event.target.className;
      let flag = $(clickNameClass).hasClass('header__bottomMenuBtnSearch') 
                  || $(clickNameClass).hasClass('header__bottomMenuInputSearch')
                  || clickNameClass.includes('header__bottomMenuBtnSearchIcon');
      if(!flag){
        $('.header__bottomMenuContainsForm').removeClass('showInput');
        $('.header__bottomMenuContainsForm').removeClass('formSearchRightToLeft');
        $('.header__bottomIcon').removeClass('changeIcon');
        $('.header__bottomMenu').animate({opacity: 1}, 500);
        $('body').removeClass('closeScrollBody');
      } 
    })
    //end

    //show input on mobile
    $('.header__bottomIcon').click(function (e) { 

      e.preventDefault();
      $('.header__bottomIcon').toggleClass('changeIcon');
      $('.header__bottomMenuContainsForm').toggleClass('formSearchRightToLeft');
      var flag = $('.header__bottomIcon').hasClass('changeIcon');
      if(flag) {
        $('.header__bottomMenuInputSearch').focus();
      }
      else {
        $('.header__bottomMenuInputSearch').blur();
      }

    });

    //click btn mouse on bannber to scroll down
    $('.banner__bottom').click(()=> {

      let indexVideo = $('.video').offset().top;
      let headerHeight = $('.header').outerHeight();

      if($(window).width() < 991) {
        headerHeight = $('.header__bottom').outerHeight();
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

    // slider of post


//end  slide of slick

//event window
    //window sroll change color menu and show btnTop
    $(window).scroll(()=> {

      //change color header
      changeColorheader();

      //scroll show btn scroll top
      showBtnScrollTop();

      //fixed header bottom
      fixedHeaderBottom();

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

