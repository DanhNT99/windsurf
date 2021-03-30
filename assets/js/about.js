$(document).ready(function(){

//all funciton 

      //close slider on descktop
      function closeSliderTeamOnDesk(slide) {
        
        if($(window).width() < 576) {

          $('.showSliderTeam').slick(slider);
        }
        else {
         $('.showSliderTeam').slick('unslick');
        } 

      }
      
      //show all evaluate form left to right
      function showEvaluate() {

        let positionOfEl = $('.evaluate').offset().top - 300;
        if($(window).scrollTop() > positionOfEl) {
            $('.evaluate__itemBox:nth(0)').addClass('changeSurfing');
            $('.evaluate__itemBox:nth(1)').addClass('changeBoats');
            $('.evaluate__itemBox:nth(2)').addClass('changeDiving');
        }
      }
      
//end funciton

//all event Click

//end click

///slider slick
var slider = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows : false,
}
//end slider slick

//window event

      $(window).resize(function () { 

        //sliderTeam
        console.log('đã đổi');
        closeSliderTeamOnDesk(slider);
        
      });

      $(window).on('load', function () {

         //sliderTeam
        closeSliderTeamOnDesk(slider);

      });

      $(window).scroll(()=> {
        //show evaluate
        showEvaluate();
    })
})

//end window event