$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false
                }   
            }
        ]
    });
  });