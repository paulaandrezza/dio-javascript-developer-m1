// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

function imprimirNomesQueComecemComV(nomes) {
    for (let i=0; i<nomes.length; i++) {
        if (nomes[i][0] === "V") {
            console.log(nomes[i])
        }
    }
}

const nomes = ["Paula", "Vitoria", "Vagner", "Jaime", "Levi"];
imprimirNomesQueComecemComV(nomes);