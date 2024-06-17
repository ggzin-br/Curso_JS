import {Relogio} from "./relogio.js"; // Essa parte foi realmente difícil

// LocalStorage
const data = localStorage;

// Horário Local
let titulo = document.getElementById("titulo");

// Input de um novo relógio
let inputUTC = document.getElementById("UTCSet");
let criar = document.getElementById("SetAll").addEventListener("click", criarHorario);

// Gerador da Lista
document.addEventListener("DOMContentLoaded", geradorLista);


function horaLocal() {
    const rel = new Relogio(null);
    
    titulo.innerText = `Sua hora atual é ${rel.relogioAut()}`;
}

function geradorLista() { // <- Cria a lista de elementos vazia
    for (let i = 0; i < localStorage.length; i++) {
        
        const Fuso = JSON.parse(localStorage.getItem(localStorage.key(i)));

        const tbody = document.getElementById("lista");

        const tr = document.createElement("tr");
        const td_hora = document.createElement("td");
        const td_fuso = document.createElement("td");
        const td_botao = document.createElement("button");

            td_hora.id = Fuso["UTC"];
            td_fuso.id = Fuso["UTC"]+"num";
            td_hora.setAttribute("type", "datetime");
            td_fuso.setAttribute("type", "number");

            td_botao.setAttribute("class", "btn btn-danger");
            td_botao.textContent = "Apagar";

            tr.appendChild(td_hora);
            tr.appendChild(td_fuso);
            tr.appendChild(td_botao);

            tbody.appendChild(tr);

    }
}

function geradorHora() {

    for (let fuso in localStorage) { // -> Retorna as chaves
    // Tenho conhecimento do erro associado ao for (..in..)
    // No último elemento ele retorna mais que o storage :(

    const Fuso = JSON.parse(localStorage.getItem(fuso));
    const rel = new Relogio(parseInt(Fuso["UTC"]));

        document.getElementById(Fuso["UTC"]).textContent = rel.relogioMan();
        document.getElementById(Fuso["UTC"]+"num").textContent = Fuso["UTC"];
}

}

function updateDinan() {
    const xhttp = new XMLHttpRequest();
    const rel = new Relogio(null);
    

    xhttp.onload = function() { 
        horaLocal();
        geradorHora();
    };

    xhttp.open("GET", "inf.txt", true);
    xhttp.send();

}

function criarHorario() {
    let ObjetoChave = {};
 
    ObjetoChave["UTC"] = inputUTC.value;
    data.setItem("Fusos"+inputUTC.value, JSON.stringify(ObjetoChave));
    
}


// Loop das horas
setInterval(updateDinan, 1000);
    
