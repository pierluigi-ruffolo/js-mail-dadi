/*  Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola  più lunga. */

/* Attraverso prompt faccio inserire due parole dall'utente */
/* prima stampiamo parola piu corta */
/* poi stampiamo parola piu lunga */

const parola1 = prompt("Inserisci parola1");
const parola2 = prompt("inserisci parola2");
if (parola1 === "" || parola2 === "" || !isNaN(parola1) || !isNaN(parola2)) {
  alert("inserisci una parola");
} else {
  if (parola1.length === parola2.length) {
    console.log("hanno la stessa lunghezza");
  } else if (parola1.length > parola2.length) {
    console.log(parola2);
    console.log(parola1);
  } else {
    console.log(parola1);
    console.log(parola2);
  }
}
