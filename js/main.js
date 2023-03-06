'use strict'

// FUNCTION 

// FUNZIONE CHE CREA UN NUMERO CASUALE 
function myRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNZIONI CHE CREA UN ARRAY DI X NUMERI CASUALI E ASSEGNA
function myRandomNumbers(numeroDiValori, max, min, arrayDiDestinazione) {
    arrayDiDestinazione.length = 0;
    while (numeroDiValori > arrayDiDestinazione.length) {
        let number = myRandomNumber(min, max);
        if (arrayDiDestinazione.indexOf(number) === -1) {
            arrayDiDestinazione.push(number);
        }
    }
}



// MAIN 
// importo gli elementi html
const numberContiner = document.getElementById('numberContainer');
const numbersCpu = [];
const numbersPlayer = [];
const numberOfNumbers = 5;



// START PROGRAM 
// genera un array di 5 numeri random 
myRandomNumbers(numberOfNumbers, 99, 0, numbersCpu);
console.log(numbersCpu);

// scrivo i numeri nell'html 
numberContiner.innerHTML = (numbersCpu);

// funzione che fa sparire i numeri dopo tot secondi
setTimeout(function () {
    numberContiner.innerHTML = '';

}, 2000)

// funzione che chiede 5 volte un numero all'utente e li mette in un array
// alla fine confronta i numeri e da un risultato
setTimeout(function () {

    while (numbersPlayer.length != numbersCpu.length) {
        const numberChosen = Number(prompt('Inserisci il numero ' + (numbersPlayer.length + 1)));
        numbersPlayer.push(numberChosen);
    }
    console.log(numbersPlayer)

    // Funzione che confronta i 2 array 
    for (let i = 0; i < numberOfNumbers;i++){
        if(numbersCpu[i]===numbersPlayer[i]){
            console.log('numero '+(i + 1)+' indovinato');
        }else{
            console.log('numero '+(i + 1)+' sbagliato');
        }
    }
}, 2100)




