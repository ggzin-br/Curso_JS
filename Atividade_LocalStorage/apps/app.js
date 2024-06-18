import {Relogio} from "./relogio.js"; // Essa parte foi realmente difícil

/**/
// Horário Local
let titulo = document.getElementById("titulo");
function horaLocal() {
    const rel = new Relogio(null);
    titulo.innerText = `Sua hora atual é ${rel.relogioAut()}`;
}

/**/
// Input de um novo relógio
let inputUTC = document.getElementById("UTCSet");

document.getElementById("SetAll").addEventListener("click", function () {
    let ObjetoChave = {};
 
    ObjetoChave["UTC"] = inputUTC.value;
    localStorage.setItem("Fusos"+inputUTC.value, JSON.stringify(ObjetoChave));

    window.location.reload();
});

document.getElementById("lista-apagar").addEventListener("submit", function (event) {
    const form = document.getElementById("lista-apagar");
    const dados = new FormData(form);

    event.preventDefault(); // Isto evita envios ao carregar a páginq

    const utc = dados.get("opcao"); // -> É usado o name=""
    localStorage.removeItem("Fusos"+utc);

    form.reset();
    window.location.reload();
});

/**/
// Lista
document.addEventListener("DOMContentLoaded", geradorExt());
function geradorExt() { // <- Cria a lista de elementos vazia
    for (let i = 0; i < localStorage.length; i++) {
        
        const Fuso = JSON.parse(localStorage.getItem(localStorage.key(i)));

        const tbody = document.getElementById("lista");
        const select = document.getElementById("opcao")

        const tr = document.createElement("tr");
        const td_hora = document.createElement("td");
        const td_fuso = document.createElement("td");
        const option = document.createElement("option");

            td_hora.id = Fuso["UTC"];
            td_fuso.id = Fuso["UTC"]+"num";
            td_hora.setAttribute("type", "datetime");
            td_fuso.setAttribute("type", "number");

            option.setAttribute("value", Fuso["UTC"]);
            option.textContent = Fuso["UTC"];

            select.appendChild(option);

            tr.appendChild(td_hora);
            tr.appendChild(td_fuso);

            tbody.appendChild(tr);
    }
}

function horaExt() { // <- Atualiza as horas

    for (let i = 0; i < localStorage.length; i++) {

    const Fuso = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const rel = new Relogio(parseInt(Fuso["UTC"]));

        document.getElementById(Fuso["UTC"]).textContent = rel.relogioMan();
        document.getElementById(Fuso["UTC"]+"num").textContent = Fuso["UTC"];
    }
}


/**/
// AJAX
function updateDinan() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() { 
        horaLocal();
        horaExt();
    };

    xhttp.open("GET", "inf.txt", true);
    xhttp.send();
}

/**/
// Loop das horas
setInterval(updateDinan, 1);
    
