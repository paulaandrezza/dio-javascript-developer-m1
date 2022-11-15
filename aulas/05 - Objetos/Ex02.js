/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return (this.peso / this.altura**2).toFixed(2)
    }

    classificarIMC() {
        this.imc = this.calcularIMC()
        if (this.imc < 18.5) {
            console.log(`${this.nome} está abaixo do peso. IMC = ${this.imc}`)
        } else if (this.imc >= 18.5 && this.imc <= 25) {
            console.log(`${this.nome} está com peso normal. IMC = ${this.imc}`)
        }else if (this.imc >= 25 && this.imc <= 30) {
            console.log(`${this.nome} está acima do peso. IMC = ${this.imc}`)
        }else if (this.imc >= 30 && this.imc <= 40) {
            console.log(`${this.nome} está obeso. IMC = ${this.imc}`)
        }else {
            console.log(`${this.nome} está com obesidade grave. IMC = ${this.imc}`)
        }
    }
}

const Paula = new Pessoa("Paula", "45", "1.47")
Paula.classificarIMC()
console.log(Paula.imc)