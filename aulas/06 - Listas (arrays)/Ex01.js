// 1) Crie um programa que dado um número imprima a sua tabuada.

function imprimirTabuada(numero) {
    console.log(`Tabuada do ${numero}`)
    for (let i=0; i<11; i++) {
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

const numero = 5;
imprimirTabuada(numero);