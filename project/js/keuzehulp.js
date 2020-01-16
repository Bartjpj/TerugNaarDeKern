console.log('keuzehulp.js is ingeladen');

var val;
// $(function(){
//       $('#save_value1').click(function(){
//         val = [];
//         $(':checkbox:checked').each(function(i){
//           val[i] = $(this).val();
//           console.log(val);
//         });
//       });
//     });

// $('input[value="' + this.value + '"]').not(this).prop('checked', false);

// if($('#v1a1').is(':checked')){
//   huisarts+=1;
//   console.log('huisarts true',huisarts);
// } else if($('#v1a1').not(':checked')){
// huisarts = 0;
// console.log('huisarts false',huisarts);
// }
// if($('input[value="huisarts"]').not(this).prop('checked', false)){
//     huisarts+=1;
//     console.log('huisarts true',huisarts);
// }
//
// else if($('input[value="huisarts"]').prop('checked', true)){
//     huisarts = 0;
//     console.log('huisarts false',huisarts);
// }



// if($('input[value="huisarts"]').not(this).prop('checked', false));
// });
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
  $('#vraag-9').css('display', 'block');
  $('#weetje-9').css('display', 'block');
});
$('#item-10').click(function() {
  $('.overlay-dark').css('display', 'block');
  $('#vraag-10').css('display', 'block');
  $('#weetje-10').css('display', 'block');
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

$('.popup-weetje').click(function() {
  $('.popup-vraag').css('z-index', '101');
  $('.popup-weetje').css('z-index', '100');

  if ($('.popup-weetje').css('right') == '40%'){
    $('.popup-weetje').css('right', '60%');
  }else {
    $('.popup-weetje').css('right', '40%');
  }
});

// $('.popup-weetje').click(function() {
//   $('.popup-vraag').css('z-index', '101');
//   $('.popup-weetje').css('z-index', '100');
//   $('.popup-weetje').css('right', '60%');
// });

$('.button').click(function() {
  $('.popup-vraag').css('display', 'none');
  $('.overlay-dark').css('display', 'none');
  $('.popup-weetje').css('display', 'none');
});

// $('.submit-btn1').click(function() {
//   $('.popup-vraag').css('display', 'none');
//   $('.overlay-dark').css('display', 'none');
//   $('.popup-weetje').css('display', 'none');
// });

$('input[type="checkbox"]').on('change', function() {
  $('input[name="' + this.name + '"]').not(this).prop('checked', false);

    if(  $('input[name="group1[]"]').is(':checked') ) {
      $('.chrom1').css({ fill: "#E94C4C" });
    } else {
      $('.chrom1').css({ fill: "#fff" });
    }
    if(  $('input[name="group2[]"]').is(':checked') ) {
      $('.chrom2').css({ fill: "#E94C4C" });
    } else {
      $('.chrom2').css({ fill: "#fff" });
    }
    if(  $('input[name="group3[]"]').is(':checked') ) {
      $('.chrom3').css({ fill: "#E94C4C" });
    } else {
      $('.chrom3').css({ fill: "#fff" });
    }
    if(  $('input[name="group4[]"]').is(':checked') ) {
      $('.chrom4').css({ fill: "#E94C4C" });
    } else {
      $('.chrom4').css({ fill: "#fff" });
    }
    if(  $('input[name="group5[]"]').is(':checked') ) {
      $('.chrom5').css({ fill: "#E94C4C" });
    } else {
      $('.chrom5').css({ fill: "#fff" });
    }
    if(  $('input[name="group6[]"]').is(':checked') ) {
      $('.chrom6').css({ fill: "#E94C4C" });
    } else {
      $('.chrom6').css({ fill: "#fff" });
    }
    if(  $('input[name="group7[]"]').is(':checked') ) {
      $('.chrom7').css({ fill: "#E94C4C" });
    } else {
      $('.chrom7').css({ fill: "#fff" });
    }
    if(  $('input[name="group8[]"]').is(':checked') ) {
      $('.chrom8').css({ fill: "#E94C4C" });
    } else {
      $('.chrom8').css({ fill: "#fff" });
    }
    if(  $('input[name="group9[]"]').is(':checked') ) {
      $('.chrom9').css({ fill: "#E94C4C" });
    } else {
      $('.chrom9').css({ fill: "#fff" });
    }
    if(  $('input[name="group10[]"]').is(':checked') ) {
      $('.chrom10').css({ fill: "#E94C4C" });
    } else {
      $('.chrom10').css({ fill: "#fff" });
    }

    if(  $('input[name="group11[]"]').is(':checked') ) {
      $('.chrom11').css({ fill: "#E94C4C" });
    } else {
      $('.chrom11').css({ fill: "#fff" });
    }
    if(  $('input[name="group12[]"]').is(':checked') ) {
      $('.chrom12').css({ fill: "#E94C4C" });
    } else {
      $('.chrom12').css({ fill: "#fff" });
    }
    if(  $('input[name="group13[]"]').is(':checked') ) {
      $('.chrom13').css({ fill: "#E94C4C" });
    } else {
      $('.chrom13').css({ fill: "#fff" });
    }
    if(  $('input[name="group14[]"]').is(':checked') ) {
      $('.chrom14').css({ fill: "#E94C4C" });
    } else {
      $('.chrom14').css({ fill: "#fff" });
    }
    if(  $('input[name="group15[]"]').is(':checked') ) {
      $('.chrom15').css({ fill: "#E94C4C" });
    } else {
      $('.chrom15').css({ fill: "#fff" });
    }
    if(  $('input[name="group16[]"]').is(':checked') ) {
      $('.chrom16').css({ fill: "#E94C4C" });
    } else {
      $('.chrom16').css({ fill: "#fff" });
    }
    if(  $('input[name="group17[]"]').is(':checked') ) {
      $('.chrom17').css({ fill: "#E94C4C" });
    } else {
      $('.chrom17').css({ fill: "#fff" });
    }
    if(  $('input[name="group18[]"]').is(':checked') ) {
      $('.chrom18').css({ fill: "#E94C4C" });
    } else {
      $('.chrom18').css({ fill: "#fff" });
    }
    if(  $('input[name="group19n1[]"]').is(':checked') || $('input[name="group19n2[]"]').is(':checked') || $('input[name="group19n3[]"]').is(':checked') || $('input[name="group19n4[]"]').is(':checked') || $('input[name="group19n5[]"]').is(':checked') || $('input[name="group19n6[]"]').is(':checked') || $('input[name="group19n7[]"]').is(':checked') ) {
      $('.chrom19').css({ fill: "#E94C4C" });
    } else {
      $('.chrom19').css({ fill: "#fff" });
    }


    if(  $('input[name="group20n1[]"]').is(':checked') || $('input[name="group20n2[]"]').is(':checked') || $('input[name="group20n3[]"]').is(':checked') || $('input[name="group20n4[]"]').is(':checked') || $('input[name="group20n5[]"]').is(':checked') || $('input[name="group20n6[]"]').is(':checked') || $('input[name="group20n7[]"]').is(':checked') ) {
      $('.chrom20').css({ fill: "#E94C4C" });
    } else {
      $('.chrom20').css({ fill: "#fff" });
    }


    if(  $('input[name="group21[]"]').is(':checked') ) {
      $('.chrom21').css({ fill: "#E94C4C" });
    } else {
      $('.chrom21').css({ fill: "#fff" });
    }
    if(  $('input[name="group22[]"]').is(':checked') ) {
      $('.chrom22').css({ fill: "#E94C4C" });
    } else {
      $('.chrom22').css({ fill: "#fff" });
    }
    if(  $('input[name="group23[]"]').is(':checked') ) {
      $('.chrom23').css({ fill: "#E94C4C" });
    } else {
      $('.chrom23').css({ fill: "#fff" });
    }

    if(  $('input[name="group1[]"]').is(':checked') | $('input[name="group2[]"]').is(':checked') | $('input[name="group3[]"]').is(':checked') | $('input[name="group4[]"]').is(':checked')
    | $('input[name="group5[]"]').is(':checked') | $('input[name="group6[]"]').is(':checked') | $('input[name="group7[]"]').is(':checked') | $('input[name="group8[]"]').is(':checked')
    | $('input[name="group9[]"]').is(':checked') | $('input[name="group10[]"]').is(':checked') | $('input[name="group11[]"]').is(':checked') | $('input[name="group12[]"]').is(':checked')
    | $('input[name="group13[]"]').is(':checked') | $('input[name="group14[]"]').is(':checked') | $('input[name="group15[]"]').is(':checked') | $('input[name="group16[]"]').is(':checked')
    | $('input[name="group17[]"]').is(':checked') | $('input[name="group18[]"]').is(':checked') | $('input[name="group19[]"]').is(':checked') | $('input[name="group20[]"]').is(':checked')
    | $('input[name="group21[]"]').is(':checked') | $('input[name="group22[]"]').is(':checked') | $('input[name="group23[]"]').is(':checked')
    ) {
      $(".overlay-btn").css("opacity","0.4");
    }
    if(  $('input[name="group1[]"]').is(':checked') && $('input[name="group2[]"]').is(':checked') && $('input[name="group3[]"]').is(':checked') && $('input[name="group4[]"]').is(':checked')
    && $('input[name="group5[]"]').is(':checked') && $('input[name="group6[]"]').is(':checked') && $('input[name="group7[]"]').is(':checked') && $('input[name="group8[]"]').is(':checked')
    && $('input[name="group9[]"]').is(':checked') && $('input[name="group10[]"]').is(':checked') && $('input[name="group11[]"]').is(':checked') && $('input[name="group12[]"]').is(':checked')
    && $('input[name="group13[]"]').is(':checked') && $('input[name="group14[]"]').is(':checked') && $('input[name="group15[]"]').is(':checked') && $('input[name="group16[]"]').is(':checked')
    && $('input[name="group17[]"]').is(':checked') && $('input[name="group18[]"]').is(':checked') && $('input[name="group19[]"]').is(':checked') && $('input[name="group20[]"]').is(':checked')
    && $('input[name="group21[]"]').is(':checked') && $('input[name="group22[]"]').is(':checked') && $('input[name="group23[]"]').is(':checked')
    ) {
      $(".overlay-btn").css("opacity","1");
    }

});

//slider
$("document").ready(function() {
  $(".slider").rangeslider();
  $('.overlay-dark-startup').css('opacity', '0.7');
  if($(window).width() >= 768){
    $('.start-popup').css('width', '40%');
  };
  if($(window).width() <= 768){
    $('.start-popup').css('width', '90%');
  }
  setTimeout(function(){
    $('#load-in').css('opacity', '1');
    $('.submit-btn1').css('display', 'block');
  }, 700);
});
$.fn.rangeslider = function(options) {
  var obj = this;
  var defautValue = obj.attr("value");
  obj.wrap("<span class='range-slider'></span>");
  obj.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'><span>0</span></span></span>");
  obj.attr("oninput", "updateSlider(this)");
  updateSlider(this);
  return obj;
};

function updateSlider(passObj) {
  var obj = $(passObj);
  var value = obj.val();
  var min = obj.attr("min");
  var max = obj.attr("max");
  var range = Math.round(max - min);
  var percentage = Math.round((value - min) * 100 / range);
  var nextObj = obj.next();
  nextObj.find("span.bar-btn").css("left", percentage + "%");
  nextObj.find("span.bar > span").css("width", percentage + "%");
  nextObj.find("span.bar-btn > span").text(percentage);
};

$('.overlay-dark-startup').click(function(){
  $('.start-popup').css('width', "0%");
  $('#load-in').css('display', 'none');
  $('.overlay-dark-startup').css('opacity', '0');
  $('.submit-btn1').css('display', 'none');
  setTimeout(function(){
    $('.overlay-dark-startup').css('display', 'none');
    $('.start-popup').css('display', 'none');

  }, 1000);
});

$('.submit-btn1').click(function(){
  $('.start-popup').css('width', "0%");
  $('#load-in').css('display', 'none');
  $('.overlay-dark-startup').css('opacity', '0');
  $('.submit-btn1').css('display', 'none');
  setTimeout(function(){
    $('.overlay-dark-startup').css('display', 'none');
    $('.start-popup').css('display', 'none');
  }, 1000);
});
