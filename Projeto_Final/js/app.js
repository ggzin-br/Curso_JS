import { JurosComp } from "./juroscomp.js";
import { JurosSimples } from "./jurossimples.js";
import { Media } from "./media.js";
import { Calc } from "./calc.js";
import { Historico } from "./historico.js";


// Objetos
const objs = { // Objeto-Chave para uma execução mais enchuta
    "JC": new JurosComp()
    ,
    "JS": new JurosSimples()
    ,
    "M": new Media()
    ,
    "CALC": new Calc()
    ,
    "H": new Historico()
}


// Lógica da web
$(document).ready(function () {


// Carregador de interfaces
$("#opcao").change(function () {
    let seletor = document.getElementById("opcao").value;
    
    const xhttp = new XMLHttpRequest();
    
    /**/
    xhttp.open("GET", "", true);
    xhttp.onload = function () {
        $("#espaco").html(objs[seletor].interface());
    }
    // ".append" preserva e adiciona || ".html" limpa e adiciona
    xhttp.send();
    /**/
    
});


// Escritor do resultado
$("#espaco").submit( function (event) {
    event.preventDefault(); 

    let seletor = document.getElementById("opcao").value;
    
    const form = document.getElementById("resultado");
    const data = new FormData(form);
    
    let lista_arg = new Array();

    const xhttp = new XMLHttpRequest();

    let ObjetoChave = { // Mapa do objeto
                        "ENTRADA":null,
                        "SAIDA":null
                        };
    
    
    /**/
    for (let resultado of data.entries()) { // <- Iterar sobre todos as entradas do objeto data
        lista_arg.push(resultado[1]); // Resgatar somente o valor
    }

    xhttp.open("GET", "", true);
    xhttp.onload = function () {
        $("#saida").html(`Resultado: ${objs[seletor].calc(lista_arg)}`);
    }
    xhttp.send();

    if (localStorage.getItem(seletor) !== null) {
        ObjetoChave = {
                        "ENTRADA": JSON.parse(localStorage.getItem(seletor))["ENTRADA"],
                        "SAIDA": JSON.parse(localStorage.getItem(seletor))["SAIDA"]
                    }
                    ObjetoChave["ENTRADA"].push(lista_arg);
                    ObjetoChave["SAIDA"].push(objs[seletor].calc(lista_arg));
            
            localStorage.setItem(seletor, JSON.stringify(ObjetoChave));
        }
        else {
            ObjetoChave["ENTRADA"] = [ lista_arg ];
            ObjetoChave["SAIDA"] = [ objs[seletor].calc(lista_arg) ];
            
            localStorage.setItem(seletor, JSON.stringify(ObjetoChave));
        }

    /**/ 

});


//
});