// Captura dos elementos
let temp_viagem = document.getElementById("temp_viagem");
let vel_media = document.getElementById("vel_media");
let resultado;

// Div da resposta
let div_resultado = document.getElementById("resultado");

// Botão com Listener
let botao = document.getElementById("botao").addEventListener("click", calc);

    // Função principal
    function calc() {
        
        // Calculo
        resultado = ( temp_viagem.value * vel_media.value ) / 12;

        // Criação da resposta
        let p = document.createElement("p");
        p.innerText = resultado.toFixed(3);

        div_resultado.appendChild(p);

    }