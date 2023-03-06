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

function myCreateElement(htmlElement, className1) {

    // Inserisce dentro una var un elemento html e lo crea 
    const element = document.createElement(htmlElement);

    // aggiunge le varie classi 
    element.classList.add(className1);

    // aggiunge vari attributi fissi
    const attribute = document.createAttribute('disabled');
    const attribute2 = document.createAttribute('type');
    const attribute3 = document.createAttribute('maxlength');

    element.setAttributeNode(attribute);
    element.setAttributeNode(attribute2);
    element.setAttributeNode(attribute3);

    attribute2.value = ('text')
    attribute3.value = ('1')

    // DA COME RISULTATO L'ELEMENTO HTML CON LE CLASSI AGGIUNTE PRIMA
    return element;
}

// MAIN 
// importo gli elementi html
const numberCpuContiner = document.getElementById('numbersCPU');
const numberUserContiner = document.getElementById('numbersUser');
const conferm = document.getElementById('buttonConferm');
const startButton = document.querySelector('.startButton')
const timer = document.querySelector('.timer')
const numbersCpu = [];
const numbersPlayer = [];
const numberOfNumbers = 5;


// START PROGRAM 
// genera un array di 5 numeri random 
myRandomNumbers(numberOfNumbers, 9, 0, numbersCpu);
console.log(numbersCpu);

// scrivo i numeri nell'html 
for (let i = 0; i < numberOfNumbers; i++) {
    const element = myCreateElement('div', 'numberCPU');
    element.append(numbersCpu[i]);
    numberCpuContiner.append(element);
}

// scrivo gli input nell'html 
for (let i = 0; i < numberOfNumbers; i++) {
    const element = myCreateElement('input', 'numberUser');
    numberUserContiner.append(element);
    numbersPlayer.push(element)
}

// funzione bottone start 
startButton.addEventListener('click', function () {
    
    numberCpuContiner.classList.remove('hidden');

    // starta il timer 
    let i=10
    setInterval(function(){
        if (i>0){
        i-- 
        timer.innerHTML=(i)
           
        }else{
            timer.innerHTML=('Inserisci il numero')
        }
    },1000)

    // funzione che fa sparire i numeri dopo tot secondi
    setTimeout(function () {
        numberCpuContiner.classList.add('hidden');

        const number = document.querySelectorAll('.numberUser ')
        for (let i = 0; i < numberOfNumbers; i++) {
            number[i].removeAttribute('disabled')
        }
    }, 11000)

    // bottone di conferma
    conferm.addEventListener('click', function () {

        for (let i = 0; i < numberOfNumbers; i++) {
            numbersPlayer[i].classList.remove('ok')
            numbersPlayer[i].classList.remove('wrong')
            if (Number(numbersPlayer[i].value) === numbersCpu[i]) {
                console.log('numero ' + numbersPlayer[i].value + ' ok')
                numbersPlayer[i].classList.add('ok')
            } else {
                console.log('numero ' + numbersPlayer[i].value + ' non ok')
                numbersPlayer[i].classList.add('wrong')

            }
            const attribute = document.createAttribute('disabled');
            numbersPlayer[i].setAttributeNode(attribute);
        }
    })

})





