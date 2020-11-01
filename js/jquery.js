$(window).scroll(function(){
    if(wScroll > $('.about').offset().top - 200){
        $('.about .about-text').addClass('swing-in-right-fwd');
    }
});