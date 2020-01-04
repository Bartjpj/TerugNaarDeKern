function revealspeechbubbleafter() {
  var speechbubble = $('#speechbubble');
  $(speechbubble).css("visibility", "visible");
  $(speechbubble).addClass("text-pop-up-tl");
}

function loopskipbtn() {
  var skipbtn = $('#skipstorybtn');
  skipbtn.animate({
    opacity: '1'
  }, 3000);
  skipbtn.animate({
    opacity: '0.20'
  }, 1000, loopskipbtn);
}

setTimeout("revealspeechbubbleafter()", 500);
setTimeout("loopskipbtn()", 4500);



function revealtextlink() {
  var linktext = $('#linktext');
  linktext.animate({
    opacity: '1'
  }, 3000);

}

revealtextlink();

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';

       else
          e.style.display = 'block';
          $(e).addClass("text-pop-up-bottom");
    }

//resulaten
var huisarts = 0;
var commericeel = 0;
var geentest = 0;

// show vraag
$('#item-1').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-1').css('display', 'block');
  $('#weetje-1').css('display', 'block');
});

$('#item-2').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-2').css('display', 'block');
  $('#weetje-2').css('display', 'block');
});
$('#item-3').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-3').css('display', 'block');
  $('#weetje-3').css('display', 'block');
});
$('#item-4').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-4').css('display', 'block');
  $('#weetje-4').css('display', 'block');
});
$('#item-5').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-5').css('display', 'block');
  $('#weetje-5').css('display', 'block');
});
$('#item-6').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-6').css('display', 'block');
  $('#weetje-6').css('display', 'block');
});
$('#item-7').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-7').css('display', 'block');
  $('#weetje-7').css('display', 'block');
});
$('#item-8').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-8').css('display', 'block');
  $('#weetje-8').css('display', 'block');
});
$('#item-9').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-1').css('display', 'block');
  $('#weetje-1').css('display', 'block');
});
$('#item-10').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-2').css('display', 'block');
  $('#weetje-2').css('display', 'block');
});
$('#item-11').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-11').css('display', 'block');
  $('#weetje-11').css('display', 'block');
});
$('#item-12').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-12').css('display', 'block');
  $('#weetje-12').css('display', 'block');
});
$('#item-13').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-13').css('display', 'block');
  $('#weetje-13').css('display', 'block');
});
$('#item-14').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-14').css('display', 'block');
  $('#weetje-14').css('display', 'block');
});
$('#item-15').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-15').css('display', 'block');
  $('#weetje-15').css('display', 'block');
});
$('#item-16').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-16').css('display', 'block');
  $('#weetje-16').css('display', 'block');
});
$('#item-17').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-17').css('display', 'block');
  $('#weetje-17').css('display', 'block');
});
$('#item-18').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-18').css('display', 'block');
  $('#weetje-18').css('display', 'block');
});
$('#item-19').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-19').css('display', 'block');
  $('#weetje-19').css('display', 'block');
});
$('#item-20').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-20').css('display', 'block');
  $('#weetje-20').css('display', 'block');
});
$('#item-21').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-21').css('display', 'block');
  $('#weetje-21').css('display', 'block');
});
$('#item-22').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-22').css('display', 'block');
  $('#weetje-22').css('display', 'block');
});
$('#item-23').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-23').css('display', 'block');
  $('#weetje-23').css('display', 'block');
});


// overlay vraag + wegklikken
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

// typing effect
var i = 0;
var txt =
'Welkom!  '+
'Op deze website nemen we je mee op reis in de wereld van genetica. ' +
'Allereerst even terug naar de kern. Wat is DNA? en wat kun je met DNA? ' +
'Dit en nog andere vragen die voorbijkomen in dit verhaal over jou. ' +
'De informatie op de website is met zorg geschreven voor meer informatie zie de bronnen. '

var speed = 80;

// document.getElementById('start-welkomtekst').onclick = typeWriter();

  function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typedemo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function revealInfoblock() {
  var infoblock = $('#begininfoblock');
  infoblock.animate({
    opacity: '1'
  }, 500);
}

setTimeout("revealInfoblock()", 1000);
setTimeout("typeWriter()", 1500);
