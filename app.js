$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", () => {
    $(".fa-bars").removeClass("fa-times");
    $(".nav").removeClass("nav-toggle");

    if ($(window).scrollTop() > 10) {
      $("header").addClass("boderdown");
    } else {
      $("header").removeClass("boderdown");
    }
  });

  $(".facility").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

AOS.init({
  duration: 1000,
  delay: 200,
  disable: "mobile",
});
