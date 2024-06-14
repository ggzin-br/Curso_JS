class Relogio {
    constructor() {
        this.hora = new Date().getHours();
        this.minutos = new Date().getMinutes();
        this.segundos = new Date().getSeconds();
    }

    relogioMan() {
        return `${this.hora} : ${this.minutos} : ${this.segundos}`;
    }


}

rel = new Relogio();

document.getElementById("clockSet").innerText = rel.relogioMan();