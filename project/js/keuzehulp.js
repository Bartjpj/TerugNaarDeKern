console.log('keuzehulp.js is ingeladen');

// vraag 1 selectie
var header1 = document.getElementById("vraag-1");
var btns1 = header1.getElementsByClassName("btnv1");
for (var i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

// vraag 2 selectie
var header2 = document.getElementById("vraag-2");
var btns2 = header2.getElementsByClassName("btnv2");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}