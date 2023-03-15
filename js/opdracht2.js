fetch('json/opdracht2_bijlage.json')
.then(respons => respons.json())
.then(data => {showInfo(data)})

var info = document.createElement("p");
function showInfo(data) {
  var person = Object.values(data);
  person.forEach(person => {
    var personInfo = `Voornaam: ${person.voornaam}\n Achternaam: ${person.achternaam}\n Nationaliteit: ${person.nationaliteit}\n Leeftijd: ${person.leeftijd}\n Gewicht: ${person.gewicht}\n \n`;
    info.innerText += personInfo;
    document.body.appendChild(info);
  });
}