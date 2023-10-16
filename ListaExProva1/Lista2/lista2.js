"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function ex1(...vetor) {
    let vetor2 = vetor;
    console.log(vetor2);
}
// ex1(1, 2, 3, 4, 5, 6);
function ex2_ex3() {
    let vetor1 = leitor.question("Escreva um numero de 5 algarismos: ").split("");
    let vetor2 = leitor.question("Escreva um numero de 5 algarismos: ").split("");
    function transformaVetor(vetor) {
        for (let index = 0; index < vetor.length; index++) {
            vetor[index] = parseFloat(vetor[index]);
        }
        return vetor;
    }
    function somaVetor(vetorA, vetorB) {
        let vetorResultante = [];
        // if (vetorA.length !== vetorB.length) {
        //   return console.log(
        //     "ambas as listas precisam ter o mesmo numero de indices"
        //   );
        // } else {
        for (let index = 0; index < vetorA.length; index++) {
            vetorResultante.push(vetorA[index] + vetorB[index]);
            if (vetorA.length > vetorB.length) {
                vetorResultante.push(vetorA[index]);
            }
            else if (vetorA.length < vetorB.length) {
                vetorResultante.push(vetorB[index]);
            }
        }
        return vetorResultante;
        // }
    }
    vetor1 = transformaVetor(vetor1);
    vetor2 = transformaVetor(vetor2);
    console.log(somaVetor(vetor1, vetor2));
    //   console.log(transformaVetor(vetor1));
    //   console.log(transformaVetor(vetor2));
    // ou poderia atribuir o o resultado referente ao argumento como "vetor1" a uma variável, neste caso, só atualizei o valor dos vetores
    // para não precisar criar mais duas variáveis. //
}
ex2_ex3();
function ex4() {
}
