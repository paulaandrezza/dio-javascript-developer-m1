/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/
const { gets, print } = require('./funcoes-auxiliares');

process.stdout.write("Números Pares: ")
for(let i = 0 ; i < 6 ; i++) {
    let numero = gets()
    if (numero % 2 === 0) {
        if (i === 5) {
            process.stdout.write(`${numero}`);
        } else {
            process.stdout.write(`${numero}, `);
        }
    }
}