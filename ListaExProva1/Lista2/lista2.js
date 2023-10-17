"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function ex1(...vetor) {
    let vetor2 = vetor;
    console.log(vetor2);
}
// ex1(1, 2, 3, 4, 5, 6);
function ex2_3_4() {
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
        if (vetorA.length !== vetorB.length) {
            return console.log("ambas as listas precisam ter o mesmo numero de indices");
        }
        else {
            for (let index = 0; index < vetorA.length; index++) {
                vetorResultante.push(vetorA[index] + vetorB[index]);
            }
            return vetorResultante;
        }
    }
    vetor1 = transformaVetor(vetor1);
    vetor2 = transformaVetor(vetor2);
    console.log(somaVetor(vetor1, vetor2));
    //   console.log(transformaVetor(vetor1));
    //   console.log(transformaVetor(vetor2));
    // ou poderia atribuir o o resultado referente ao argumento como "vetor1" a uma variável, neste caso, só atualizei o valor dos vetores
    // para não precisar criar mais duas variáveis. //
}
// ex2();
function ex5() {
    let entradaN = leitor.question("Digite 20 numeros separados por espaco: ");
    let vetorN = entradaN.split(" ");
    let novoVetor = [];
    let tamanhoVetorN = vetorN.length;
    for (let index = 0; index < tamanhoVetorN; index++) {
        if (index < tamanhoVetorN / 2) {
            novoVetor[index] = vetorN[tamanhoVetorN - 1 - index];
        }
        else {
            novoVetor[index] = vetorN[index];
        }
    }
    console.log(novoVetor);
}
// ex5();
function ex6() {
    let gabarito = [];
    let tentativa;
    let listaTentativa = [];
    function criaGabarito() {
        for (let index = 0; index < 14; index++) {
            let numeroAleatorio;
            tentativa = parseFloat(leitor.question(`Digite um numero entre 0 - 30: `));
            listaTentativa.push(tentativa);
            do {
                numeroAleatorio = Math.ceil(Math.random() * 30);
            } while (gabarito.includes(numeroAleatorio));
            // se o número aleatório já estiver na lista de gabarito, é necessário gerar um novo número.
            // então ele precisará de uma verificação varrendo todos os números já atribuídos na lista.
            gabarito[index] = numeroAleatorio;
        }
        //comparando lista com tentativa//
        let listaOdernada = listaTentativa.sort();
        let gabaritoOrdenado = gabarito.sort();
        let contador = 0;
        for (let index = 0; index < gabaritoOrdenado.length; index++) {
            if (gabaritoOrdenado[index] == listaOdernada[index]) {
                contador++;
            }
        }
        if (contador == 13) {
            console.log("GANHADOR, PARABÉNS!");
        }
        else {
            console.log(`Voce acertou ${contador} numeros. `);
        }
        return gabarito;
    }
    console.log(criaGabarito());
}
// ex6();
function ex7() {
    // coluna vira linha => matriz transposta.
    // primeiro vou tentar montar uma matriz //
    let colunas = parseFloat(leitor.question("Qtd colunas: "));
    let linhas = parseFloat(leitor.question("Qtd linhas: "));
    let matriz = [];
    for (let i = 1; i < linhas + 1; i++) {
        let linha = [];
        for (let y = 1; y < colunas + 1; y++) {
            let valor = parseFloat(leitor.question(`Valor para a posicao (linha ${i}, coluna ${y}: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    console.log("Matriz Resultante");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}
ex7();
