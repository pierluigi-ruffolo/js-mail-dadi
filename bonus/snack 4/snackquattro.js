/* Snack 4
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

const numUtente = prompt("Inserisci un numero");

for (let i = 1; i <= numUtente; i++) {
  console.log(i * i * i);
}
