import { equal } from "assert";
import { parseArgs } from "util";

var leitor = require("readline-sync");

// 1)	Faça um programa que copie o conteudo de um vetor em um segundo vetor.

function ex1(...vetor: number[]) {
  let vetor2 = vetor;
  console.log(vetor2);
}

// ex1(1, 2, 3, 4, 5, 6);

//2)	Fa9a um programa que some o conteudo de dois vetores e armazene o
// 3)	resultado em um terceiro vetor.
// 4)	Fa9a um programa que fa9a a uniao de dois vetores de mesmo tamanho e mesmo tipo em um terceiro vetor com dobro do tamanho.

function ex2_3_4() {
  let vetor1 = leitor.question("Escreva um numero de 5 algarismos: ").split("");
  let vetor2 = leitor.question("Escreva um numero de 5 algarismos: ").split("");

  function transformaVetor(vetor: any[]) {
    for (let index = 0; index < vetor.length; index++) {
      vetor[index] = parseFloat(vetor[index]);
    }
    return vetor;
  }

  function somaVetor(vetorA: number[], vetorB: number[]) {
    let vetorResultante: number[] = [];
    if (vetorA.length !== vetorB.length) {
      return console.log(
        "ambas as listas precisam ter o mesmo numero de indices"
      );
    } else {
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

// ex2_3_4();

//5) Escrever um programa que le um vetor N(20) e o escreve. Troque, a seguir, o 1° elemento com o ultimo, o 2° com o penultimo etc. ate o 10° com o 11° e escreva o vetor N assim modificado.
function ex5() {
  let entradaN = leitor.question("Digite 20 numeros separados por espaco: ");

  let vetorN = entradaN.split(" ");

  let novoVetor = [];

  let tamanhoVetorN = vetorN.length;

  for (let index = 0; index < tamanhoVetorN; index++) {
    if (index < tamanhoVetorN / 2) {
      novoVetor[index] = vetorN[tamanhoVetorN - 1 - index];
    } else {
      novoVetor[index] = vetorN[index];
    }
  }
  console.log(novoVetor);
}
// ex5();

//6)	Escrever um programa que le um vetor G(13) que e o gabarito de um teste de loteria esportiva,
// contendo os valores 1 (coluna 1), 2 (coluna 2) e 3 (coluna do meio).
//  Ler, a seguir, para cada apostador, o numero de seu cartao e um vetor Resposta R (13).
//Verificar para cada apostador o numero de acertos e escrever o numero do apostador e seu numero de acertos.
//  Se tiver 13 acertos, acrescentar a mensagem:
//  "GANHADOR, PARABENS". Crie uma fun9ao que receba um valor e informe se ele e positivo ou nao.
function ex6() {
  let gabarito: number[] = [];
  let tentativa: number;
  let listaTentativa: number[] = [];

  function criaGabarito() {
    for (let index = 0; index < 14; index++) {
      let numeroAleatorio;

      tentativa = parseFloat(
        leitor.question(`Digite um numero entre 0 - 30: `)
      );

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
    } else {
      console.log(`Voce acertou ${contador} numeros. `);
    }
    return gabarito;
  }

  console.log(criaGabarito());
}
// ex6();

// 7)	Faça um programa para calcular a transposta de uma matriz.
function ex7() {
  // coluna vira linha => matriz transposta.

  // primeiro vou tentar montar uma matriz //
  let colunas = parseFloat(leitor.question("Qtd colunas: "));
  let linhas = parseFloat(leitor.question("Qtd linhas: "));
  let matriz: number[][] = [];

  for (let i = 1; i < linhas + 1; i++) {
    let linha: number[] = [];

    for (let y = 1; y < colunas + 1; y++) {
      let valor = parseFloat(
        leitor.question(`Valor para a posicao (linha ${i}, coluna ${y}: `)
      );
      linha.push(valor);
    }
    matriz.push(linha);
  }

  console.log("Matriz Resultante");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }

  const matrizTransposta: number[][] = [];

  console.log("Matriz Resultante Transposta");
  for (let coluna = 0; coluna < colunas; coluna++) {
    matrizTransposta[coluna] = [];

    for (let linha = 0; linha < linhas; linha++) {
      matrizTransposta[coluna][linha] = matriz[linha][coluna];
    }
  }

  for (let linha = 0; linha < colunas; linha++) {
    console.log(matrizTransposta[linha].join(" "));
  }
}
//  ex7();

//8)Faça um programa que leia uma matriz mat 2 x 3 e imprima na tela a soma de todos os elementos da matriz mat.
function ex8() {
  let soma: number = 0;
  let matriz: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      console.log(matriz[linha][coluna]);

      soma += matriz[linha][coluna];
    }
  }

  console.log(soma);
}
// ex8()

// 9)	Fa9a um programa que leia uma matriz mat 4 x 4, e imprima na tela a soma dos elementos abaixo da diagonal
// principal da matriz mat.
function ex9() {
  let linhas = parseFloat(leitor.question("Qtd linhas: "));
  let colunas = parseFloat(leitor.question("Qtd colunas: "));
  let matriz: number[][] = [];

  for (let linha = 0; linha < linhas; linha++) {
    let linha: number[] = [];

    for (let coluna = 0; coluna < colunas; coluna++) {}
  }
}

