//PDF GENERATOR
var doc2 = new jsPDF(); 


var specialElementHandlers = { 
    '#editor': function (element, renderer) { 
        return true; 
    } 
};

$('#submit3').click(function () { 

    labeltest1 = localStorage.getItem("antw1");
    labeltest2 = localStorage.getItem("antw2");
    labeltest3 = localStorage.getItem("antw3");
    labeltest4 = localStorage.getItem("antw4");
    labeltest5 = localStorage.getItem("antw5");
    labeltest6 = localStorage.getItem("antw6");
    labeltest7 = localStorage.getItem("antw7");
    labeltest8 = localStorage.getItem("antw8");
    labeltest9 = localStorage.getItem("antw9");
    labeltest10 = localStorage.getItem("antw10");
    labeltest11 = localStorage.getItem("antw11");
    labeltest12 = localStorage.getItem("antw12");
    labeltest13 = localStorage.getItem("antw13");
    labeltest14 = localStorage.getItem("antw14");
    labeltest15 = localStorage.getItem("antw15");
    labeltest16 = localStorage.getItem("antw16");
    labeltest17 = localStorage.getItem("antw17");
    labeltest18 = localStorage.getItem("antw18");
    labeltest19 = localStorage.getItem("antw19");
    labeltest20 = localStorage.getItem("antw20");
    labeltest21 = localStorage.getItem("antw21");
    labeltest22 = localStorage.getItem("antw22");
    labeltest23 = localStorage.getItem("antw23");
    // console.log('1 '+labeltest1,'2 '+labeltest2,'3 '+ labeltest3+ '4 '+labeltest4, '5'+labeltest5, '6 '+ labeltest6, '7 '+labeltest7,'8 '+labeltest8,
    // '9 '+labeltest9, '10 '+labeltest10, '11 '+labeltest11,'12 '+labeltest12,'13 '+ labeltest13, '14 '+labeltest14,'15 '+ labeltest15, '16 '+labeltest16, '17 '+labeltest17,'18 '+ labeltest18,
    // '19 '+labeltest19, '20'+labeltest20,'21 '+ labeltest21,'22 '+ labeltest22, '23 '+labeltest23)
    console.log( '19 ='+labeltest19, '20='+labeltest20,)

    doc2.fromHTML($('#informatieblok4').html(), 15, 15, { 
        'width': 190, 
            'elementHandlers': specialElementHandlers 
    }); 


    margin = 0.5,// inches on a 8.5 x 11 inch sheet.
    verticalOffset = margin

    doc2.setLineWidth(1 / 72)
	doc2.line(margin, margin, margin, 11 - margin)
	doc2.line(8.5 - margin, margin, 8.5 - margin, 11 - margin)



    doc2.setTextColor(238,80,82)
    doc2.setFontSize(35)
    doc2.text(10, 23, 'Resultaten DNA-testen Keuzehulp')
 

    doc2.setTextColor(4,31,95)
    doc2.setFontSize(12)
    doc2.text(15, 45, '1 Overweegt u op dit moment een DNA-onderzoek te laten doen?')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 55, labeltest1)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 65, '2 Wilt u gebruik maken van medische controles zodat er tijdig kan worden ingegrepen?  ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 75, labeltest2)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 85, '3 Ik wil medische controles alleen laten doen als ik zeker weet dat ik de aanleg heb.  ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 95, labeltest3)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 105, '4 Ik heb nu geen klachten en wil (daarom) geen medische controles. ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 115, labeltest4)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 125, '5 Als ik de erfelijke aanleg blijk te hebben, sta ik open voor preventieve ingrepen/operaties. ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 135, labeltest5)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 145, '6 Zou je willen weten of je een ongenezelijke ziekte hebt of een verhoogte kans daarop?  ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 155, labeltest6)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 165, '7 Als ik weet of ik de aanleg heb voor een ziekte, heeft dat invloed op hoe ik mijn leven inricht ')
    doc2.text(18, 170, '(bijvoorbeeld mijn relatie, studiekeuze, werk). ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 180, labeltest7)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 185, '8 Ik wil weten of ik de aanleg door kan geven, omdat ik een kinderwens heb.  ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 195, labeltest8)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 205, '9 Als ik weet dat ik de aanleg heb, vind ik dat heel moeilijk om aan mijn (toekomstige) partner en ')
    doc2.text(15, 210, ' familieleden te vertellen. ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 220, labeltest9)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 225, '10 Als ik de aanleg voor een aandoening blijk te hebben, is dat natuurlijk moeilijk, maar ik kan ')
    doc2.text(18, 230, ' met de nadelige gevolgen omgaan.')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 235, labeltest10)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 245, '11 Waarom wilt u een DNA test doen? ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 255, labeltest11)

    doc2.addPage()
    doc2.setTextColor(4,31,95)
    doc2.text(15, 25, '12 Vindt u het erg als de data (anoniem) gebruikt wordt om de testen van dat van een ')
    doc2.text(18, 30, 'commericeel bedrijf te verbeteren?')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 40, labeltest12)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 50, '13 Heeft u kennis van bestaande erfelijke ziektes binnen uw familie? ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 60, labeltest13)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 70, '14 Raakt u snel ongerust over uw gezondheid? ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 80, labeltest14)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 90, '15 Wanneer mijn partner en/of ik drager zijn van een erfelijke aandoening, ')
    doc2.text(18, 95, 'wil ik weten welke consequenties dat heeft voor een eventuele kinderwens?')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 105, labeltest15)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 115, '16 Ik ben me hiervan bewust en kan het aan om eventueel slecht nieuws aan mijn ')
    doc2.text(18, 120, 'familie leden te melden')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 130, labeltest16)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 140, '17 Zou u bereid zijn om te betalen voor een DNA-onderzoek.')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 150, labeltest17)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 160, '18 Wat vind je vooral belangrijk bij een dna-onderzoek?')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 170, labeltest18)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 180, '19 Selecteer de ziektes waarover je het risco voor jezelf zou willen weten.')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 190, labeltest19)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 200, '20 Selecteer de ziektes waarover je het risco voor jezelf zou willen weten.')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 210, labeltest20)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 220, '21 Hoe wil je graag de gegevens van de dna-test ontvangen?')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 230, labeltest21)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 240, '22 Zouden andere familieleden de verhoogde kans op een (erfelijke) zieke willen weten? ')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 250, labeltest22)
    doc2.setTextColor(4,31,95)
    doc2.text(15, 260, '23 De resultaten van een genetische test kunnen soms geheimen in de familie openbaren, ')
    doc2.text(18, 265, 'zoals rond biologisch vaderschap en adoptie.')
    doc2.setTextColor(77,77,77)
    doc2.text(15, 275, labeltest23)




    
    doc2.save('sample-page.pdf'); 
});


