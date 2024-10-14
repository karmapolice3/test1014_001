$(document).ready(function(){ //실행틀 시작

  /*main-visual*/

  var mv = new Swiper(".mv", {

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  /*introduce*/
  $(".txt-hover").hide();
  $(".int-wrap > div > a").mouseenter(function(){
    $(this).children(".txt-hover").stop().fadeIn();
  });
  $(".int-wrap > div > a").mouseleave(function(){
    $(this).children(".txt-hover").stop().fadeOut();
  });


  /*brand*/
  var bWrap = new Swiper(".bWrap", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop : true,

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
        },
    },

  });


  /*brand*/
  /*========PC==========*/

  // box hover
  /*$(".prd-content-sun-current ul li a p , .prd-content-glasses ul li a p").hide();
  $(".prd-content-sun-current ul li a, .prd-content-glasses ul li a").mouseenter(function(){
    $(this).children(".prd-content-sun-current ul li a p , .prd-content-glasses ul li a p").stop().fadeIn();
  });
  $(".prd-content-sun-current ul li a, .prd-content-glasses ul li a").mouseleave(function(){
    $(this).children(".prd-content-sun-current ul li a p , .prd-content-glasses ul li a p").stop().fadeOut();
  });
  */

  // tab
  $(".prd-con-wrap > div").hide();
  $(".tabs li").eq(0).addClass("active");
  $(".prd-con-wrap > div").eq(0).show();

  $(".tabs li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    var indexNum = $(this).index();
    $(".prd-con-wrap > div").eq(indexNum).fadeIn().siblings().hide();
  });


  /*reservation*/
  //tab
  $(".r-tab-con > div").hide();
  $(".r-tabs li").eq(0).addClass("active");
  $(".r-tab-con > div").eq(0).show();

  $(".r-tabs li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    var indexNum = $(this).index();
    $(".r-tab-con > div").eq(indexNum).fadeIn().siblings().hide();
  });

  //checkbox
  $(".r-tab-con label").click(function(){
    $(".nobox").toggleClass("active");
  });

}); //실행틀 끝