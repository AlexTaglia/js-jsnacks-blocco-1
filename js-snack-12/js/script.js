// ---------------------- js-snack-12-----------------------

/*
Generatore di “nomi cognomi” casuali: 
prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
*/

var outputHtml = document.getElementById('output');
var outputList = document.getElementById('list');

var firstName = ['Topolino', 'Paperino', 'Minni', 'Paperina', 'Pippo', 'Pluto', 'Cip', 'Ciop', 'Paperone'];
var lastName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli', 'Rosa', 'Azzurri', 'Brown'];
var guestQty = 3;
var guestList =[];

outputHtml.innerHTML =  'La lista degli invitati: ';

var listHtml = '';

// for -----------------------------------
/*
for (var i = 0; i < guestQty; i++) {
    var randomNumfirstName = Math.floor(Math.random() * firstName.length);
    var randomNumlastName = Math.floor(Math.random() * lastName.length);
    
    var randomGuest = firstName[randomNumfirstName] + " " + lastName[randomNumlastName];
    
    listHtml += '<li>' + randomGuest + '</li>';
}

outputList.innerHTML = listHtml;
*/

// while -----------------------------------
while (guestList.length < guestQty){
    var randomNumfirstName = Math.floor(Math.random() * firstName.length);
    var randomNumlastName = Math.floor(Math.random() * lastName.length);
    
    var randomGuest = firstName[randomNumfirstName] + " " + lastName[randomNumlastName];
    
    if(!guestList.includes(randomGuest)){
        guestList.push(randomGuest);
        listHtml += '<li>' + randomGuest + '</li>';
    }
}
outputList.innerHTML = listHtml;

