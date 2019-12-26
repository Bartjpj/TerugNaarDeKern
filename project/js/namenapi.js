var groet = "";

var div = document.createElement('div');
div.textContent = "gegevens";
div.setAttribute('class', 'tooltip');
var span = document.createElement('span');
span.textContent = "Onze data is afkomstig van de De Nederlandse Voornamenbank van het Meertens Instituut KNAW. Zij publiceerden een bestand (uit 2010) met meer dan 500 eerste mannelijke en vrouwelijke eerste voornamen (met de Nederlandse nationaliteit en wonend in Nederland). Voor meer info zie:  www.meertens.knaw.nl/nvb";
span.setAttribute('class', 'tooltiptext');
div.appendChild(span);

var gegevens = document.getElementById('gegevens');
gegevens.appendChild(div);
$('#gegevens').css('display', 'none');

$("#btnNaam").click(function(){
  var naam = document.getElementById('naam').value;
  naam = naam.charAt(0).toUpperCase() + naam.slice(1);
  $.getJSON("js/namen.json", function(json) {
    // console.log(json); // this will show the info it in firebug console
    // var naam = 'Cornelis';
    // console.log(naam);
    for (var key in json) {
      var item = json[key];
      for (var key2 in item) {
        var splitchars = item[key2].split(";");
      }

      if (splitchars[3] == naam){
        groet = "";
        groet+= "Hey " + naam + ", leuk je te ontmoeten. Volgens onze " + gegevens.innerHTML + " zijn er " + splitchars[4] + " mensen met jouw naam.";
        document.getElementById('naamgroet').innerHTML = groet;
        break;
      }
      else if (splitchars[1] == naam){
        groet = "";
        groet+= "Hey " + naam + ", leuk je te ontmoeten. Volgens onze " + gegevens.innerHTML + " zijn er " + splitchars[2] + " mensen met jouw naam.";
        document.getElementById('naamgroet').innerHTML = groet;
        break;
      }

      else if(naam == ''){
        groet = "";
        document.getElementById('naamgroet').innerHTML = "";
        break;
      }

      else{
        groet = "";
        groet+='Hey ' + naam + ", leuk je te ontmoeten.";
        document.getElementById('naamgroet').innerHTML = groet;
      }
    }
  });
});
