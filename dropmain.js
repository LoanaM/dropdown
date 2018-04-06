//click su menu
var clicked = false;
$('#home').click(function(){
  if(!clicked) {
    $(this).children('.tendina').show();
    $(this).children('.faicon').show();
    clicked = true;
  }
  else {
    $(this).children('.tendina').hide();
    $(this).children('.faicon').hide()
    clicked = false;
  }
});

//mouse su menu
$('#libri').mouseenter(function(){
  $(this).children('.tendina').show(2000);
  $(this).children('.faicon').show(2000);
});
$('#libri').mouseleave(function(){
  $(this).children('.tendina').hide();
  $(this).children('.faicon').hide();

});

//mouse sul link e fade
$('#audio').mouseenter(function(){
  $(this).parents().children('.tendina').fadeIn();
  $(this).parents().children('.faicon').fadeIn();
});
$('#audio').mouseleave(function(){
  $(this).parents().children('.tendina').fadeOut();
  $(this).parents().children('.faicon').fadeOut();
});

//click sul menu e toggle
$('#dvd').click(function(){
  $(this).children('.tendina').toggle();
  $(this).children('.faicon').toggle();
});


//mouse sul link e fade
$('#offer').on({
  mouseenter: function(){
    $(this).parents().children('.tendina').fadeIn(3000);
    $(this).parents().children('.faicon').show();
  }, mouseleave: function(){
    $(this).parents().children('.tendina').fadeOut("slow");
    $(this).parents().children('.faicon').hide();
  }
});


$('#item1').mouseenter(function(){
  $(this).parents().children('.tendalaterale').fadeIn();
});
$('#item1').mouseleave(function(){
  $(this).parents().children('.tendalaterale').fadeOut();
  });
