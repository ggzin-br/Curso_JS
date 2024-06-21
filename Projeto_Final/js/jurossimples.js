export class JurosSimples {  
    constructor() {}

    interface() {
        let form = document.createElement("form");
        form.id = "resultado"


        let input_capital = document.createElement("input");
        $(input_capital).attr({
            "class": "form-control",
            "type": "number",
            "placeholder": "Capital (R$)",
            "name": "capital",
            "step":"any"
        });

        let input_taxa = document.createElement("input");
        $(input_taxa).attr({
            "class": "form-control",
            "type": "number",
            "placeholder": "Taxa (%)",
            "name": "taxa",
            "step":"any"
        });

        let input_tempo = document.createElement("input");
        $(input_tempo).attr({
            "class": "form-control",
            "type": "number",
            "placeholder": "Tempo",
            "name" : "tempo",
            "step":"any"
        });


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
        return parseFloat( parseFloat(args[0]) + ( ( args[1] / 100 ) * args[2] * args[0] ) ); 
        // M = C + J || J = C * i * t
    }
}