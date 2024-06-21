export class Calc {

    interface() {
        let form = document.createElement("form");
        form.id = "resultado"

        let input_tokens = document.createElement("textarea");
        $(input_tokens).attr({
            "class": "form-control",
            "placeholder": "Input",
            "name" : "input"
        });
        $(input_tokens).css({
            "width": "100%",
        });


        function ajustarTexto() {
            let altura = window.innerHeight;
            input_tokens.style.height = altura * 0.6 + "px" // 60% da tela dinamicamente
        }
        window.addEventListener("resize", ajustarTexto);
        ajustarTexto();


        let enviar = document.createElement("input");
        enviar.setAttribute("type", "submit");
        enviar.setAttribute("value", "Calcular");

        form.appendChild(input_tokens);
        form.appendChild(enviar);

        return form;
    }
    
    calc(args) {
        let tok = new Array()
        args[0].split(";").forEach((element) => {
            tok.push(element.replace(/[\r\n]/g, ""));
        });

        let vars_ = new Array();
        let acm = new Array();
        let ret;

        // Separador dos argumentos da chamada de função
        function seletor_arg(arg2) {
            arg2.forEach(args => {
                if (!funcs[args]) { // Ele entra caso não tenha nenhuma palavra-chave
                    vars_.forEach((vars, index) => { // Leitura dos argumentos do comando
                        if (args == vars) { // Aqui ele procura a variável no vars_
                            acm.push(vars_[index + 1]); // Resgata o valor da var e armazena no acm
                            // "acm = Acumulador"
                        }
                    });
            }
            }); 
            // Retorno da variável de destino (1º variável)
            return arg2[1];
        }


        // Escritor
        function consolidador(temp, arg2) {
            let primeiro = seletor_arg(arg2);

            vars_.forEach((element, index) => {
                if (element == primeiro) {
                    vars_[index + 1] = String(temp);
                }
            });

                // Remove os valores do acumulador
                acm.splice(0, acm.length);

        }


        const funcs = {
            "VAR": (arg2) => {
                arg2.forEach(element => {
                    if (element != "VAR")
                    vars_.push(element);
                });
            }
            ,
            "MOV": (arg2) => {
                let dest = seletor_arg(arg2);

                vars_.forEach((element, index) => {
                    if (dest == element) { // Entra quando encontrar 1º elemento
                        vars_[index + 1] = acm[1]; // Atribui o 2º valor no 1º no vars_
                    }
                });

                // Remove os valores do acumulador
                acm.splice(0, acm.length);
            }
            ,
            "ADD": (arg2) => {
                let temp = 0;
                seletor_arg(arg2);

                temp = parseFloat(acm[0]) + parseFloat(acm[1]);
                consolidador(temp, arg2);
            }
            ,
            "MULT": (arg2) => {
                let temp = 0;
                seletor_arg(arg2);

                temp = parseFloat(acm[0]) * parseFloat(acm[1]);
                consolidador(temp, arg2);
            }
            ,
            "DIV": (arg2) => {
                let temp = 0;
                seletor_arg(arg2);
                
                temp = parseFloat(acm[1]) / parseFloat(acm[2]);
                consolidador(temp, arg2);
            }
            ,
            "SUB": (arg2) => {
                let temp = 0;
                seletor_arg(arg2);

                temp = parseFloat(acm[0]) - parseFloat(acm[1]);
                consolidador(temp, arg2);
            }
            ,
            "SQRT": (arg2) => {
                let temp = 0;
                seletor_arg(arg2);

                temp = Math.sqrt(parseFloat(acm[1]));
                consolidador(temp, arg2);
            }
            ,
            "RET": (arg2) => {
                arg2.forEach(element => {
                    vars_.forEach((element2, index) => {
                        if (element == element2) {
                            ret = vars_[index + 1];
                        }
                    });
                });
            }

        }
       
        for (let arg of tok) {
            let arg2 = arg.split(" ");
            
            if (funcs[arg2[0]]) {
                funcs[arg2[0]](arg2);
            }
        }

    return ret;
    }

}