var personaggio1 = "Qui";
var personaggio2 = "Qua";

var paragrafo = document.getElementById("testo");
var lista = document.getElementById("lista");

// var messaggio = personaggio1 + " Quo " + personaggio2 + "<br>andarono al mercato";

var messaggio = `${personaggio1} Quo ${personaggio2}
andarono al mercato`;

var messaggio2 = `
    <li>
        <h2>${personaggio1}</h2>
    </li>
    <li>
        <h2>Quo</h2>
    </li>
    <li>
        <h2>${personaggio2}</h2>
    </li>
    <li>andarono al mercato</li>
`;
lista.innerHTML = messaggio2;
console.log(messaggio2);

console.log(messaggio);
paragrafo.innerHTML = messaggio;