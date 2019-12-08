// import Swup from 'swup';
// const swup = new Swup();

$('.flex-item').click(function(){
  $('.overlay-dark').css('display', 'block');
  $('.popup-vraag').css('display', 'block');
  $('.popup-weetje').css('display', 'block');
});

$('.overlay-dark').click(function() {
  $('.popup-vraag').css('display', 'none');
  $('.overlay-dark').css('display', 'none');
  $('.popup-weetje').css('display', 'none');
});

$('.popup-vraag').click(function() {
  $('.popup-vraag').css('z-index', '101');
  $('.popup-weetje').css('z-index', '100');
});
$('.popup-weetje').click(function() {
  $('.popup-vraag').css('z-index', '100');
  $('.popup-weetje').css('z-index', '101');
});
