$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 2
                }
            }
        ]
    });

})