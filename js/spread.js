// function somma (num1, num2) {
//     return num1 + num2;
// }

// function somma3 (num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// function somma (...numeri) {
//     // console.log(numeri);
//     let risultato = 0;

//     for (let i = 0; i < numeri.length; i++) {
//         risultato += numeri[i];
//     }
//     return risultato;
// }

// var risultato = somma(6, 13);
// console.log(risultato);

// var risultato2 = somma(6, 13, 12);
// console.log(risultato2);

// var risultato3 = somma(1, 2, 3, 4);
// console.log(risultato3);

// console.log(somma(13, 21, 100, 99, 98, 97, 96, 95, 1, 2, 3));

var arr1 = ["pippo", "pluto", "paperino"];
var arr2 = [1, 2, 3];



// ES5, soluzione 1
// var arrayCompleto = [];
// for (let i = 0; i < arr1.length; i++) {
//     arrayCompleto.push(arr1[i]);
// }
// for (let i = 0; i < arr2.length; i++) {
//     arrayCompleto.push(arr2[i]);
// }

// ES5, soluzione 2: concat
// var arrayCompleto = arr1.concat(arr2);

// ES6, operatore SPREAD
var arrayCompleto = [...arr1, ...arr2];
// console.log(arrayCompleto);

var docente = {
    nome: "Gianluca",
    cognome: "Pesce"
};

var schedaDocente = {
    ...docente,
    eta: 38,
    email: "gianluca@boolean.careers"
};

// console.log(schedaDocente);

const { nome, ...altri } = schedaDocente;
// console.log(nome);
// console.log(altri);

const studenti = [
    "Diego",
    "Antonio",
    "Denis",
    "Marco",
    "Roberto"
];

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0; i < studenti.length; i++) {
//     console.log(studenti[i]);
// }

// studenti.forEach(
//     (item, i) => console.log(i + ": " + item)
// );

// const [ nome1, nome2, ...nonVincitori ] = studenti;
// console.log(nome1);
// console.log(nome2);
// console.log(nonVincitori);
// console.log(ultimoNome);

const cats = [
    {name: 'Jerry', color: 'Gray'},
    {name: 'Felix', color: 'Black and White'},
    {name: 'Garfield',color: 'Orange'},
];
    
// cats.forEach(
//     (element) => {
//         console.log(`${element.name}'s color is ${element.color}`);
//     }
// );


