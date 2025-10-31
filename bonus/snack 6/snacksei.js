/* Snack 6
Crea due array che hanno un numero di elementi diversi.  
Aggiungi elementi all’array 
che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

const arr1 = ["paolo", "francesco", "franco", "francesca"];
const arr2 = ["lucia", "federica", "Matteo"];

if (arr1.length > arr2.length) {
  for (let i = arr2.length; i < arr1.length; i++) {
    arr2.push("Pippo");
  }
} else if (arr2.length > arr1.length) {
  for (let i = arr1.length; i < arr2.length; i++) {
    arr1.push("Pippo");
  }
}

console.log(arr1);
console.log(arr2);
