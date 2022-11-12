/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function desconto(condicao) {
    if (condicao === 1) {
        return 0.9;
    } else if (condicao === 2) {
        return 0.85;
    } else if (condicao === 3) {
        return 1;
    } else {
        return 1.1;
    }
}

function valorTotal(preco, condicao) {
    return (preco*desconto(condicao)).toFixed(2);
}

const precoProduto = 100;
const condicaoPagamento = 2;

if (condicaoPagamento >= 1 && condicaoPagamento <= 4) {
    console.log("Valor total a ser pago é de: R$ " + valorTotal(precoProduto, condicaoPagamento));
} else {
    console.log("Condição de Pagamento Inválida");
}