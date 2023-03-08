/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

// INPUT
// Devo chiedere il numero di chilometri da percorrere e l'età
const kilometres = parseInt(prompt("Benvenuto! Quanti chilometri vuoi percorrere?"));
console.log("Chilometri:", kilometres);
const age = parseInt(prompt("Qual è la tua età?"));
console.log("Età:", age);
// LOGICA
// Il prezzo del biglietto è definito in base ai chilometri (0.21€ al km)

// Sconto del 20% per < 18

// Sconto del 40% per > 65

// OUTPUT
// Prezzo finale con massimo due decimali