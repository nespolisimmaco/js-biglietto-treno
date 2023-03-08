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
let ticketPrice = 0.21 * kilometres;
console.log("Prezzo del biglietto:", ticketPrice);
// Sconto del 20% per < 18
const minorsDiscount = 0.2 * ticketPrice;
// Sconto del 40% per > 65
const eldersDiscount = 0.4 * ticketPrice;
console.log(minorsDiscount, eldersDiscount);
// Message
let message = "Buon viaggio!";

if(!isNaN(kilometres, age)) {
    if(age < 18) {
        ticketPrice -= minorsDiscount;
        console.log("Prezzo con sconto minorenni", ticketPrice); 
    }else if(age > 65) {
        ticketPrice -= eldersDiscount;
        console.log("Prezzo con sconto over 65:", ticketPrice);
    }  
}else {
    message = "Errore! Reinserisci i dati.";
}

// OUTPUT
// Prezzo finale con massimo due decimali
document.getElementById("message").innerHTML = message;
let fixedPrice = ticketPrice.toFixed(2);
document.getElementById("user-age").innerHTML += age;
document.getElementById("kilometres").innerHTML += kilometres + "km";
document.getElementById("price").innerHTML += fixedPrice + "€";