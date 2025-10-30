/*Snack 1
Inserisci un numero,
 se è pari stampa il numero, 
 se è dispari stampa il numero successivo.*/

/* faccio inseriere un numero dall'utente */
/* controlliamo che sia un numero */
/* se è pari stampo il numero */
/* se è dispari stampo il numero successivo */

const num1 = parseInt(prompt("Inserisci un numero"));
if (isNaN(num1)) {
  alert("Inserisci un numero");
} else {
  let messaggio;
  if (num1 % 2 === 0) {
    messaggio = num1;
  } else {
    messaggio = num1 + 1;
  }
  console.log(messaggio);
}
