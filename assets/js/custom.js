$(window).load(function() {
	$(".loader").fadeOut("fast");
  $("#overlayer").fadeOut("fast");
  $('body').removeClass('loading');

$(".addanim").addClass("bounceIn animated");
  
});



 $(document).ready(function() {
    

  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");

  $(".navbar-nav").clone().prependTo("#off-canvas");

  $(function() {
    $(document).trigger("enhance");
  });
   
   $('#off-canvas').offcanvas({
// options
});



$(document).click(function (event) {
  var clickover = $(event.target);
  var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
  if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $("button.navbar-toggle").click();
  }
});


$(".dropdown, .dropdown-active").hover(function() {
  $(this).find('.dropdown-menu').eq(0).stop(true, true).delay(50).slideDown(150);
}, function() {
  $(this).find('.dropdown-menu').eq(0).stop(true, true).delay(50).slideUp(150);
});


$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
  event.preventDefault(); 
  event.stopPropagation(); 
  $(this).parent().siblings().removeClass('open');
  $(this).parent().toggleClass('open');
});



// var $navbar = $("#mNavbar");
  
//   AdjustHeader(); // Incase the user loads the page from halfway down (or something);
//   $(window).scroll(function() {
//       AdjustHeader();
//   });
  
//   function AdjustHeader(){
//     if ($(window).scrollTop() > 100) {
//       if (!$navbar.hasClass("fixed-top")) {
//         $navbar.addClass("fixed-top");
       
//       }
//     } else {
//       $navbar.removeClass("fixed-top");
     
//     }
//   }


  var owl = $('#main-slider');

  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    navText:["<i class='fas fa-angle-double-left'></i>","<i class='fas fa-angle-double-right'></i>"],
    margin: 10,
    dots:false,
  });

  owl.on('changed.owl.carousel', function(event) {
      var item = event.item.index - 2;     // Position of the current item
      $('.img-wrapper .caption').removeClass('animated fadeIn delay-1');
 $('.owl-item').not('.cloned').eq(item).find('.img-wrapper .caption').addClass('animated fadeIn delay-1');
  });




  $('#slider2').owlCarousel({
    loop:true,
    margin:40,
    dots:false,
    nav:true,
    autoplay:true,
    autoplaySpeed:1000,
    navText:["<img src='assets/img/left-arrow.png'>","<img src='assets/img/right-arrow.png'>"],
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
    },
  });
  // document ready  

  wow = new WOW({
      offset:50,
  }).init();
  
  
  //  AOS.init();
});




$(window).scroll(function() {
  if ($(this).scrollTop() > 50 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".top").offset().top},"1000");return false})});




$(window).scroll(function() {
  if ($(this).scrollTop() > 50 ) {
      $('.fixed-appoint:hidden').stop(true, true).fadeIn();
  } else {
      $('.fixed-appoint').stop(true, true).fadeOut();
  }
});




$('#accordion').on('show.bs.collapse', function () {
  $('#accordion .in').collapse('hide');
});

$('#accordion').on('shown.bs.collapse', function () {

  var panel = $(this).find('.in');

  $('html, body').animate({
      scrollTop: panel.offset().top - 130
  }, 150);
});






$(document).ready(function () {
  location.hash && $(location.hash + '.collapse').collapse('show');
});







