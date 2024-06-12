// Música
let musica = document.getElementById("musica");
musica.play(); // Devido a configuração de segurança do navegador, pode ser instável

// Documento
let div = document.getElementById("quadrado");
let input = document.getElementById("input");
let resultado = document.getElementById("resultado");

// Algortimo
input.addEventListener("change", triangulo);

function triangulo() {
    // Declarações
    let a_ang, b_ang, c_ang;
    let atributos = new Array();

    let lados = new Array();
    for (let numero of input.value.split(" ")) {
        lados.push(parseFloat(numero));
    }


    // Algoritmo 
    c_ang = ( (lados[1] ** 2) + (lados[2] ** 2) - (lados[0] ** 2) ) / ( (2 * lados[1] * lados[2]) );
    b_ang = ( (lados[0] ** 2) + (lados[2] ** 2) - (lados[1] ** 2) ) / ( (2 * lados[0] * lados[2]) ); 
    a_ang = ( (lados[0] ** 2) + (lados[1] ** 2) - (lados[2] ** 2) ) / ( (2 * lados[0] * lados[1]) );

    // Condiçao de existência (|b - c|) < a < (b + c)
    if ( ( Math.abs(lados[1] - lados[2]) < lados[0] ) && ( lados[0] < (lados[1] + lados[2]) ) ) {
        
    // Verificação 1

        // Retângulo
        if (a_ang == 0 ) {
            atributos.push("Retângulo");
        }

        // Obtusângulo
        else if (a_ang < 0 ) {
            atributos.push("Obtusângulo");
        }

        // Acutângulo
        else {
            atributos.push("Acutângulo");
        }

    // Verificação 2
        // Equilátero
        if (lados[0] == lados[1] && lados[1] == lados[2]) {
            atributos.push("Equilátero");
        }

        // Isósceles
        else if (lados[1] == lados[0] || lados[0] == lados[2] || lados[1] == lados[2]) {
            atributos.push("Isósceles");
        }

        // Escaleno
        else {
            atributos.push("Escaleno");
        }

    }
    else {
        window.alert("NÃO FORMA TRIÂNGULO")
    }

            // Print
            resultado.innerText = atributos;

}