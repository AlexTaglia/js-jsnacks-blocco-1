// ---------------------- js-snack-1-----------------------

/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

var numFirst = parseInt(prompt('inserisci un numero'));
var numSecond = parseInt(prompt("inserisci un'altro numero"));
var text = 'il numero maggiore che hai inserito è ';

if (numFirst > numSecond){
    document.getElementById('print').innerHTML = text + numFirst;
} else if (numFirst < numSecond){
    document.getElementById('print').innerHTML = text + numSecond;
} else {
    document.getElementById('print').innerHTML = "i due numeri sono uguali";
}


