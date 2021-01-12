$(document).ready(function(){

    $(window).scroll(()=> {
        let positionOfEl = $('.evaluate').offset().top;
        if($(window).scrollTop() > positionOfEl) {
            $('.evaluate__itemBox:nth(0)').addClass('changeSurfing');
            $('.evaluate__itemBox:nth(1)').addClass('changeBoats');
            $('.evaluate__itemBox:nth(2)').addClass('changeDiving');
        }
    })

})