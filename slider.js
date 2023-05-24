jQuery(function ($) {
    $(".direction__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: $(".direction__container li.next"),
        prevArrow: $(".direction__container li.prev"),
        dots: false,
  
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
              dots: true
            }
          },
  
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              dots: true
            }
          }
        ]
      });
  

      if ($(window).width() < 1024) {
        // $(".news__slider").slick('refresh')
      }
      function loadNews() {
        $(".news__slider").slick({
          slidesToShow: 2,
    
          slidesToScroll: 2,
    
          autoplay: false,
    
          autoplaySpeed: 2000,
    
          arrows: true,
          nextArrow: $('li.news_next'),
          prevArrow: $('li.news_prev'),
          responsive: [
            {
              breakpoint: 1330,
    
              settings: {
                slidesToScroll: 1,
    
                slidesToShow: 1,
    
                dots: true
              }
            }
          ]
        });
      }
      // $(window).on('load', function () {
      if ($(window).width() < 1330) {
        $('.news__item-inner').children().unwrap();
        $('.news__slider > div').children().unwrap();
    
        $('.news__slider .news__item').each(function () {
          $(this).wrap('<div></div>');
        });
    
        loadNews();
      } else {
        loadNews();
      }
      // });


});