/* Snack 3
Crea una variabile con un numero di 
4 cifre e calcola la somma di tutte le cifre che compongono il numero.
 */

const num = 7874;
const strnum = num.toString();
console.log(strnum);
console.log(typeof strnum);
let somma = 0;
for (let i = 0; i < strnum.length; i++) {
  const numCicle = parseInt(strnum[i]);
  somma = somma + numCicle;
}
console.log(somma);
