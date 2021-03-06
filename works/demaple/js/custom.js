$(document).ready(function (){

    //  product detail image right align
var container_left_margin = $('.container').css('marginLeft');
$('.product-left').css("margin-left", container_left_margin);

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});
$('.close').click(function () {
    $("#toggle").removeClass('active');
    $("#overlay").removeClass('open');
});




// $(function () { // wait for document ready
  
//     var controller = new ScrollMagic.Controller();
  
//     var horizontalSlide = new TimelineMax()
//     // animate panels
//     // .to(".right", 1,   {x: "-10%"})	
//     // .to(".right", 1,   {x: "-20%"})
//     // .to(".right", 1,   {x: "-30%"})
//     // .to(".right", 1,   {x: "-40%"})
//     // .to(".right", 1,   {x: "-50%"})
//     // .to(".right", 1,   {x: "-60%"})
//     // .to(".right", 1,   {x: "-70%"})
//     // .to(".right", 1,   {x: "-80%"})
//     .to(".right", 1,   {x: "-260%", ease: Linear.easeNone})
  
//     // create scene to pin and link animation
//     new ScrollMagic.Scene({
//       triggerElement: "#product-list",
//       triggerHook: "onLeave",
//       duration: "400%"
//     })
//       .setPin("#product-list")
//       .setTween(horizontalSlide)
//       //.addIndicators() // add indicators (requires plugin)
//       .addTo(controller);
    

$('.interview-slider').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  smartSpeed:1500,
  dots:false,
  nav: true,
  navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
  responsive:{
      0:{
          items:1,
          nav:true
      },
      767:{
          items:1,
          nav:true
      },
      991:{
          items:1,
          nav:true,
          loop:false
      }
  }
});
    


$('.development-slider').owlCarousel({
  // stagePadding: 50,
  loop:true,
  margin:30,
  responsiveClass:true,
  smartSpeed:1500,
  dots:false,
  nav: true,
  navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
  responsive:{
      0:{
          items:1,
          nav:true
      },
      767:{
          items:2,
          nav:true
      },
      991:{
          items:3.3,
          nav:true,
          loop:false
      }
  }
});



$('.portfolioBox').owlCarousel({
  // stagePadding: 50,
  loop:true,
  margin:30,
  responsiveClass:true,
  autoplay:true,
    autoplayTimeout:2000,
    slideTransition: 'linear',
    smartSpeed: 2000,
    autoplayHoverPause:true,
  dots:false,
  nav: true,
  navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
  responsive:{
      0:{
          items:1,
          nav:true
      },
      767:{
          items:2,
          nav:true
      },
      991:{
          items:3.3,
          nav:true,
          loop:false
      }
  }
});

// var productOwl = $('.product-right');
// productOwl.owlCarousel({
//     loop:false,
//     nav:true,
//     mouseDrag:true, 
//     margin:10,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },            
//         960:{
//             items:3
//         },
//         1200:{
//             items:3
//         }
//     }
// });
// productOwl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.originalEvent.wheelDelta>0) {
//         productOwl.trigger('next.owl', [5000]);
//     } else {
//         productOwl.trigger('prev.owl', [5000]);
//     }
//     e.preventDefault();
// });






// var owl = $('.brand-slider');
// owl.owlCarousel({
//     loop:false,
//     nav:true,
//     margin:40,
//     dots:false,
//     nav: false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },            
//         960:{
//             items:3
//         },
//         1200:{
//             items:4
//         }
//     }
// });
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.originalEvent.wheelDelta>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });








$('.hamburger').click(function () {
  // $(this).toggleClass('is-active');
  $('#overlay').toggleClass('open');
});



$(".1").hover(function () {
  $(this).parents(".vdoWrapper").children("#vdo-1").toggleClass("active");
  $(this).parents(".vdoWrapper").children("#vdo-2").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-3").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-4").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-5").toggleClass("hide");

  
});

$(".2").hover(function () {
  $(this).parents(".vdoWrapper").children("#vdo-2").toggleClass("active");
  $(this).parents(".vdoWrapper").children("#vdo-1").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-3").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-4").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-5").toggleClass("hide");

  
});
$(".3").hover(function () {
  $(this).parents(".vdoWrapper").children("#vdo-3").toggleClass("active");
  $(this).parents(".vdoWrapper").children("#vdo-1").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-2").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-4").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-5").toggleClass("hide");

  
});
$(".4").hover(function () {
  $(this).parents(".vdoWrapper").children("#vdo-4").toggleClass("active");
  $(this).parents(".vdoWrapper").children("#vdo-1").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-2").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-3").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-5").toggleClass("hide");

  
});
$(".5").hover(function () {
  $(this).parents(".vdoWrapper").children("#vdo-5").toggleClass("active");
  $(this).parents(".vdoWrapper").children("#vdo-1").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-2").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-3").toggleClass("hide");
  $(this).parents(".vdoWrapper").children("#vdo-4").toggleClass("hide");

  
});








    
  });


  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $(".navBar-section").addClass("sticky");
    } else {  
        $(".navBar-section").removeClass("sticky");
    }
  }