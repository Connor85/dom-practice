$(document).ready(function(){
  $("button#cat").click(function(){
    $("ul").prepend("<li>Meow!</li>");
  });
  // Breaks code:
  //  $("ul#cat").next('li').first().click(function(){
  //   $("ul#cat");alert('hi');
  // $("button#dog").click(function(){
    $("ul").prepend("<li>Bark!</li>");
    $('li').click(function(){
    $("#cat").toggle();
    });
  $("ul#dog").next('ul').first().click(function(){
    $("ul#dog");alert('hi');
  // $("ul").next('li').first().click(function(){
  //   $(this);remove();
  //   });
  });
});
