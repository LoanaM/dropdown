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

$('#libri').mouseenter(function(){
  $(this).children('.tendina').show(2000);
});
$('#libri').mouseleave(function(){
  $(this).children('.tendina').hide();
});
