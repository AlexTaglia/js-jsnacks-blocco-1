// ---------------------- js-snack-5-----------------------

/*
Crea un array vuoto
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

var outputHtml = document.getElementById('output');
var qTy = 6;
var arrNum = [];

// for --------------------
/*
for (var i = 0; i < qTy; i++) {
    var num = parseInt(prompt('inserisci un numero'));
    if (num % 2 !== 0){
        arrNum.push(num);
    }
}
*/

// while --------------------
while (arrNum.length < qTy){
    var num = parseInt(prompt('inserisci un numero'));

    if (!isNaN(num)){
        if (num % 2 !== 0){
            arrNum.push(num);
        }
    } else {
        alert('Non hia inserito un numero, riprova')
    }


}

console.log(arrNum);
outputHtml.innerHTML = arrNum;



