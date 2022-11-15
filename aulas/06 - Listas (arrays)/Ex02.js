// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

function imprimirNumerosPares(lista) {
    for (let i=0; i<lista.length ; i++) {
        if (lista[i] % 2 === 0) {
            console.log(lista[i]);
        }
    }
}

function gerarListaSequencial(inicio, fim) {
    l = []
    for(i=inicio ; i<fim+1; i++) {
        l.push(i);
    }
    return l;
}

const lista = gerarListaSequencial(0, 50);
imprimirNumerosPares(lista);