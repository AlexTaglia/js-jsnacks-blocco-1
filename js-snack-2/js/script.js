// ---------------------- js-snack-2-----------------------

/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

var outputHtml = document.getElementById('printword');

var firstWord = prompt('inserisci una parola');
var secondWord = prompt("inserisci un'altra parola");

if (firstWord.length < secondWord.length){
    outputHtml.innerHTML = firstWord + " " + secondWord;
} else if (firstWord.length > secondWord.length){
    outputHtml.innerHTML = secondWord + " " + firstWord;
} else {
    outputHtml.innerHTML = "La parole " + secondWord + " e " + firstWord + " sono uguali";

}
