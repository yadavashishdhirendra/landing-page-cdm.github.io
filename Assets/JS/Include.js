$(document).ready(function () {
  $("#service_desktop_banner").load(
    "Assets/Banner/Service-Desktop-Banner.html"
  );
});

$(document).ready(function () {
  $("#footer").load(
    "Assets/Banner/Footer.html"
  );
});

$(document).ready(function () {
  $("#schedule").load(
    "Assets/Banner/Schedule.html"
  );
});


$(document).ready(function () {
  $("#header").load(
    "Assets/Banner/Header.html"
  );
});



$(document).ready(function () {
  $("#Banners_Service").load(
    "Assets/Banner/SMM-Banner.html"
  );
});

$(document).ready(function () {
  $("#Timer").load(
    "Assets/Banner/Timer.html"
  );
});





$(function () {
  $('.scroll2').infiniteslide({
    speed: 100,
    direction: 'right'
  });
});

$('.owl-carousel').owlCarousel({
  // loop: true,
  margin: 0,
  nav: true,
  // autoplay: true,
  // slideTransition: 'linear',
  // autoplaySpeed: 6000,
  // smartSpeed: 6000,
  // center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});


$(document).ready(function () {
  $('.techstack-logos').slick({
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});
