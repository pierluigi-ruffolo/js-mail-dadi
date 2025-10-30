/*  Mail
Crea un array con delle email di chi può acedere.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES! */

/* creiamo array con delle email */
/* creo una variabile */
/* facciamo inserire una mail all'utente */
/* traformo mail inserita in minuscolo */
/* cicliamo sull'array di email */
/* se troviamo l'email inserita email corretta */
/* altrimenti email non corretta */

const array = [
  "lucarossi@gmail.com",
  "giovannibruno@tim.it",
  "lucafranchi@gmail.com",
  "luciasantoro@gmail.com",
  "francescofrassi@gmail.com",
  "simonerossi@gmail.com",
  "francescafrassi@gmail.com",
];
let messaggio = "Non puoi accedere";

const emailUtente = prompt("inserisci la tua email").toLowerCase();
for (let i = 0; i < array.length && messaggio !== "puoi accedere"; i++) {
  const emailCicle = array[i];
  if (emailUtente === emailCicle) {
    messaggio = "Puoi accedere";
  }
}

console.log(messaggio);

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.  */
const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;
let risultato;
if (giocatore > computer) {
  risultato = "ha vinto giocatore!!";
} else if (computer > giocatore) {
  risultato = "ha vinto computer!!";
} else {
  risultato = "pareggio";
}
console.log(risultato);

/* Gioco: Il computer genera un numero casuale da 1 a 6.
 L’utente inserisce un numero da 1 a 6 tramite prompt.
Vince chi ottiene il numero più alto.*/

const giocatore1 = parseInt(prompt("Inserisci un numero da 1 a 6"));
const computer1 = Math.floor(Math.random() * 6) + 1;

if (isNaN(giocatore1)) {
  alert("Inserisci un numero");
} else if (giocatore1 < 1 || giocatore1 > 6) {
  alert(" Inserisci un numero da uno a sei");
} else {
  let vincitore;
  if (giocatore1 > computer1) {
    vincitore = " Ha vinto giocatore!!";
  } else if (computer1 > giocatore1) {
    vincitore = " ha vinto computer";
  } else {
    vincitore = " Pareggio";
  }
  console.log("Giocatore:", giocatore1);
  console.log("Computer:", computer1);
  console.log(vincitore);
}
