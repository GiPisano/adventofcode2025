/*

puntatore -> 50 
cassaforte -> range 0-99

direzione -> L || R
giri -> numbers

leggere il numero dal file input.txt
L sta per -
R sta per +

se arriva a 99 e do + 1 va a 0
se arriva a 0 e do - 1 va a 99

contare quante volte puntatore == 0

*/

const fs = require("fs");
// Legge il file in modo sincrono
const input = fs.readFileSync("input.txt", "utf-8");

const righe = input.trim().split("\n");
let puntatore = 50;
let counter = 0;

for (const riga of righe) {
  const direzione = riga[0]; // "L" o "R"
  const giri = parseInt(riga.slice(1));

  if (direzione === "L") {
    puntatore = (puntatore - giri + 100) % 100;
  } else if (direzione === "R") {
    puntatore = (puntatore + giri) % 100;
  }

  if (puntatore === 0) {
    counter++;
  }
}

console.log("Password:", counter);
