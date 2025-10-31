/* Snack 5
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi,
e da queste vuole generare una falsa lista di 5 invitati con nome e cognome. */

const nomi = [
  "Albert",
  "Leonardo",
  "Marilyn",
  "Michael",
  "Serena",
  "Elon",
  "Frida",
  "Steve",
  "Beyoncé",
  "David",
];

const cognomi = [
  "Einstein",
  "da Vinci",
  "Monroe",
  "Jackson",
  "Williams",
  "Musk",
  "Kahlo",
  "Jobs",
  "Knowles",
  "Beckham",
];

/* const nomiRandom = Math.floor(Math.random() * nomi.length - 1) + 1;
const arryNomi = nomi[nomiRandom];
const cognomiRandom = Math.floor(Math.random() * cognomi.length - 1) + 1;
const arrycognomi = cognomi[cognomiRandom];
console.log(arryNomi + arrycognomi); */

const contenitore = [];

for (let i = 0; i < 5; i++) {
  const indiceRandomNome = Math.floor(Math.random() * nomi.length);
  const indiceRandomCom = Math.floor(Math.random() * cognomi.length);
  const nomiCausali = nomi[indiceRandomNome];
  const cognomiCausali = cognomi[indiceRandomCom];
  const nomiCognomi = `${nomiCausali} ${cognomiCausali}`;
  contenitore.push(nomiCognomi);
}

console.log(contenitore);
