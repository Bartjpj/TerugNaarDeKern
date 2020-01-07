
$(window).ready(function() { // makes sure the whole site is loaded
  console.log('resultaten.js is ingeladen');
// preload start
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(30).fadeOut("slow"); // will fade out the white DIV that covers the website.


// Animated CSS preloader from http://tobiasahlin.com/spinkit/
// Excellent preloader example found here: http://ismet.me/index.htm
// preload end
console.log('resultaten.js is ingeladen');
var antwoord1 = localStorage.getItem("antwoord1");
var antwoord2 = localStorage.getItem("antwoord2");
var antwoord3 = localStorage.getItem("antwoord3");
console.log(antwoord1);
console.log(antwoord2);
console.log(antwoord3);

if(antwoord1 > antwoord2 && antwoord1 > antwoord3){
  $(".informatieblok1").css('visibility', 'visible');
  $('.klinisch-title').css('display', 'visible');
  $('.commercieel-title').css('display', 'none');


  $('.geentest-title').css('display', 'none');
  $('.informatieblok2').css('display', 'none');
  $('.informatieblok3').css('display', 'none');

}else if (antwoord1 == antwoord2){
  $(".informatieblok2").css('visibility', 'visible');
  $('.informatieblok1').css('display', 'none');
  $('.informatieblok3').css('display', 'none');
  $('.resul').css('display', 'visible');

  $('.commercieel-title').css('display', 'visible');
  $('.klinisch-title').css('display', 'none');
  $('.geentest-title').css('display', 'none');

}else if (antwoord2 == antwoord1 == antwoord3){
  $(".informatieblok2").css('visibility', 'visible');
  $('.informatieblok1').css('display', 'none');
  $('.informatieblok3').css('display', 'none');
  $('.resul').css('display', 'visible');

  $('.commercieel-title').css('display', 'visible');
  $('.klinisch-title').css('display', 'none');
  $('.geentest-title').css('display', 'none');
}

else if (antwoord2 > antwoord1 && antwoord2 > antwoord3){
  $(".informatieblok2").css('visibility', 'visible');
  $('.informatieblok1').css('display', 'none');
  $('.informatieblok3').css('display', 'none');

  $('.commercieel-title').css('display', 'visible');
  $('.klinisch-title').css('display', 'none');
  $('.geentest-title').css('display', 'none');

}else if(antwoord3 > antwoord1 && antwoord3 > antwoord2){
  $(".informatieblok3").css('visibility', 'visible');
  $('.geentest-title').css('display', 'visible');
  $('.commercieel-title').css('display', 'none');
  $('.klinisch-title').css('display', 'none');

  $('.informatieblok1').css('display', 'none');
  $('.informatieblok2').css('display', 'none');
}
// else{
//   $(".informatieblok3").css('visibility', 'visible');
//   $('.geentest-title').css('display', 'visible');
//   $('.commercieel-title').css('display', 'none');
//   $('.klinisch-title').css('display', 'none');
//
//   $('.informatieblok1').css('display', 'none');
//   $('.informatieblok2').css('display', 'none');
// }


$('.klinisch-title').click(function (){
  $('.informatieblok1').css('display', 'block');
  $('.informatieblok2').css('display', 'none');
  $('.informatieblok3').css('display', 'none');

  $('.klinisch-title').css('background-color', '#ee5052');
  $('.commercieel-title').css('background-color', '#09286A');
  $('.geentest-title').css('background-color', '#09286A');

  setTimeout(function(){
      $('.informatieblok1').css('opacity', '1');
      $('.informatieblok2').css('opacity', '0');
      $('.informatieblok3').css('opacity', '0');
  },100);
});

$('.commercieel-title').click(function (){

  $('.informatieblok1').css('display', 'none');
  $('.informatieblok2').css('display', 'block');
  $('.informatieblok3').css('display', 'none');


  $('.klinisch-title').css('background-color', '#09286A');
  $('.commercieel-title').css('background-color', '#ee5052');
  $('.geentest-title').css('background-color', '#09286A');
  setTimeout(function(){
      $('.informatieblok1').css('opacity', '0');
      $('.informatieblok2').css('opacity', '1');
      $('.informatieblok3').css('opacity', '0');
  },100);
});
$('.geentest-title').click(function (){
  $('.informatieblok1').css('display', 'none');
  $('.informatieblok2').css('display', 'none');
  $('.informatieblok3').css('display', 'block');

  $('.klinisch-title').css('background-color', '#09286A');
  $('.commercieel-title').css('background-color', '#09286A');
  $('.geentest-title').css('background-color', '#ee5052');

  setTimeout(function(){
      $('.informatieblok1').css('opacity', '0');
      $('.informatieblok2').css('opacity', '0');
      $('.informatieblok3').css('opacity', '1');
  },100);
});

// type

// typing effect
var i = 0;
var txt =
'Welkom!  ';


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


})
