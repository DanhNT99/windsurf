$(document).ready(function(){

//all funciton 

      //close slider on descktop
      function closeSliderTeamOnDesk() {
        
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
  dots: false,
  speed: 500,
  arrows : false,
  responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
  ]
}
//end slider slick

//window event

      $(window).resize(function () { 

        //sliderTeam
        closeSliderTeamOnDesk();
        
      });

      $(window).on('load', function () {

         //sliderTeam
        closeSliderTeamOnDesk();

      });

      $(window).scroll(()=> {
        //show evaluate
        showEvaluate();
    })
})

//end window event