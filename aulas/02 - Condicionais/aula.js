const numero = 3;

const numeroDivisivelPor5 = numero % 5 === 0;

if (numero === 0) {
    console.log("O número é inválido!")
} else if (numeroDivisivelPor5) {
    console.log("O número é divisível por 5");
} else {
    console.log("O número não é divisível por 5");
}
