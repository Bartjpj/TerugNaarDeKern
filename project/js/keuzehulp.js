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

$('input[type="checkbox"]').on('change', function() {
  $('input[name="' + this.name + '"]').not(this).prop('checked', false);
  if($('#v1a1').is(':checked')){
      huisarts+=1;
      console.log('huisarts true',huisarts);
  } else if($('#v1a1').not(':checked')){
    huisarts = 0;
    console.log('huisarts false',huisarts);
  }
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
