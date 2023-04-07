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
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    arrows: false,
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
    arrows: false,
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
    arrows: false,

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
    arrows: false,
    dots: true,
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
