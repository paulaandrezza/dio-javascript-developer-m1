
// 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');

function desconto(salarioBruto) {
    if(salarioBruto >= 0 && salarioBruto <= 1100.00) {
        return 0.95;
    } else if(salarioBruto >= 1100.01 && salarioBruto <= 2500.00) {
        return 0.9;
    } else {
        return 0.85;
    }
}


salarioBruto = gets()
adicional = gets()

print((salarioBruto * desconto(salarioBruto) + adicional).toFixed(2))