/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require('./funcoes-auxiliares');

const numeros = [];
let maior = -1;
let menor = 100000;

for(let i = 0 ; i < 5 ; i++) {
    numeros.push(gets())
    if(numeros[i] > maior) {
        maior = numeros[i];
    }
    if(numeros[i] < menor) {
        menor = numeros[i];
    }
}

print(`Maior número: ${maior}\nMenor número: ${menor}`)