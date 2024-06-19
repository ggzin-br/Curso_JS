export class Media {
    constructor() {
    }

    interface() {
        let form = document.createElement("form");
        form.id = "resultado"

        let input_vals = document.createElement("input");
        input_vals.setAttribute("class", "form-control");
        input_vals.setAttribute("type","text");
        input_vals.setAttribute("placeholder", "Valores (A B C ...)");
        input_vals.name = "valores";

        let input_qtd = document.createElement("input");
        input_qtd.setAttribute("class", "form-control");
        input_qtd.setAttribute("type","number");
        input_qtd.setAttribute("placeholder", "Quantidade");
        input_qtd.name = "qtd";

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