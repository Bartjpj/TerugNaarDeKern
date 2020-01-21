// console.log('keuzehulp_data.js is ingeladen');

//huisarts
var antwoord1 = 0;
var huisarts1 = 0; var huisarts2 = 0;
var huisarts3 = 0; var huisarts4 = 0; var huisarts5 = 0; var huisarts6 = 0; var huisarts7 = 0; var huisarts8 = 0; var huisarts9 = 0; var huisarts10 = 0; var huisarts11 = 0; var huisarts12 = 0; var huisarts13 = 0; var huisarts14 = 0; var huisarts15 = 0;
var huisarts16 = 0; var huisarts17 = 0; var huisarts18 = 0; var huisarts19n1 = 0; var huisarts19n2 = 0; var huisarts19n3 = 0; var huisarts19n4 = 0; var huisarts19n5 = 0; var huisarts20n1 = 0; var huisarts20n2 = 0; var huisarts20n3 = 0; var huisarts20n4 = 0; var huisarts20n5 = 0; var huisarts21 = 0; var huisarts22 = 0; var huisarts23 = 0;

//commercieel
var antwoord2 = 0;
var commercieel1 = 0; var commercieel2 = 0; var commercieel3 = 0; var commercieel4 = 0; commercieel5 = 0; var commercieel6 = 0; var commercieel7 = 0; var commercieel8 = 0; var commercieel9 = 0; var commercieel10 = 0; var commercieel11 = 0; var commercieel12 = 0; commercieel13 = 0; var commercieel14 = 0;
var commercieel15 = 0; var commercieel16 = 0; var commercieel17 = 0; var commercieel18 = 0; var commercieel19n1 = 0; var commercieel19n2 = 0; var commercieel19n3 = 0; var commercieel19n4 = 0; var commercieel19n5 = 0; var commercieel20n1 = 0; var commercieel20n2 = 0; var commercieel20n3 = 0; var commercieel20n4 = 0; var commercieel20n5 = 0; var commercieel21 = 0; var commercieel22 = 0; var commercieel23 = 0;

//commercieel
var antwoord3 = 0;
var geentest1 = 0; var geentest2 = 0; var geentest3 = 0; var geentest4 = 0; geentest5 = 0; var geentest6 = 0; var geentest7 = 0; var geentest8 = 0; var geentest9 = 0; var geentest10 = 0; var geentest11 = 0; var geentest12 = 0; geentest13 = 0; var geentest14 = 0;
var geentest15 = 0; var geentest16 = 0; var geentest17 = 0; var geentest18 = 0; var geentest19 = 0; var geentest20 = 0; geentest21 = 0; var geentest22 = 0; var geentest23 = 0;

