
$(document).ready(function() {
$(".searchactive").on("click", function(){
    $(".inp").toggleClass("inpactive");
    });
});


$('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.trans').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.newsa').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



$('.footx').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    rtl:true,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        776:{
            items:3
        },
        1000:{
            items:4
        }
    }
});



var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});

new WOW().init(); 