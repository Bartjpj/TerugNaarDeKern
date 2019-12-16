function revealspeechbubbleafter() {
  var speechbubble = $('#speechbubble');
  $(speechbubble).css("visibility", "visible");
  $(speechbubble).addClass("text-pop-up-tl");
}

function loopskipbtn() {
       var skipbtn = $('#skipstorybtn');
       skipbtn.animate({opacity:'1'}, 3000);
       skipbtn.animate({opacity:'0'}, 1000, loopskipbtn);
    }

setTimeout("revealspeechbubbleafter()", 3000);
setTimeout("loopskipbtn()", 4500);

$.getJSON("js/namen.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

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
