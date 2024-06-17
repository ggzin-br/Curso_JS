export class Relogio {
    constructor(fuso) {
        this.fuso = fuso;
        this.hora = new Date().getUTCHours() + Math.floor(fuso);
        this.minutos = new Date().getUTCMinutes();
        this.segundos = new Date().getUTCSeconds();

        this.horaLocal = new Date().getHours();
        this.minutosLocal = new Date().getMinutes();
        this.segundosLocal = new Date().getSeconds();
    }

    relogioAut() {

        // 0 add
        let minutos;
        minutos = (this.minutos < 10) ? '0' + this.minutos : this.minutos;

        // 0 add
        let segundos;
        segundos = (this.segundos < 10) ? '0' + this.segundos : this.segundos;

        // Retorno
        return `${this.horaLocal} : ${minutos} : ${segundos}`;

    }

    relogioMan() {

        // Fusos quebrados -> TO-DO
        /*
        let fuso_min = (this.fuso > 0) ? this.fuso - Math.floor(this.fuso) : this.fuso + Math.floor(this.fuso);
        fuso_min *= 100; //Transformar em minutos



        this.minutos += fuso_min;

        this.hora += (this.minutos % 60 == 0) ? this.minutos / 60 : 0;
         */

            // Compensador de horas
            let hora;
            hora = (this.hora >= 24) ? this.hora - 24 : this.hora;
            hora = (hora < 10) ? '0' + hora : hora;

            // Compensador de minutos
            let minutos;
            minutos = (this.minutos < 10) ? '0' + this.minutos : this.minutos;

            // Compensador de segundos
            let segundos;
            segundos = (this.segundos < 10) ? '0' + this.segundos : this.segundos;


        // Retorno
        return `${hora} : ${minutos} : ${segundos}`;
    }

}