$(document).ready(function () {
  
//all funciton
var index = 2;
function seeMoreCmt() {
    var str = ".post__cmtAdd:nth-child(" + index + ")";
    var postAdd = $(str);
    postAdd.slideDown(0);   
    str = str + " .post__cmtItem";
    let indexScrollCmt = postAdd.offset().top - $('.header').height() - 20;
    $('html, body').animate({scrollTop: indexScrollCmt}, 1000);
    TweenMax.staggerFrom($(str),1,{top: 100, opacity: 0,}, 0.3);
    index++;

    if(index == $('.post__cmtAdd').length + 2) {
        $('.post__cmtBtnLoad').css({'display' : 'none'});
    }

}
//end functtion

//all event

$('.post__cmtAdd').slideUp(0);

$('.post__cmtBtnLoad').click(function (e) { 
  e.preventDefault();
  seeMoreCmt();
});

//end event
    
    // if($(window).width() <= 575) {
    //     $('.gallery .row').addClass('sliderGallery');
    // }

    // $(window).resize(function () { 

    //   if($(window).width() <= 575) {
    //     $('.gallery .row').addClass('sliderGallery');
    //   }
    //   else {
    //     $('.sliderGallery').slick('unslick');
    //   }

    // });


    $('.sliderGallery').slick({
      speed: 500,
      slidesToShow:1, 
      slidesToScroll:1,
      prevArrow: '<button type="button" class="btnSlideSlickPrevHome prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="btnSlideSlickPrevHome next"><i class="fas fa-chevron-right"></i></button>',
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
});