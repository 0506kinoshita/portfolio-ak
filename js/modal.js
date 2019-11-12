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
  $("#repsOpen").click(function(){
    $(".repsModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $("#portfolioOpen").click(function(){
    $(".portfolioModal").fadeIn();
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
});
