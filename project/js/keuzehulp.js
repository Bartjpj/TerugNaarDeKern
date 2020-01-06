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


// $("#save_value1").click(function(){
//   if ($('#v1a1').is(":checked") == true)
//   {
//   // it is checked
//     huisarts +=1;
//   }
//
//   else if($('#v1a1').is(":checked") == false){
//     huisarts = 0;
//     antwoord1 = 0;
//   }
//
//   antwoord1+=huisarts;
//   console.log('antwoord1 ',antwoord1);
// });
//
// $("#save_value2").click(function(){
//   if ($('#v1a1').is(":checked") == true)
//   {
//   // it is checked
//     huisarts +=1;
//   }
//
//   else if($('#v1a1').is(":checked") == false){
//     huisarts = 0;
//     antwoord1 = 0;
//   }
//
//   antwoord1+=huisarts;
//   console.log('antwoord1 ',antwoord1);
// });
// console.log('antwoord1 ',antwoord1);


// var checked = []
// $("input[name='group1[]']:checked").each(function ()
// {
//     checked.push(parseInt($(this).val()));
// });
// console.log(checked);





// $(".btnv1").click(function(){
  // if ($("input[name='group[]1']:checked")) {
  //     antwoord1 +=1;
  // };
  // $('input[type="checkbox"]').on('change', function() {

    // antwoord1 = 1;
    // if ($("input[name='huisarts']:checked")){
    //     huisarts+=1
    // } else if ($("input[name='huisarts']").checked = false){
    //   huisarts = 0;
    // }
    // if($('#v1a1').prop("checked") == true){
    //     huisarts += 1;
    // }
    // else if($('#v1a1').prop("checked") == false){
    //     huisarts = 0;
    //     antwoord = 0;
    // }
    // console.log(huisarts);
    // $('input[value="' + this.value + '"]').not(this).prop('checked', false);
  // });
// });
// });

// antwoord1+=huisarts;
// console.log(btnv1.huisarts);


// console.log(antwoord1);
