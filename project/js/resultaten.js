
$(window).ready(function() { // makes sure the whole site is loaded
  console.log('resultaten.js is ingeladen');
// preload start
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(400).fadeOut("slow"); // will fade out the white DIV that covers the website.

  
// Animated CSS preloader from http://tobiasahlin.com/spinkit/
// Excellent preloader example found here: http://ismet.me/index.htm
// preload end

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

})