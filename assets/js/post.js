$(document).ready(function () {
  
//all funciton

//end functtion

//all event

$('.post__cmtBtnLoad').click(function (e) { 
  e.preventDefault();
  seeMoreCmt();
});


///slider slick

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
    
  $('.post__cmtItemBtn').click(function (e) {
    let itemPrev =  $(this).prev();
    let flag = itemPrev.attr('show-text');
    console.log(typeof flag);
    if(flag === 'false') {
      itemPrev.css({'line-clamp':'inherit'});
      itemPrev.attr('show-text', 'true');
      $(this).text('Tắt bình luận');
    }
    else {
      itemPrev.attr('show-text', 'false');
      itemPrev.css({'line-clamp':'2'});
      $(this).text('Xem bình luận');
    }
  });

//end slider slick

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