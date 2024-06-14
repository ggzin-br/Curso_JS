import {Relogio} from "./relogio.js"; // Essa parte foi realmente difícil
let rel = new Relogio(-3);

let titulo = document.getElementById("titulo");

setTimeout(function () {
    titulo.innerText = `Sua hora atual é ${rel.relogioAut()}`;
    console.log("Oi");
}, 1000);
