// ---------------------- js-snack-9-----------------------

/*
Calcola la somma e la media dei primi 10 numeri.
*/

var outputHtml = document.getElementById('output');

var num = 10;
var result = 0;

for (var i = 1; i <= num; i++) {
    result += parseInt(i);
}

var average = result / num;

outputHtml.innerHTML = 'la somma dei primi ' + num + ' numeri è di ' + result;
outputHtml.innerHTML += '<br/>' + 'la media è ' + average;

