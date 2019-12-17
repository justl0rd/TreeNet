let owlSlider = $('.slider');

owlSlider.owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplaySpeed: 1000,
    autoplayTimeout: 7000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        }
    }
});