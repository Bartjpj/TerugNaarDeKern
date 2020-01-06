console.log('resultaten.js is ingeladen');

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
