/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioLporKM;

    constructor(marca, cor, gastoMedioLporKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioLporKM = gastoMedioLporKM;
    }

    valorGasto(kmRodados, precoCombustivel) {
        const valor = kmRodados * this.gastoMedioLporKM * precoCombustivel
        console.log(`O valor gasto é de: R$ ${valor}`) ;
    }
}

const carRed = new Carro("fiat", "red", 0.1);
carRed.valorGasto(100, 5)
