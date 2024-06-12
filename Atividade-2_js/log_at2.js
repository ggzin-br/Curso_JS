let isFeliz;
// Campo do resultado
let resultado_h1 = document.getElementById("resultado");
// Campo da entrada
let input_1 = window.prompt("(1º):");
let input_2 = window.prompt("(2º):");
let input_3 = window.prompt("(3º):");

let input = new Array(3); // Evitar erros
input[0] = parseInt(input_1);
input[1] = parseInt(input_2);
input[2] = parseInt(input_3); 

    // Lógica

    if (input[0] > input[1]) { // (1)Cº > (2)Cº

        if (input[1] < input[2] || input[1] == input[2]) {
            isFeliz = true;
        }

        else if (input[1] > input[2]) {
            let dif1 = input[1] - input[2];
            let dif2 = input[0] - input[1];

                if (dif1 < dif2) {
                    isFeliz = true;
                }

                else if (dif1 >= dif2) {
                    isFeliz = false;
                }
        }
    }
    else if (input[0] < input[1]) { // (1)Cº < (2)Cº

        if (input[1] > input[2] || input[1] == input[2]) {
            isFeliz = false;
        }

        else if (input[1] < input[2]) {
            let dif1 = input[2] - input[1];
            let dif2 = input[1] - input[0];

                if (dif1 < dif2) {
                    isFeliz = false;
                }

                else if (dif1 >= dif2) {
                    isFeliz = true;
                }
        }
    }

    else { // (1)Cº == (2)Cº

        if (input[1] < input[2]) {
            isFeliz = true;
        }
        else {
            isFeliz = false;
        }
    }

        // Print
        if (isFeliz) {
            resultado_h1.innerText = ":)"; 
        }
        else {
            resultado_h1.innerText = ":(";
        }

