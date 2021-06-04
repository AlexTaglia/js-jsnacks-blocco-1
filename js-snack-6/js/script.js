// ---------------------- js-snack-6-----------------------

/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente attraverso un prompt.
*/

var outputHtml = document.getElementById('output');

var num = parseInt(prompt('inserisci un numero'));
var result = 0;

for (var i = 1; i <= num; i++) {
    result = Math.pow(i, 3);
    outputHtml.innerHTML += '<br/>' + result;
}

