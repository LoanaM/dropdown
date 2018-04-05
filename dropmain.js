//click su menu
var clicked = false;
$('#home').click(function(){
  if(!clicked) {
    $(this).children('.tendina').show();
    clicked = true;
  }
  else {
    $(this).children('.tendina').hide();
    clicked = false;
  }
});

//mouse su menu
$('#libri').mouseenter(function(){
  $(this).children('.tendina').show(2000);
});
$('#libri').mouseleave(function(){
  $(this).children('.tendina').hide();
});

//mouse sul link e fade
$('#audio').mouseenter(function(){
  $(this).parents().children('.tendina').fadeIn();
});
$('#audio').mouseleave(function(){
  $(this).parents().children('.tendina').fadeOut();
});

//click sul menu e toggle
$('#dvd').click(function(){
  $(this).children('.tendina').toggle();
});


//mouse sul link e fade
$('#offer').on({
  mouseenter: function(){
    $(this).parents().children('.tendina').fadeIn(3000);
  }, mouseleave: function(){
    $(this).parents().children('.tendina').fadeOut("slow");
  }
});
