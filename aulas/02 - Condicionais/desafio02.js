/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto Médio de combústivel do carro por km;
 5 - Distância em km da viagem;

 Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = "Etanol";
const kmPorLitro = 10;
const distancia = 100;

if (tipoCombustivel === "Etanol") {
    console.log("Será gasto: ", ((distancia/kmPorLitro)*precoEtanol).toFixed(2))
} else {
    console.log("Será gasto: ", ((distancia/kmPorLitro)*precoGasolina).toFixed(2))
}
