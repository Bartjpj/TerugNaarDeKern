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

setTimeout("revealspeechbubbleafter()", 3000);
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

$.getJSON("js/namen.json", function(json) {
  // console.log(json); // this will show the info it in firebug console
  var naam = 'Cornelis';
  var groet = "";

  for (var key in json) {
    var item = json[key];
    for (var key2 in item) {
      var splitchars = item[key2].split(";");
    }

    if (splitchars[3] == naam){
      groet = "";
      groet+= "Hoi " + naam + "! Volgens onze gegevens zijn er " + splitchars[4] + " mensen met jouw naam.";
      break;
    }
    else if (splitchars[1] == naam){
      groet = "";
      groet+= "Hoi " + naam + "! Volgens onze gegevens zijn er " + splitchars[2] + " mensen met jouw naam.";
      break;
    }

    else{
      groet = "";
      groet+='Hoi ' + naam + "!";
    }

  }
  console.log(groet);
});

$('.flex-item').click(function() {
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

// typing effect
var i = 0;
var txt = 
'Welkom!  '+
'Op deze website nemen we je mee op reis in de wereld van genetica. ' +
'Allereerst even terug naar de kern. Wat is DNA? en wat kun je met DNA? ' +
'Dit en nog andere vragen die voorbijkomen in dit verhaal over jou. ' + 
'De informatie op de website is met zorg geschreven voor meer informatie zie de bronnen. '

var speed = 80;

document.getElementById('start-welkomtekst').onclick = typeWriter(); 

  function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typedemo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
