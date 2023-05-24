$(document).ready(function () {
  $('.statistics__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '60px',
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  })
})
$(document).ready(function () {
  $('.card__video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  })
})
$(document).ready(function () {
  $('.graduates__slider').slick({
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.graduates__container li.next'),
    prevArrow: $('.graduates__container li.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  })
})
$(document).ready(function ($) {
  if ($(window).width() >= 1024) {
    $('.statistics__slider').slick('unslick')
  }
})
$(document).ready(function () {
  $('.preview__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.preview__container li.next'),
    prevArrow: $('.preview__container li.prev'),
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
})

$(document).ready(function () {
  $('.courses__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.courses__container li.next'),
    prevArrow: $('.courses__container li.prev'),
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 3,
          slidesToScroll: 1,
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
    ],
  })
})

$(document).ready(function () {
  if ($(window).width() < 768) {
    $('.courses__arrow-btn').appendTo('.courses__left-part')
  }
})

$(document).ready(function () {
  $('.news__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.news__container li.next'),
    prevArrow: $('.news__container li.prev'),
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  })
})
$(document).ready(function () {
  $('.direction__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.direction__container li.next'),
    prevArrow: $('.direction__container li.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  })
})
$(document).ready(function () {
  $('.specialties__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.specialties__container li.next'),
    prevArrow: $('.specialties__container li.prev'),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  })
})
$(document).ready(function () {
  $('.trade__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.trade__container li.next'),
    prevArrow: $('.trade__container li.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  })
})

$(document).ready(function () {
  $('.video__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.video__business-container li.next'),
    prevArrow: $('.video__business-container li.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  })
})

$(document).ready(function () {
  $('.reviews__slider').slick({
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.reviews__container li.next'),
    prevArrow: $('.reviews__container li.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  })
})

$(document).ready(function() { 

const swiper = new Swiper('.direction__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  allowSlideNext: true,
  allowSlidePrev: true,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView:12,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  },

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },


});});