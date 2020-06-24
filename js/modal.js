$(function() {
  $(".open").click(function(){
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $(".close").click(function(){
    $(".modal").fadeOut();
    $("#wrapper").css({
      filter: 'blur(0px)'
    })
  });
  $("#skillOpen").click(function(){
    $(".skillModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $(".repsOpen").click(function(){
    $(".repsModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $(".portfolioOpen").click(function(){
    $(".portfolioModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $(".nengazyouOpen").click(function(){
    $(".nengazyouModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $("#zikosyoukaiModal").click(function(){
    $(".zikosyoukaiModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $(".okrOpen").click(function(){
    $(".okrModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
});
