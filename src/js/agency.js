import $ from 'jquery';


$(document).ready(function(){
 
 // Smooth scrolling using jQuery easing
  $(
    'a[href*="#"]:not([href="#"],[href*="#collapseOne"],[href*="#collapseTwo"],[href*="#carousel"],[href*="#collapseThree"],[href*="#collapseFour"],[href*="#phonePopup"])'
  ).click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 54
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  $(function() {
    $('[data-toggle="popover"]').popover();
  });
  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 154
  });

  // Closes responsive menu when a link is clicked
  $(".navbar-collapse>ul>li>a").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  $(document).ready(function() {
    $(".carousel-slide").slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      autoplaySpeed: 4000,
      autoplay: true,
      prevArrow:
        '<i class="fa fa-chevron-left" style="position: absolute;top: 50%; left: -25px;"></i>',
      nextArrow:
        '<i class="fa fa-chevron-right" style="position: absolute;top: 50%; right: -25px;"></i>'
    });
  });

});