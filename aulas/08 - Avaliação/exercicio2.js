
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

let numero;
let maiorPar = 0;
let menorImpar = 999999;

for(let i = 0 ; i < 5 ; i++) {
    numero = gets()
    if(numero > maiorPar && numero % 2 === 0) {
        maiorPar = numero;
    }
    if(numero < menorImpar && numero % 2 === 1) {
        menorImpar = numero;
    }
}

print(`Maior número par: ${maiorPar}\nMenor número impar: ${menorImpar}`)