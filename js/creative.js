(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    $('#nav-icon').removeClass('open');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('#nav-icon').removeClass('open');
  });

//   $(document).ready(function(){
//     $('.events-primary').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [ {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//             }
//         }]
//     });
//     $('.events-secondary').slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       arrows: false,
//       dots: false,
//       pauseOnHover: false,
//       responsive: [{
//           breakpoint: 768,
//           settings: {
//               slidesToShow: 3
//           }
//       }]
//   });
//   $('.upcoming-events').slick({
//     slidesToShow: 3,
//     infinite: false,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: true,
//     dots: true,
//     responsive: [{
//         breakpoint: 768,
//         settings: {
//             slidesToShow: 2
//         }
//     },{
//       breakpoint: 576,
//       settings: {
//           slidesToShow: 1
//       }
//   }]
// });
// });


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

 $(document).ready(function(){
    $('#nav-icon').click(function(){
      if ($('#navbarResponsive').hasClass('show','collapsing')){
        $(this).removeClass('open');
      }
      else{
        $(this).addClass('open');

      }
      });
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
      $(".dropdown").removeClass("show");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Magnific popup calls


})(jQuery); // End of use strict

//COUNTDOWN
// function makeTimer() {
//       var endTime = new Date("13 March 2020 18:00:00 GMT+07:00");	
    		
//       endTime = (Date.parse(endTime) / 1000);
  
//       var now = new Date();
//       now = (Date.parse(now) / 1000);
  
//       var timeLeft = endTime - now;
  
//       var days = Math.floor(timeLeft / 86400); 
//       var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
//       var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
//       var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
//       if (hours < "10") { hours = "0" + hours; }
//       if (minutes < "10") { minutes = "0" + minutes; }
//       if (seconds < "10") { seconds = "0" + seconds; }
  
//       $("#days").html(days + "<span>Days</span>");
//       $("#hours").html(hours + "<span>Hours</span>");
//       $("#minutes").html(minutes + "<span>Minutes</span>");
//       $("#seconds").html(seconds + "<span>Seconds</span>");		
  
// }
// setInterval(function() { makeTimer() }, 1000);