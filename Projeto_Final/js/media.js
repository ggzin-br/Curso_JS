export class Media {
    constructor() {
    }

    interface() {
        let form = document.createElement("form");
        form.id = "resultado"


        let input_vals = document.createElement("input");
        $(input_vals).attr({
            "class": "form-control",
            "type": "text",
            "placeholder": "Valores (A B C ...)",
            "name": "valores"
        });

        let input_qtd = document.createElement("input");
        $(input_qtd).attr({
            "class": "form-control",
            "type": "number",
            "placeholder": "Quantidade",
            "name": "qtd"
        });

        
        let enviar = document.createElement("input");
        enviar.setAttribute("type", "submit");
        enviar.setAttribute("value", "Calcular");

        form.appendChild(input_vals);
        form.appendChild(input_qtd);
        form.appendChild(enviar);

        return form;
    }

    calc(args) {
        let som = 0;
        for (let arg of args[0].split(" ")) {
            som += parseFloat(arg);
        }

        return parseFloat( som / args[1] ).toFixed(2); 
        // n + n1 + n2 ... / qtd
    }

}