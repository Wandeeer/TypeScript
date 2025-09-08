// Varibles globales
let retirar = 400;
let depositar = 50;

class BankAccount {
    titular: string
    saldo: number

    constructor (titular: string, saldo: number) {
        this.titular = titular,
        this.saldo = saldo
    }

    // Metodos o funciones
    depositar(monto: number): void {
        console.log("Cuanto va a ingresar: ");
        console.log(monto);
        this.saldo += monto;
        console.log('Saldo a dia: %d', this.saldo);

    }
    retirar(monto: number): void {
        console.log("Cuanto va a retirar: ");
        console.log(monto);
        if(monto > this.saldo) {
            console.log("Saldo insuficiente")
            return;
        }
        this.saldo -= monto;
        console.log('Saldo a dia: %d', this.saldo);

    }
    mostrar(): void {
        console.log('Su monto actual es: %d', this.saldo);
    }
}

let p1 = new BankAccount("Xavier", 300);
p1.mostrar();
p1.depositar(depositar);
p1.mostrar();
p1.retirar(retirar);
p1.mostrar();