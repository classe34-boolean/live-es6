// var nome = prompt("Inserisci il nome del nuovo studente");
// var cognome = prompt("Inserisci il cognome del nuovo studente");
// var eta = parseInt(prompt("Inserisci l'età del nuovo studente"));

// // var studente = {
// //     nome: nome,
// //     cognome: cognome,
// //     eta: eta
// // };

// var studente = {
//     nome,
//     cognome,
//     eta
// };


// console.log(studente.cognome);
// console.log(studente["cognome"]);

// for (var chiave in studente) {
//     console.log(studente[chiave]);
// }

// var nuovaChiave = prompt("Inserisci una nuova chiave");
// var nuovoValore = prompt("Inserisci il valore corrispondente");

// // studente[nuovaChiave] = nuovoValore;

// var studente2 = {
//     nome: "Giovanni",
//     cognome: "Bertolini",
//     [nuovaChiave]: nuovoValore
// };
// console.log(studente2);

const studente = {
    nome: "Michela",
    cognome: "Franchini",
    email: "michela@boolean.careers",
    eta: 20,
    nazionalita: "IT",
    classe: 34
}

// var nome = studente.nome;
// var cognome = studente.cognome;
// var email = studente.email;

var { nome, cognome, classe, eta } = studente; // DESTRUTTURAZIONE OGGETTI

// console.log(nome);
// console.log(cognome);
// console.log(classe);
// console.log(eta);

var classe34 = [
    "Giovanni",
    "Michela",
    "Antonio",
    "Denis"
];

// var nome1 = classe34[0]; // Giovanni
// var nome2 = classe34[2]; // Antonio

var [ , nome1, , nome2 ] = classe34; // DESTRUTTURAZIONE ARRAY

console.log(nome1);
console.log(nome2);

var squadre = [
    {
        nome: "Milan",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli_subiti: 0
    }
];

var [squadra1, , , squadra2] = squadre;
console.log(squadra1);
console.log(squadra2);

var { nome } = squadra1;
console.log(nome);
