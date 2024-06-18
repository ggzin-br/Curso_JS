export class Basico {
    constructor(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    som() {
        return this.arg1 + this.arg2;
    }

    sub() {
        return this.arg1 - this.arg2;
    }

    mult() {
        return this.arg1 * this.arg2; 
    }

    div() {
        return this.arg1 / this.arg2;
    }

    raiz() {
        return Math.sqrt(this.arg1);
    }

    porc() {
        return this.arg1 / 100;
    }
}