$('input[type="checkbox"]').on('change', function() {
  $('input[name="' + this.name + '"]').not(this).prop('checked', false);

  if($('#v1a1').is(':checked')){huisarts1=1; commercieel1=1;geentest1=0;} else if($('#v1a1').not(':checked')){huisarts1=0; commercieel1=0;}
  if($('#v1a2').is(':checked')){huisarts1=0; commercieel1=0;geentest1=1;} else if($('#v1a2').not(':checked')){geentest1=0;}
  // var coffee=document.getElementsByName('test7');
  // var z;
  // var txt="";
  // for (z = 0; z < coffee.length; z++) {
  //   if (coffee[z].checked) {
  //     txt = txt + coffee[z].value + " ";
  //   }
  //   alert(txt);
  // }
  // // var checkedValue = $('.btn-strongly-agree btnv1:checked').val();
  // console.log(txt)

  // var label = $("input[type='checkbox']:checked:last").next().text(); 
  // label = $.trim(label);
  // alert(label);

  if($('#v2a1').is(':checked')){huisarts2=1; commercieel2=1;geentest2=0;} else if($('#v2a1').not(':checked')){huisarts2=0; commercieel2=0;}
  if($('#v2a2').is(':checked')){huisarts2=0; commercieel2=0;geentest2=1;} else if($('#v2a2').not(':checked')){geentest2=0;}

  if($('#v3a1').is(':checked')){huisarts3=1; commercieel3=1; geentest3=0;} else if($('#v3a1').not(':checked')){huisarts3=0; commercieel3=0;}
  if($('#v3a2').is(':checked')){huisarts3=0; commercieel3=0; geentest3=1;} else if($('#v3a2').not(':checked')){geentest3=0;}

  if($('#v4a1').is(':checked')){geentest4=1;} else if($('#v4a1').not(':checked')){geentest4=0;}
  if($('#v4a2').is(':checked')){huisarts4=1; commercieel4=1;} else if($('#v4a2').not(':checked')){huisarts4=0; commercieel4=0;}

  if($('#v5a1').is(':checked')){huisarts5=1; commercieel5=1;} else if($('#v5a1').not(':checked')){huisarts5=0; commercieel5=0;}
  if($('#v5a2').is(':checked')){geentest5=1;} else if($('#v5a2').not(':checked')){geentest5=0; commercieel5=0;}

  if($('#v6a1').is(':checked')){huisarts6=1;commercieel6=1} else if($('#v6a1').not(':checked')){huisarts6=0; commercieel6=0;}
  if($('#v6a2').is(':checked')){geentest6=1} else if($('#v6a2').not(':checked')){geentest6=0;}

  if($('#v7a1').is(':checked')){geentest7=1} else if($('#v7a1').not(':checked')){geentest7=0;}
  if($('#v7a2').is(':checked')){huisarts7=1;commercieel7=1} else if($('#v7a2').not(':checked')){huisarts7=0;commercieel7=0}

  if($('#v8a1').is(':checked')){huisarts8=1} else if($('#v8a1').not(':checked')){huisarts8=0;}
  if($('#v8a2').is(':checked')){geentest8=1} else if($('#v8a2').not(':checked')){geentest8=0;}

  if($('#v9a1').is(':checked')){geentest9=1} else if($('#v9a1').not(':checked')){geentest9=0;}
  if($('#v9a2').is(':checked')){huisarts9=1;commercieel9=1} else if($('#v9a2').not(':checked')){huisarts9=0;commercieel9=0}

  if($('#v10a1').is(':checked')){huisarts10=1; commercieel10=1} else if($('#v10a1').not(':checked')){huisarts10=0; commercieel10=0;}
  if($('#v10a2').is(':checked')){geentest10=1} else if($('#v10a2').not(':checked')){geentest10=0;}

  if($('#v11a1').is(':checked')){huisarts11=1;} else if($('#v11a1').not(':checked')){huisarts11=0;}
  if($('#v11a2').is(':checked')){huisarts11=1; commercieel11=1;} else if($('#v11a2').not(':checked')){commercieel11=0;}
  if($('#v11a3').is(':checked')){huisarts11=1; commercieel11=1;} else if($('#v11a3').not(':checked')){}
  if($('#v11a4').is(':checked')){huisarts11=1} else if($('#v11a4').not(':checked')){}
  if($('#v11a5').is(':checked')){commercieel11=1} else if($('#v11a5').not(':checked')){}
  if($('#v11a6').is(':checked')){geentest11=1} else if($('#v11a6').not(':checked')){geentest11=0;}

  if($('#v12a1').is(':checked')){commercieel12=1;} else if($('#v12a1').not(':checked')){commercieel12=0;}
  if($('#v12a2').is(':checked')){huisarts12=1;commercieel12=1;} else if($('#v12a2').not(':checked')){huisarts12=0;}
  if($('#v12a3').is(':checked')){geentest12=1;} else if($('#v12a3').not(':checked')){geentest12=0;}
  //
  if($('#v13a2').is(':checked')){huisarts13=1;commercieel13=1;} else if($('#v13a2').not(':checked')){huisarts13=0;commercieel13=0;}
  //
  if($('#v14a1').is(':checked')){geentest14=1;} else if($('#v14a1').not(':checked')){geentest14=0;}
  if($('#v14a2').is(':checked')){huisarts14=1; commercieel14=1;} else if($('#v14a2').not(':checked')){huisarts14=0;commercieel14=0;}
  if($('#v14a3').is(':checked')){huisarts14=1;commercieel14=1;} else if($('#v14a3').not(':checked')){}

  if($('#v15a1').is(':checked')){geentest15=1;} else if($('#v15a1').not(':checked')){geentest15=0;}
  if($('#v15a2').is(':checked')){huisarts15=1;commercieel15=1;} else if($('#v15a2').not(':checked')){huisarts15=0;commercieel15=0;}

  if($('#v16a1').is(':checked')){huisarts16=1;commercieel16=1;} else if($('#v16a1').not(':checked')){huisarts16=0;commercieel16=0;}
  if($('#v16a2').is(':checked')){geentest16=1;} else if($('#v16a2').not(':checked')){geentest16=0;}

  if($('#v17a1').is(':checked')){commercieel17=1;} else if($('#v17a1').not(':checked')){commercieel17=0;}
  if($('#v17a2').is(':checked')){huisarts17=1;geentest17=1;} else if($('#v17a2').not(':checked')){huisarts17=0;geentest17=0;}

  if($('#v18a1').is(':checked')){commercieel18=1;} else if($('#v18a1').not(':checked')){commercieel18=0;}
  if($('#v18a2').is(':checked')){huisarts18=1;} else if($('#v18a2').not(':checked')){huisarts18=0;}
  if($('#v18a3').is(':checked')){huisarts18=1;} else if($('#v18a3').not(':checked')){}
  if($('#v18a4').is(':checked')){huisarts18=1;} else if($('#v18a4').not(':checked')){}
  if($('#v18a5').is(':checked')){geentest18=1;} else if($('#v18a5').not(':checked')){geentest18=0;}

  if($('#v19a1').is(':checked')){huisarts19n1=1;commercieel19n1=1;$('input[name="group19n6[]"]').not(this).prop('checked', false);$('input[name="group19n7[]"]').not(this).prop('checked', false);} else if($('#v19a1').not(':checked')){huisarts19n1=0;commercieel19n1=0;}
  if($('#v19a2').is(':checked')){huisarts19n2=1;commercieel19n2=1;$('input[name="group19n6[]"]').not(this).prop('checked', false);$('input[name="group19n7[]"]').not(this).prop('checked', false);} else if($('#v19a2').not(':checked')){huisarts19n2=0;commercieel19n2=0;}
  if($('#v19a3').is(':checked')){huisarts19n3=1;commercieel19n3=1;$('input[name="group19n6[]"]').not(this).prop('checked', false);$('input[name="group19n7[]"]').not(this).prop('checked', false);} else if($('#v19a3').not(':checked')){huisarts19n3=0;commercieel19n3=0;}
  if($('#v19a4').is(':checked')){huisarts19n4=1;commercieel19n4=1;$('input[name="group19n6[]"]').not(this).prop('checked', false);$('input[name="group19n7[]"]').not(this).prop('checked', false);} else if($('#v19a4').not(':checked')){huisarts19n4=0;commercieel19n4=0;}
  if($('#v19a5').is(':checked')){huisarts19n5=1;commercieel19n5=1;$('input[name="group19n6[]"]').not(this).prop('checked', false);$('input[name="group19n7[]"]').not(this).prop('checked', false);} else if($('#v19a5').not(':checked')){huisarts19n5=0;commercieel19n5=0;}

  if($('#v19a6').is(':checked')){geentest19=1;huisarts19n1=0;commercieel19n1=0;huisarts19n2=0;commercieel19n2=0;huisarts19n3=0;commercieel19n3=0;huisarts19n4=0;commercieel19n4=0;huisarts19n5=0;commercieel19n5=0; $('input[name="group19n1[]"]').not(this).prop('checked', false);$('input[name="group19n1[]"]').not(this).prop('checked', false);$('input[name="group19n2[]"]').not(this).prop('checked', false);$('input[name="group19n3[]"]').not(this).prop('checked', false);$('input[name="group19n4[]"]').not(this).prop('checked', false);$('input[name="group19n5[]"]').not(this).prop('checked', false);$('input[name="group19n7[]"]').not(this).prop('checked', false);} else if($('#v19a6').not(':checked')){geentest19=0;}

  if($('#v19a7').is(':checked')){geentest19=0;huisarts19n1=0;commercieel19n1=0;huisarts19n2=0;commercieel19n2=0;huisarts19n3=0;commercieel19n3=0;huisarts19n4=0;commercieel19n4=0;huisarts19n5=0;commercieel19n5=0;$('input[name="group19n1[]"]').not(this).prop('checked', false); $('input[name="group19n1[]"]').not(this).prop('checked', false);$('input[name="group19n2[]"]').not(this).prop('checked', false);$('input[name="group19n3[]"]').not(this).prop('checked', false);$('input[name="group19n4[]"]').not(this).prop('checked', false);$('input[name="group19n5[]"]').not(this).prop('checked', false);$('input[name="group19n6[]"]').not(this).prop('checked', false);} else if($('#v19a7').not(':checked')){}

  if($('#v20a1').is(':checked')){huisarts20n1=1;commercieel20n1=1;$('input[name="group20n6[]"]').not(this).prop('checked', false);$('input[name="group20n7[]"]').not(this).prop('checked', false);} else if($('#v20a1').not(':checked')){huisarts20n1=0;commercieel20n1=0;}
  if($('#v20a2').is(':checked')){huisarts20n2=1;commercieel20n2=1;$('input[name="group20n6[]"]').not(this).prop('checked', false);$('input[name="group20n7[]"]').not(this).prop('checked', false);} else if($('#v20a2').not(':checked')){huisarts20n2=0;commercieel20n2=0;}
  if($('#v20a3').is(':checked')){huisarts20n3=1;commercieel20n3=1;$('input[name="group20n6[]"]').not(this).prop('checked', false);$('input[name="group20n7[]"]').not(this).prop('checked', false);} else if($('#v20a3').not(':checked')){huisarts20n3=0;commercieel20n3=0;}
  if($('#v20a4').is(':checked')){huisarts20n4=1;commercieel20n4=1;$('input[name="group20n6[]"]').not(this).prop('checked', false);$('input[name="group20n7[]"]').not(this).prop('checked', false);} else if($('#v20a4').not(':checked')){huisarts20n4=0;commercieel20n4=0;}
  if($('#v20a5').is(':checked')){huisarts20n5=1;commercieel20n5=1;$('input[name="group20n6[]"]').not(this).prop('checked', false);$('input[name="group20n7[]"]').not(this).prop('checked', false);} else if($('#v20a5').not(':checked')){huisarts20n5=0;commercieel20n5=0;}
  if($('#v20a6').is(':checked')){geentest20=1;huisarts20n1=0;commercieel20n1=0;huisarts20n2=0;commercieel20n2=0;huisarts20n3=0;commercieel20n3=0;huisarts20n4=0;commercieel20n4=0;huisarts20n5=0;commercieel20n5=0; $('input[name="group20n1[]"]').not(this).prop('checked', false);$('input[name="group20n1[]"]').not(this).prop('checked', false);$('input[name="group20n2[]"]').not(this).prop('checked', false);$('input[name="group20n3[]"]').not(this).prop('checked', false);$('input[name="group20n4[]"]').not(this).prop('checked', false);$('input[name="group20n5[]"]').not(this).prop('checked', false);$('input[name="group20n7[]"]').not(this).prop('checked', false);} else if($('#v20a6').not(':checked')){geentest20=0;}

  if($('#v20a7').is(':checked')){geentest20=0;huisarts20n1=0;commercieel20n1=0;huisarts20n2=0;commercieel20n2=0;huisarts20n3=0;commercieel20n3=0;huisarts20n4=0;commercieel20n4=0;huisarts20n5=0;commercieel20n5=0;$('input[name="group20n1[]"]').not(this).prop('checked', false);$('input[name="group20n1[]"]').not(this).prop('checked', false);$('input[name="group20n2[]"]').not(this).prop('checked', false);$('input[name="group20n3[]"]').not(this).prop('checked', false);$('input[name="group20n4[]"]').not(this).prop('checked', false);$('input[name="group20n5[]"]').not(this).prop('checked', false);$('input[name="group20n6[]"]').not(this).prop('checked', false);} else if($('#v20a7').not(':checked')){}

  if($('#v21a1').is(':checked')){commercieel21=1;} else if($('#v21a1').not(':checked')){commercieel21=0;}
  if($('#v21a2').is(':checked')){commercieel21=1;} else if($('#v21a2').not(':checked')){}
  if($('#v21a3').is(':checked')){huisarts21=1;} else if($('#v21a3').not(':checked')){huisarts21=0;}

  if($('#v22a1').is(':checked')){huisarts22=1;commercieel22=1;} else if($('#v22a1').not(':checked')){huisarts22=0;commercieel22=0;}
  if($('#v22a2').is(':checked')){huisarts22=1;commercieel22=1;} else if($('#v22a2').not(':checked')){}
  if($('#v22a3').is(':checked')){geentest22=1;} else if($('#v22a2').not(':checked')){geentest22=0;}

  if($('#v23a1').is(':checked')){huisarts23=1;commercieel23=1;} else if($('#v23a1').not(':checked')){huisarts23=0;commercieel23=0;}
  if($('#v23a2').is(':checked')){huisarts23=1;commercieel23=1;} else if($('#v23a2').not(':checked')){}
  if($('#v23a3').is(':checked')){geentest23=1;} else if($('#v23a2').not(':checked')){geentest23=0;}


  var antwoord1 = huisarts1 + huisarts2 + huisarts3 + huisarts4 + huisarts5 + huisarts6 + huisarts7 + huisarts8 + huisarts9 + huisarts10 + huisarts11 + huisarts12 + huisarts13 + huisarts14 + huisarts15 + huisarts16 + huisarts17 + huisarts18 + huisarts19n1 + huisarts19n2 + huisarts19n3 + huisarts19n4 + huisarts19n5 + huisarts20n1 + huisarts20n2 + huisarts20n3 + huisarts20n4 + huisarts20n5 + huisarts21 + huisarts22 + huisarts23;

  // console.log('antwoord1',antwoord1);


  var antwoord2 = commercieel1 + commercieel2 + commercieel3 + commercieel4 + commercieel5 + commercieel6 + commercieel7 + commercieel8 + commercieel9 + commercieel10 + commercieel11 + commercieel12 + commercieel13 + commercieel14 + commercieel15 + commercieel16 + commercieel17 + commercieel18 + commercieel19n1 + commercieel19n2 + commercieel19n3 + commercieel19n4 + commercieel19n5 + commercieel20n1 + commercieel20n2 + commercieel20n3 + commercieel20n4 + commercieel20n5 + commercieel21 + commercieel22 + commercieel23;

  // console.log('antwoord2',antwoord2);

  var antwoord3 = geentest1 + geentest2 + geentest3 + geentest4 + geentest5 + geentest6 + geentest7 + geentest8 + geentest9 + geentest10 + geentest11 + geentest12 + geentest13 + geentest14 + geentest15 + geentest16 + geentest17 + geentest18 + geentest19 + geentest20 + geentest21 + geentest22 + geentest23;

  // console.log('antwoord3',antwoord3);

  localStorage.setItem("antwoord1", antwoord1); //It's saved!
  antwoord1 = localStorage.getItem("antwoord1"); //Let's grab it and save it to a variable
  // console.log('localstorage antwoord1',antwoord1); //Logs "Hello World!"

  localStorage.setItem("antwoord2", antwoord2); //It's saved!
  antwoord1 = localStorage.getItem("antwoord2"); //Let's grab it and save it to a variable
  // console.log('localstorage antwoord2',antwoord2); //Logs "Hello World!"

  localStorage.setItem("antwoord3", antwoord3); //It's saved!
  antwoord1 = localStorage.getItem("antwoord3"); //Let's grab it and save it to a variable
  // console.log('localstorage antwoord3',antwoord3); //Logs "Hello World!"

});
