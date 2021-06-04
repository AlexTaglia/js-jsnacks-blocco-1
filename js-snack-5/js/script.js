// ---------------------- js-snack-5-----------------------

/*
Crea un array vuoto
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

var outputHtml = document.getElementById('output');

var arrNum = [];

for (var i = 0; i < 6; i++) {
    var num = parseInt(prompt('inserisci un numero'));
    if (num % 2 !== 0){
        arrNum.push(num);
    }
}

console.log(arrNum);
outputHtml.innerHTML = arrNum;



