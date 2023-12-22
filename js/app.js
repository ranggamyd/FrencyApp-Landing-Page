/* Template Name: Nody - Responsive Bootstrap 5 Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   Created: Jan 2019
   File Description: Main js file
*/

// STICKY
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
    } else {
        $(".sticky").removeClass("nav-sticky");
    }
});


// SmoothLink
$('.nav-item a, .mouse-down a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


// scrollspy
$(".navbar-nav").scrollspy({
    offset: 70
});


// loader
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});


// Fether icon
feather.replace()

// Testimonial
$('#testi-clients').owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})