$(document).ready(function(){
    $(window).scroll(()=> {
        if($(window).scrollTop() > 0) {
            $('.header').addClass('header-activity');
        }
        else {
            $('.header').removeClass('header-activity');
        }
        if($(window).scrollTop() > 100){
            $('.btn-scroll').css({'display':'flex', 'animation':'drop-display 1s forwards ease'});
        }
        else {
            $('.btn-scroll').css({'animation':'drop-hide 1s forwards ease'})
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
});
var listNavLink = document.querySelectorAll('.nav-link');
listNavLink.forEach((link)=> {
    link.addEventListener('click', ()=> {
        var dropMenu = link.nextElementSibling;
        dropMenu.classList.add('close');
    })
})

   
