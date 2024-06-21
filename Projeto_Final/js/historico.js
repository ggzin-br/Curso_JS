export class Historico {
    constructor() {}

    interface() {
        const table = document.createElement("table");
        table.setAttribute("class", "table table-striped table-hover mb-0");
        
        const tbody = document.createElement("tbody");
        
        for (let i = 0; i < localStorage.length; i++) {
        
            let h2_titulo = document.createElement("h2");
            $(h2_titulo).html(`<h2>${localStorage.key(i)}</h2>`);
            tbody.appendChild(h2_titulo);

            const historico = JSON.parse(localStorage.getItem(localStorage.key(i)));

            historico["ENTRADA"].forEach( (element, index) => {
                const tr = document.createElement("tr");
                const td_entrada = document.createElement("td");
                const td_saida = document.createElement("td");
                
                $(td_entrada).text(element);
                $(td_saida).text(historico["SAIDA"][index]);
                
                tr.appendChild(td_entrada);
                tr.appendChild(td_saida);
                tbody.appendChild(tr);
            });    
        }
        table.appendChild(tbody);

        $("#saida").append("");

        return table;
    }
    
}