//CHEGA DE MATRIZ

// 11)	Escreva um programa que leia as notas dos alunos de uma disciplina e armazene em um array.
// (A quantidade de alunos deve ser informada pelo usuario) e informe quantos alunos estao abaixo da media e quantos
// estao na media. (Considere a nota sendo um inteiro de 0 a 100 e a media 60)
function ex11() {
  let qtdAlunos = parseFloat(leitor.question("Quantidade de alunos: "));
  let listaNotas = [];

  console.log("Media = 60!");
  for (let i = 1; i < qtdAlunos + 1; i++) {
    let nota = parseFloat(leitor.question(`Nota do aluno ${i}: `));
    listaNotas.push(nota);
  }

  for (let j = 1; j < listaNotas.length; j++) {
    if (listaNotas[j] < 60) {
      console.log(
        `o aluno ${j} foi reprovado, teve média de ${listaNotas[j]}.`
      );
    } else {
      console.log(`o aluno ${j} passou no teste, média ${listaNotas[j]}`);
    }
  }
}
// ex11()

// 12)	Crie uma fun9ao que receba um valor e diga see nulo ou nao.
function ex12(valor: any) {
  if (valor == null) {
    return true;
  } else {
    return false;
  }
}
// console.log(ex12("teste123"));
// console.log(ex12(null));

function ex13(a: number, b: number, c: number) {
  let delta = Math.pow(b, 2) - 4 * (a * c);
  return delta;
}

// console.log(ex13(2, 3, 5));

function ex14(a: number, b: number, c: number) {
  let delta = ex13(a, b, c);

  if (a === 0 && ex12(a)) {
    console.log(`O valor de 'a' não pode ser igual a zero.`);
    return null;
  }

  if (delta >= 0) {
    let escolha = parseFloat(leitor.question("Raiz (1) ou Raiz (2)? "));

    switch (escolha) {
      case 1:
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        return raiz1;

      case 2:
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return raiz2;

      default:
        return "Entre com (1) ou (2).";
    }
  } else {
    console.log(`O delta é negativo, não existem raízes reais.`);
    return null;
  }
}

// console.log(ex14(1, 25, 3));

function ex15(num1: number, num2: number) {
  return Math.max(num1, num2);
}

// console.log(ex15(10,11));

function ex16(num1: number, num2: number) {
  return Math.min(num1, num2);
}
// console.log(ex16(10,1));

function ex17(num1: number, num2: number, num3: number) {
  return Math.max(ex15(num1, num2), num3);
}

// console.log(ex17(1,2,3));

function ex18(num1: number, num2: number, num3: number) {
  return Math.min(ex16(num1, num2), num3);
}

// console.log(ex18(1,2,3));

function ex19() {
  let dado = Math.ceil(Math.random() * 6);

  return dado;
}

// console.log(ex19());

function ex20() {
  let contador = 0;
  let listaNumeros = [];
  let listaNumerosRepetidos:any[] = []

  for (let i = 0; i < 1_0; i++) {
    let valor = ex19();
    listaNumeros.push(valor);
  }

  for (let index = 0; index < listaNumeros.length + 1; index++) {

    for (let celula = index + 1; celula < listaNumeros.length ; celula++) {
      
      if ((listaNumeros[index] == listaNumeros[celula])) {

        listaNumerosRepetidos.push(listaNumeros[index]);
        break; // com esse break, a lista vai pausar assim que encontrar um número igual, 
        // impossibilitando de números serem adicionados mais de uma vez, sendo que já foram adicionados na rodada passada.
        }

        continue;
      }
    }


    for (let i = 0; i < listaNumerosRepetidos.length; i ++ ){
      contador = 0;
      for (let j = 0; j < listaNumerosRepetidos.length; j ++ ){

        if ((listaNumerosRepetidos[i] == listaNumerosRepetidos[j] )){
          contador ++;
          
        }
      }

      
      console.log(`o número ${listaNumerosRepetidos[i]} apareceu ${contador} vez(es)`);
      
    }


  
    console.log(listaNumeros);
    console.log(listaNumerosRepetidos);
  }



// ex20();


function ex21(){
  let escolha = leitor.question("(C) para Ceusius e (F) para Farenheit: ")
  let temperatura:number
  switch (escolha) {
    case "F":
        temperatura = parseFloat(leitor.question("temperatura: "))
        let C = 5 * (temperatura - 32) / 9;
        return C
      
  
    case "C":
      temperatura = parseFloat(leitor.question("temperatura: "))
      let F = (9 * (temperatura / 5 ) + 32);
      return F;

    default:
      console.log("Entre com F ou C");
  }

}

// console.log(ex21());


function ex22(a:number, b:number, c:number){


  let listaNotas = [a,b,c];
  console.log(listaNotas);
  let mediaGeral = (a + b + c) / 3 ;
  let notaAlta = Math.max(a,b,c);
  let notaBaixa = Math.min(a,b,c);
  
  listaNotas.sort((a, b) => b - a); // deixa em ordem crescente
  
  console.log(listaNotas)
  let mediaAlta = (listaNotas[0] + listaNotas[1]) / 2;

  console.log(mediaGeral);
  console.log(notaAlta);
  console.log(notaBaixa);
  console.log(mediaAlta);


}


// ex22(8,10,2);

