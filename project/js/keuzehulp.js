console.log('keuzehulp.js is ingeladen');

$('input[type="checkbox"]').on('change', function() {
  $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

// vraag 1 selectie
var header1 = document.getElementById("vraag-1");
var btns1 = header1.getElementsByClassName("btnv1");
for (var i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function() {
  var current1 = header1.getElementsByClassName("active");
  
  console.log('current 1 ' + current1);
  if (current1.length > 0) {
    current1[0].className = current1[0].className.replace(" active", "");
     
    var elem = document.getElementById('ext-gen26');
    var txt = elem.textContent || elem.innerText;
    console.log('info 1: ' + this.className );
  }
  this.className += " active";

  });
}

// vraag 2 selectie
var header2 = document.getElementById("vraag-2");
var btns2 = header2.getElementsByClassName("btnv2");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
  var current2 = header2.getElementsByClassName("active");
  if (current2.length > 0) {
    current2[0].className = current2[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

// vraag 2 selectie
var header3 = document.getElementById("vraag-3");
var btns3 = header3.getElementsByClassName("btnv3");
for (var i = 0; i < btns3.length; i++) {
  btns3[i].addEventListener("click", function() {
  var current3 = header3.getElementsByClassName("active");
  if (current3.length > 0) {
    current3[0].className = curren3[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}