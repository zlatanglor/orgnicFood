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
    // Scroll to top
    var btn = $('#scroll_top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show_scroll');
        } else {
            btn.removeClass('show_scroll');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '500');
    });
// Anchor link
    $("a.nav-link").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1300);
        return false;
    });
});

