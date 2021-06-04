// ---------------------- js-snack-4-----------------------

/*
In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare 
o no alla festa.
*/

var outputAccess = document.getElementById('access');

var user = prompt('inserisci il tuo nome');
user = user[0].toUpperCase() + user.slice(1);

var guests = ['Topolino', 'Paperino', 'Minni', 'Paperina', 'Pippo', 'Pluto', 'Cip', 'Ciop', 'Paperone'];

var flag = false; 

for (var i = 0; i < guests.length; i++) {
    if (guests[i] === user){
        flag = true; 
    }
}

if (flag) {
    outputAccess.innerHTML = 'Sei in lista puoi entrare';
} else {
    outputAccess.innerHTML = 'Non sei in lista, non puoi entrare';
}
