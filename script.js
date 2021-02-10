$(document).ready(function () {

  $("ul a").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;});
  
  $('.banner').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
  });

  $('.fa-bars').click(function(){
    $('.menu').toggle();
      })

    });