// ---------------------- js-snack-10-----------------------

/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/


var outputHtml = document.getElementById('output');

// for-----------------

var numA = 5;
var resultA = 0;

for (var i = 1; i <= numA; i++) {
    var inputA = prompt('inserisci un numero');
    resultA += parseInt(inputA);
}

outputHtml.innerHTML = 'La somma con il for è ' + resultA;


// while-----------------

var numB = 5;
var resultB = 0;
var x = 1;

while (x <= numB) {
    x++;
    var inputB = prompt('inserisci un numero');
    resultB += parseInt(inputB);
}

outputHtml.innerHTML +='<br/>' + 'La somma con il while è ' + resultB;


