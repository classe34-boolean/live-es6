var numeri = [3, 2, 5, 12, 44];
console.log(numeri);

// var quadrati = [];
// for (var i = 0; i < numeri.length; i++) {

//     var risultato = numeri[i] * numeri[i];
//     quadrati.push(risultato);

// }
// console.log(quadrati);

// const arrayFiltrato = array.filter(
//     (element) => {
//         return condizione;
//     }
// );

const numeriPari = numeri.filter(
    (element) => {
        return element % 2 == 0;
    }
);
// console.log(numeriPari);

// creare un secondo array con solo i numeri di posizione dispari dell'array originale

const numeriPosizioneDispari = numeri.filter(
    (element, index) => {
        return index % 2 == 1;
    }
);
// console.log(numeriPosizioneDispari);

const quadrati = numeri.map(
    (element, index, array) => element * element
);
// console.log(quadrati);

var studenti34 = [
    {
        nome: "Stefano",
        cognome: "Zina"
    },
    {
        nome: "Michela",
        cognome: "Franchini"
    },
    {
        nome: "Andrea",
        cognome: "Casentini"
    },
    {
        nome: "Luca",
        cognome: "Sbarbaro"
    },
    {
        nome: "Roberto",
        cognome: "Zeppilli"
    }
];

var studentiCognomeConLaZ = studenti34.filter(
    (element) => {
        // console.log(element);
        var cognome = element.cognome;
        var primoCarattere = cognome[0];
        return primoCarattere == "Z";

        // return element.cognome[0] == "Z";
    }
);
console.log(studentiCognomeConLaZ);

// const elencoStudenti = [];
// for (let index = 0; index < studenti34.length; index++) {
//     const element = studenti34[index];
//     const stringa = element.cognome + " " + element.nome;
//     elencoStudenti.push(stringa);
// }
// console.log(elencoStudenti);

const elencoStudenti = studenti34.map(
    (element, index) => `${index+1} ${element.cognome} ${element.nome}`
);
// console.log(elencoStudenti);
// creare un array di stringhe stile elenco alfabetico

// const copiaStudenti = studenti34.map(
//     (element) => element
// );
// console.log(copiaStudenti);

