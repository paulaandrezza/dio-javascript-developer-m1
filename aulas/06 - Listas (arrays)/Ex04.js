// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

function gerarListaSequencialPar(inicio, fim) {
    l = []
    for(let i=inicio ; i<fim+1; i++) {
        if (i % 2 === 0) {
            l.push(i);
        }
    }
    return l;
}

const lista = gerarListaSequencialPar(0, 50);
console.log(lista)