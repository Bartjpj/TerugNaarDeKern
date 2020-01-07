function revealspeechbubbleafter() {
  var speechbubble = $('#speechbubble');
  $(speechbubble).css("visibility", "visible");
  $(speechbubble).addClass("text-pop-up-tl");
}

// function loopskipbtn() {
//   var skipbtn = $('#skipstorybtn');
//   skipbtn.animate({
//     opacity: '0.7'
//   }, 3000);
//   skipbtn.animate({
//     opacity: '0.7'
//   }, 1000, loopskipbtn);
// }

setTimeout("revealspeechbubbleafter()", 500);
setTimeout("loopskipbtn()", 1);



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



// typing effect
var i = 0;
var txt =
'Welkom in de wereld van genetica  ';


var speed = 80;

document.getElementById('start-welkomtekst').onclick = typeWriter();

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
