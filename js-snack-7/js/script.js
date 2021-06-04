// ---------------------- js-snack-7-----------------------

/*
Stampa le potenze di 2 fino a 1000.
*/

var outputHtml = document.getElementById('output');


var num = 2;
var result = 0;

for (var i = 0; i < 1000; i++) {
    result = Math.pow(num, i);
    outputHtml.innerHTML += '<br/>' + result;
}

