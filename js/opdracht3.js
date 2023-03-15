var input = document.createElement("input");
document.body.appendChild(input);

var searchButton = document.createElement("button");
searchButton.innerText = "Go";
document.body.appendChild(searchButton);
var age;

fetch('json/opdracht2_bijlage.json')
.then(respons => respons.json())
.then(data => {
    var info = document.createElement("p");
    var person = Object.values(data);
    person.forEach(person => {
        var personInfo = `Voornaam: ${person.voornaam}\n Achternaam: ${person.achternaam}\n Nationaliteit: ${person.nationaliteit}\n Leeftijd: ${person.leeftijd}\n Gewicht: ${person.gewicht}\n \n`;
        info.innerText += personInfo;
        document.body.appendChild(info);
    });
    
    searchButton.addEventListener("click", function() {
        info.innerText = "";
        age = input.value;
        var filteredList = person.filter(user => user.leeftijd > age);
        filteredList.forEach(newPerson => {
            var personInfo = `Voornaam: ${newPerson.voornaam}\n Achternaam: ${newPerson.achternaam}\n Nationaliteit: ${newPerson.nationaliteit}\n Leeftijd: ${newPerson.leeftijd}\n Gewicht: ${newPerson.gewicht}\n \n`;
            info.innerText += personInfo;
            document.body.appendChild(info);
        })
    });
})