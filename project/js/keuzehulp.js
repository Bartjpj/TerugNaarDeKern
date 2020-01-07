console.log('keuzehulp.js is ingeladen');

var antwoord1 = 0;
var huisarts;
var commercieel = 0;
var geentest = 0;
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
    if(  $('input[name="group9[]"]').is(':checked') ) {
      $('.chrom19').css({ fill: "#E94C4C" });
    } else {
      $('.chrom19').css({ fill: "#fff" });
    }
    if(  $('input[name="group20[]"]').is(':checked') ) {
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
  
});

//slider
$("document").ready(function() {
  $(".slider").rangeslider();
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
