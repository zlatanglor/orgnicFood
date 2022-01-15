$(document).ready(function(){
    // owl carusel
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            }
        }
    });
    // Anchor link
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1300);
    });
});

