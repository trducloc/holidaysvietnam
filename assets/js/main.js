$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true, //thanh dieu huong
        dots:true, //nut chuyen slide
        autoplay:true, //slide tu chay
        autoplaytimeout:3000,//thoi gian chuyen slide ms
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});
