// ---------------------- js-snack-8-----------------------

/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

(bonus: controllate che il numero sia realmente di 4 cifre altrimenti 
restituite un alert) 
*/

var outputHtml = document.getElementById('output');

var num = prompt('Inserisci un numero di 4 cifre');
var result = 0;

if (num.length !== 4) {
    alert('il numero inserito non è di 4 cifre');

} else if (isNaN(num)) {
    alert("L'input deve essere un numero");

} else {
    for (var i = 0; i < num.length; i++) {
        result += parseInt(num[i])
        outputHtml.innerHTML = result;
    }
}