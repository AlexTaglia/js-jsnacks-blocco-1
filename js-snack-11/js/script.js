// ---------------------- js-snack-11-----------------------

/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

var outputHtml = document.getElementById('output');

var num = parseInt(prompt('Inserisci un numero'));

if (num % 2 === 0 ){
    outputHtml.innerHTML = 'Il numero inserito è pari ed è ' + num;
} else {
    outputHtml.innerHTML ='Il numero è dispari e il pari successivo è ' + (num + 1);
}






