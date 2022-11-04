/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Voce terá 3 variáveis. Sendo elas:
 - 1 Preço do combustível;
 - 2 Gasto médio de combústivel do carro por km;
 - 3 Distância em km da viagem;

Imprima no console o valor que serágasto de combustível para realizar esta viagem
*/
const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distancia = 1580;

console.log(((distancia/kmPorLitro)*precoCombustivel).toFixed(2))