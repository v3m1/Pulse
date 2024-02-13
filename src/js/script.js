$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    adaptiveHeight: false,
                    arrows: false
                }   
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    adaptiveHeight: false,
                    arrows: false
                } 
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    adaptiveHeight: false,
                    arrows: false
                } 
            },
            {
                breakpoint: 320,
                settings: {
                    dots: true,
                    adaptiveHeight: false,
                    arrows: false
                } 
            }
        ]
    });
  });