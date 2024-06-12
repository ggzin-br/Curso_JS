// Documento
let resultado = document.getElementById("resultado");
let campo = document.getElementById("campo");

// Algortimo
let listener = document.getElementById("campo").addEventListener("change", div); //--> Listener

function div() {
    // Declarações
    let divisores = new Array();

    // Cálculo
    for (let i = 1; i <= campo.value; i++) {
        if (campo.value % i == 0) {
            divisores.push(i);
        }
    }

// Print
resultado.innerText = divisores;
}
