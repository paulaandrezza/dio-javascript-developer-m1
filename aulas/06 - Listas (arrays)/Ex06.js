/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

function maiorNota(lista) {
    let maior = 0;
    console.log("Maior Nota");
    for(i=0 ; i<lista.length ; i++) {
        if(maior < lista[i]) {
            maior = lista[i];
        }
    }
    return maior;
}



lista = [2, 7, 3, 8, 10, 4];
console.log(maiorNota(lista));