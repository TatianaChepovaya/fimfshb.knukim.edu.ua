$(document).ready(function () {
  //   console.log("ready!");
  $('.menu__btn').on('click', function () {
    //  alert();
    $('.menu').toggleClass('active')
    $('.menu__btn').toggleClass('active')
    $('header').toggleClass('active')
    $('body').toggleClass('active')
  })
})
