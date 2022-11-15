/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

function recuperacao(lista) {
    console.log("Médias que ficaram de recuperação");
    for(i=0 ; i<lista.length ; i++) {
        if (lista[i] < 5) {
            console.log(lista[i]);
        }
    }
}



lista = [2, 7, 3, 8, 10, 4];
recuperacao(lista)