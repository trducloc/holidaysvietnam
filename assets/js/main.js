$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true, //thanh dieu huong
        dots:true, //nut chuyen slide
        autoplay:true, //slide tu chay
        autoplaytimeout:3000,//thoi gian chuyen slide ms
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{ //khoang man hinh/
                items:1
            }
        }
    })
});
