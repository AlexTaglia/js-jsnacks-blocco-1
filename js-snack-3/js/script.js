// ---------------------- js-snack-3-----------------------

/*
il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

var outputHtml = document.getElementById('result');

var result = 0;

// for -----------------------
/*
for (var i = 0; i < 10; i++) {
    var num = parseInt(prompt('inserisci un numero'));
    result += num;
}

outputHtml.innerHTML = 'La somma dei numeri inseriti è ' + result;
*/


// while -----------------------
var resultArray = [];

while(resultArray.length < 10){
    var num = parseInt(prompt('inserisci un numero'));

    if (!isNaN(num)){
        result += num;
        resultArray.push(num);
    } else {
        alert('Non hai inserito un numero. Inserisci un numero');
    }
}

outputHtml.innerHTML = 'La somma dei numeri inseriti è ' + result;
