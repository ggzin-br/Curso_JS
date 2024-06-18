export class Basico {
    constructor() {}

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

    porc(arg) {
        return arg / 100;
    }
}