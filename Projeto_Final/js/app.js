import { JurosComp } from "./juroscomp.js";
import { JurosSimples } from "./jurossimples.js";
import { Media } from "./media.js";
import { Calc } from "./calc.js";

let espaco = document.getElementById("espaco");

// Carregador da interface
const interfaces = { // Objeto-Chave para uma execução mais enchuta
    "JC": () => {
        const inst = new JurosComp();
        espaco.appendChild(inst.interface());
    }
    ,
    "JS": () => {
        const inst = new JurosSimples();
        espaco.appendChild(inst.interface());
    }
    ,
    "M": () => {
        const inst = new Media();
        espaco.appendChild(inst.interface());
    }
    ,
    "CALC": () => {
        const inst = new Calc();
        espaco.appendChild(inst.interface());
    }
}
const execs = {
    "JC": (a) => {
        const inst = new JurosComp();
        return inst.calc(a);
    }
    ,
    "JS": (a) => {
        const inst = new JurosSimples();
        return inst.calc(a);
    }
    ,
    "M": (a) => {
        const inst = new Media();
        return inst.calc(a);
    }
    ,
    "CALC": (a) => {
        const inst = new Calc();
        return inst.calc(a);
    }
}

document.getElementById("opcao").addEventListener("change", function (event) {
    let seletor = document.getElementById("opcao").value;

    event.preventDefault();    
    
    espaco.innerHTML = ''; // Toda vez ele limpa o conteúdo
    interfaces[seletor]();

});

/**/
// Escritor do resultado
espaco.addEventListener("submit", function (event) { // <- o submit do form dinâmico passa para o div que agrega ele
    event.preventDefault();
    let seletor = document.getElementById("opcao").value;
    let saida = document.getElementById("saida");
    let lista_arg = new Array();
    
    const form = document.getElementById("resultado");
    const data = new FormData(form);

    for (let [chave, resultado] of data.entries()) { // <- Iterar sobre todos os valores do objetos
        lista_arg.push(resultado);
    }

    saida.textContent = "";
    saida.textContent = "Resultado: ";
    saida.textContent = saida.textContent + execs[seletor](lista_arg); 

});

