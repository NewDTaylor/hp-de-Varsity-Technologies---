"use strict";

AOS.init();

$(document).ready(function () {
  $(".hp-seg2-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});

function runOnScroll() {
  let electicCounting = document.querySelector(".electric-counting");
  let carbonCounting = document.querySelector(".carbon-counting");

  electicCounting.innerHTML = "100";
  carbonCounting.innerHTML = "100";
}
$(document).ready(function () {
  // create an IntersectionObserver with a callback function
  const observer = new IntersectionObserver((entries) => {
    // if the target section is intersecting with the viewport
    if (entries[0].isIntersecting) {
      // run the function
      runOnScroll();
      // disconnect the observer to stop observing the target section
      observer.disconnect();
    }
  });

  // select the target section and observe it
  const target = document.querySelector("#odometer-counting-box");
  observer.observe(target);
});
