export class JurosComp {
    constructor() {}

    interface() {
        let form = document.createElement("form");
        form.id = "resultado"

        let input_capital = document.createElement("input");
        input_capital.setAttribute("class", "form-control");
        input_capital.setAttribute("type","number");
        input_capital.setAttribute("placeholder", "Capital (R$)");
        input_capital.name = "capital";

        let input_taxa = document.createElement("input");
        input_taxa.setAttribute("class", "form-control");
        input_taxa.setAttribute("type","number");
        input_taxa.setAttribute("placeholder", "Taxa (%)");
        input_taxa.name = "taxa";

        let input_tempo = document.createElement("input");
        input_tempo.setAttribute("class", "form-control");
        input_tempo.setAttribute("type","number");
        input_tempo.setAttribute("placeholder", "Tempo");
        input_tempo.name = "tempo";

        let enviar = document.createElement("input");
        enviar.setAttribute("type", "submit");
        enviar.setAttribute("value", "Calcular");

        form.appendChild(input_capital);
        form.appendChild(input_taxa);
        form.appendChild(input_tempo);
        form.appendChild(enviar);

        return form;
    }
    
    calc(args) {
        return parseFloat( args[0] * ( ( 1 + ( args[1] / 100 ) ) ** args[2] ) ).toFixed(2);
        // M = C * (1 + i)^t
    }
}