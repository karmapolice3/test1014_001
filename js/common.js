/* header */

/*============pc============*/

$(document).ready(function(){ //실행틀 시작
  /*depth2*/
  $(".depth2-bg , .depth2").hide();
  $("header .logo img:last-child").hide();
  $("header .utill li a img:nth-child(2)").hide();

  $(".gnb").mouseenter(function(){
    $(".depth2-bg , .depth2").stop().fadeIn();

    $("header .logo img:last-child").stop().fadeIn();
    $("header .logo img:first-child").hide();

    $("header .utill li a img:nth-child(2)").stop().fadeIn();
    $("header .utill li a img:nth-child(1)").hide();
  });

  $(".gnb").mouseleave(function(){
    $(".depth2-bg , .depth2").stop().fadeOut();

    $("header .logo img:first-child").stop().fadeIn();
    $("header .logo img:last-child").hide();

    $("header .utill li a img:nth-child(1)").stop().fadeIn();
    $("header .utill li a img:nth-child(2)").hide();
  });


  /*============mobile============*/
  /*m-logo*/
  $("header .m-logo img:last-child").hide();

  /*mgnb*/
  $(".dim").hide();
  $(".mgnb-wrap").hide();

  $(".ham").click(function(){
    $(".dim").fadeIn();
    $(".mgnb-wrap").fadeIn();
  });
  $(".mgnb-close").click(function(){
    $(".dim").fadeOut();
    $(".mgnb-wrap").fadeOut();
    $(".mdepth2").hide();
  });

  $(".mdepth2").hide();
  $(".mgnb-bottom > li:nth-child(n+3)").click(function(){
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });


}); //실행틀 끝