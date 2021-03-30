$(document).ready(function () {

//all function ----------------

var index = 2;
function seeMoreCmt() {
    var str = ".post__cmtAdd:nth-child(" + index + ")";
    var postAdd = $(str);
    postAdd.slideDown(0);   
    str = str + " .post__cmtItem";
    let indexScrollCmt = postAdd.offset().top - $('.header').height() - 20;
    if($(window).width() < 991){
      indexScrollCmt = postAdd.offset().top - $('.header__bottom').height() - 30;
    }
    $('html, body').animate({scrollTop: indexScrollCmt}, 1000);
    TweenMax.staggerFrom($(str),1,{top: 100, opacity: 0,}, 0.3);
    index++;

    if(index == $('.post__cmtAdd').length + 2) {
        $('.post__cmtBtnLoad').css({'display' : 'none'});
        $('.post__cmtBtnClose').css({'display' : 'block'});
    }

}
//end function ------------------

// all even click--------------

    var height = $('.post__listCmt').offset().top;
    $('.post__cmtAdd').slideUp(0);
    //show cmt
    $('.post__cmtBtnLoad').click(function (e) { 
        e.preventDefault();
        seeMoreCmt();
    });

    //close cmt
    $('.post__cmtBtnClose').click(function (e) { 
        console.log('hello');
        e.preventDefault();
        $('html, body').animate({scrollTop: height - $('.header').outerHeight() - 20}, 1000);
          setTimeout(()=> {
            $('.post__cmtAdd').slideUp(500);  
          },1000)
          $('.post__cmtBtnClose').css({'display': 'none'});
          $('.post__cmtBtnLoad').css({'display': 'block'});
      
        index = 2;
      
      });

// end----------------------
});