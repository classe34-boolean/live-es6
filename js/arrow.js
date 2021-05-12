// function somma (num1, num2) {
//     var risultato = num1 + num2;
//     return risultato;
// }

// const somma = (num1, num2) => {
//     var risultato = num1 + num2;
//     return risultato;
// }

const somma = (num1, num2) => num1 + num2;
const sottrazione = (num1, num2) => num1 - num2;

// const ePari = (num) => {
//     if(num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

const ePari = (num) => num % 2 == 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

// console.log(somma);

var risultato1 = somma(4, 9);
// console.log(risultato1);

var risultato2 = sottrazione(10, 7);
// console.log(risultato2);

// console.log(4, ePari(4));
// console.log(5, ePari(5));

// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));
// console.log(getRandomNumber(1,100));

var pulsante = document.getElementById("pulsante");

// pulsante.addEventListener("click", function () {
//     console.log("Ho cliccato");
//     console.dir(this);
// });

pulsante.addEventListener("click", () => {
    console.log("Ho cliccato");
    console.dir(this);
});