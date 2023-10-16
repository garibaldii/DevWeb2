import { log } from "console";
import { deflate } from "zlib";

var leitor = require("readline-sync");

function ex1() {
  let nome = leitor.question("Nome: ");
  let nomeSeparado = nome.split(" ");

  for (let index = 0; index < nomeSeparado.length; index++) {
    console.log(nomeSeparado[index]);
  }
}

//ex1()

function ex2() {
  let nome = leitor.question("Nome: ");
  let endereco = leitor.question("Endereço: ");
  let idade = leitor.question("Idade: ");

  console.log(`${nome} mora no endereço ${endereco} e tem ${idade} anos`);
}

//ex2()

function ex3() {
  let idade: number = leitor.question("Idade: ");
  console.log(`Você viveu ${idade * 365} dias`);
}

//ex3()

function ex4() {
  let numeroTela: number = Number(leitor.question("Numero: "));
  let antecessor: number = numeroTela - 1;
  let sucessor: number = numeroTela + 1;

  console.log(
    `Numero = ${numeroTela}, antecessores ${antecessor}, ${
      antecessor - 1
    }, sucessores ${sucessor}, ${sucessor + 1}`
  );
}

//ex4()

function ex5() {
  let salario = Number(leitor.question("Salário: "));
  let reajuste = Number(leitor.question("Percentual de aumento: "));

  let novoSalario = (salario * reajuste) / 100 + salario;

  console.log(`Novo salario: ${novoSalario}`);
}

// ex5();

function ex6() {
  let dolar = Number(leitor.question("Dolar: "));
  let real = Math.ceil(dolar * 5.47);

  console.log(real);
}

//ex6()

function ex7() {
  let x: number = Number(leitor.question("X: "));
  let y: number = Number(leitor.question("Y: "));
  let z: number = 0;

  z = x;
  x = y;

  console.log(`valor de x era ${z} e agora virou ${x}`);
  console.log(`valor de y era ${y} e agora virou ${z}`);
}

//ex7();

function ex8() {
  let litroCombustivel = Number(leitor.question("Valor Combustível: "));

  let abastecer = Number(leitor.question("Quantos litros abastecer: "));

  let calculoCombustivel = Math.ceil(abastecer / litroCombustivel);

  console.log(`${calculoCombustivel} litros`);
}

//ex8();

function ex9() {
  let kmInicial: number = Number(leitor.question("Km inicial: "));
  let kmFinal: number = Number(leitor.question("Km final: "));

  let distanciaPercorrida = kmFinal - kmInicial;

  let consumoCombustivel = distanciaPercorrida / 12;

  console.log(`Foram gastos ${consumoCombustivel} litros `);
}

//ex9()

function ex10() {
  let valorInicial: number = Number(
    leitor.question("Valor inicial da divida: ")
  );
  let atraso: number = Number(leitor.question("Dias em atraso: "));

  let calculoJuros = (valorInicial * atraso) / 100 + valorInicial;

  console.log(calculoJuros);
}

function ex11() {
  let x = leitor.question("X: ");

  let y = leitor.question("Y: ");

  let z = leitor.question("Z: ");

  if (x <= y) {
    for (let i = x; i < y; i++) {
      if (i == z) {
        console.log(true);
      }
    }
  } else {
    console.log("Valor inválido para X");
  }
}

//ex11();

function ex12() {
  let num = leitor.question("Número: ");

  if (num % 2 == 0) {
    console.log("Par");
  } else {
    console.log("Ímpar");
  }
}

//ex12();

function ex13() {
  let sexo = leitor.question("Sexo: ");
  let nome = leitor.question("Nome: ");

  switch (sexo) {
    case "M":
      console.log(`Seja bem-vindo ${nome}`);
      break;

    case "F":
      console.log(`Seja bem-vinda ${nome}`);
      break;

    default:
      console.log("Digite (M) ou (F)");
  }
}

// ex13();

function ex14() {
  let temperatura = parseFloat(leitor.question("Temperatura: "));
  if (temperatura <= 18) {
    console.log("Frio");
  } else if (temperatura > 19 && temperatura < 23) {
    console.log("Agradável");
  } else if (temperatura > 24 && temperatura < 35) {
    console.log("Quente");
  } else {
    console.log("Muito Quente!");
  }
}

//ex14()

function ex15() {
  //quero fazer de uma forma mais eficiente, usando as "leis" aprendidas em ED e TecProgramacao.

  const suite = {
    pernoite: 30,
    precoDia: 60,
  };

  const suiteMaster = {
    pernoite: 50,
    precoDia: 90,
  };

  const suiteMegaBlaster = {
    pernoite: 80,
    precoDia: 140,
  };

  console.log("1 - Suite \n 2 - Suite Master \n 3 - Suite MEGA Blaster.");
  let tipoQuarto = parseFloat(leitor.question("Tipo do quarto: "));

  let tipoCalculo = leitor.question("Horas ou dias? ");

  let quantidadeTempo = parseFloat(leitor.question("Qual o período? "));

  if (tipoQuarto == 1) {
    if (tipoCalculo == "dias") {
      console.log(suite.precoDia * quantidadeTempo);
    } else if (tipoCalculo == "horas") {
      console.log(suite.pernoite * quantidadeTempo);
    } else {
      console.log("Valor incorreto, digite (dias) ou (horas). ");
    }
  } else if (tipoQuarto == 2) {
    if (tipoCalculo == "dias") {
      console.log(suiteMaster.precoDia * quantidadeTempo);
    } else if (tipoCalculo == "horas") {
      console.log(suiteMaster.pernoite * quantidadeTempo);
    } else {
      console.log("Valor incorreto, digite (dias) ou (horas)");
    }
  } else if (tipoQuarto == 3) {
    if (tipoCalculo == "dias") {
      console.log(suiteMegaBlaster.precoDia * quantidadeTempo);
    } else if (tipoCalculo == "horas") {
      console.log(suiteMegaBlaster.pernoite * quantidadeTempo);
    } else {
      console.log("Valor incorreto, digite (dias) ou (horas)");
    }
  }
}

function ex15_parte2() {
  interface Plano {
    perNoite: number;
    precoDia: number;
  }

  function constroiPlano(perNoite: number, precoDia: number) {
    const plano: Plano = {
      perNoite,
      precoDia,
    };

    return plano;
  }

  const suite = constroiPlano(30, 60);
  const suiteMaster = constroiPlano(50, 90);
  const suiteMegaBlaster = constroiPlano(80, 140);

  let escolha = leitor.question("");
}

//ex15()

function ex16() {
  let diaSemana = parseFloat(leitor.question("Digite um número de 1 a 7: "));

  switch (diaSemana) {
    case 1:
      console.log("segunda-feira");
      break;
    case 2:
      console.log("terca-feira");
      break;
    case 3:
      console.log("quarta-feira");
      break;
    case 4:
      console.log("quinta-feira");
      break;
    case 5:
      console.log("sexta-feira");
      break;
    case 6:
      console.log("sabado");
      break;
    case 7:
      console.log("domingo");
      break;

    default:
      console.log("digite um número válido");
      break;
  }
}

function ex17() {
  let regiao: string = leitor.question("Regiao Brasil: ").toLowerCase();

  if (regiao == "centro oeste") {
    let listaRegiao = regiao.split(" ").join("-");
    regiao = listaRegiao;
  }

  switch (regiao) {
    case "sul":
      console.log("SC, PR, RS, ");
      break;

    case "sudeste":
      console.log("SP, RJ, MG, ES");
      break;

    case "centro-oeste":
      console.log("MT, GO, MS");
      break;

    case "nordeste":
      console.log("MA, PI, CE, RN, PB, PE, AL, SE");
      break;

    case "norte":
      console.log("TO, PA, AM, AP, RO, RR, AM, AC");
      break;

    default:
      console.log("Região inválida. ");
      break;
  }
}

// ex17();

function ex18() {
  let senha: string = "senha123";
  let codProduto = 1;

  for (let i = 1; i < 3; i++) {
    console.log(`Gerente ${i}`);
    let tentativaCodProduto: number = leitor.question("Codigo Produto: ");
    let tentativaSenha: string = leitor.question("senha: ");

    if (i == 2) {
      if (tentativaSenha == senha && tentativaCodProduto == codProduto) {
        console.log("Produto excluído com sucesso! ");
      }
    }
  }
}

// ex18();

function ex19() {
  let saldo = 500;
  let parar = false;

  while (parar === false) {
    let escolha: number = parseFloat(
      leitor.question(" 0 - Sair | 1 - Saque | 2 - Deposito | 3 - Saldo: ")
    );

    if (escolha === 1) {
      let valorSaque = parseFloat(leitor.question("Quanto deseja sacar: "));

      if (valorSaque > saldo) {
        console.log("Saldo Insuficiente");
      } else {
        saldo -= valorSaque;
      }
    } else if (escolha === 2) {
      let valorDeposito = parseFloat(
        leitor.question("Quanto deseja depositar: ")
      );

      if (valorDeposito > 0) {
        saldo += valorDeposito;
        console.log(`Valor depositado com sucesso!`);
      } else {
        console.log("Valor invalido");
      }
    } else if (escolha === 3) {
      console.log(`Saldo: ${saldo}`);
    } else if (escolha === 0) {
      parar = true;
      console.log("Operacao Finalizada! ");
      break;
    }
  }
}

// ex19();

function ex20() {
  let contador: number = 0;
  let soma: number = 0;

  while (contador != 10) {
    soma += parseInt(leitor.question("Digite um número: "));
    contador++;
  }
  console.log(`Resultado Final: ${soma}`);
}

// ex20()

function ex21() {
  let contador: number = 0;
  let soma: number = 0;

  do {
    soma += parseInt(leitor.question("Numero: "));
    contador++;
  } while (contador != 10);

  console.log(soma / contador);
}

//ex21()

function ex22() {
  let resultado = 1;
  for (let index = 1; index < 11; index++) {
    let numeroMultiplicar = parseInt(leitor.question("Numero: "));

    resultado *= numeroMultiplicar;
  }
  console.log(resultado);
}

// ex22()

function ex23() {
  let nomes: string[] = [];
  let idades: number[] = [];
  let nome: string;
  let idade: number;
  let maiorIdade = 0;
  let nomeMaiorIdade;

  for (let index = 1; index < 11; index++) {
    nome = leitor.question("Nome: ");
    nomes.push(nome);

    idade = parseFloat(leitor.question("Idade: "));
    idades.push(idade);
  }

  for (let index = 0; index < idades.length; index++) {
    if (idades[index] >= maiorIdade) {
      maiorIdade = idades[index];
      nomeMaiorIdade = nomes[index];
    }
  }
  console.log(`Pessoa de maior idade: ${nomeMaiorIdade}, ${maiorIdade} anos.`);
}

// ex23();

function ex24() {
  let listaImpares: number[] = [];

  let limite = parseInt(leitor.question("Digite um numero: "));
  for (let index = 1; index < limite + 1; index++) {
    if (index % 2 != 0) {
      listaImpares.push(index);
    } else {
      continue;
    }
  }

  console.log(listaImpares);
}

// ex24()

function ex25() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  let anoNascimento = leitor.question("Ano de nascimento: ");

  for (let index = anoAtual; index > anoNascimento; index--) {
    console.log(`Ano: ${index},  Idade: ${index - anoNascimento}`);
  }
}

// ex25()

function ex26() {
  let qtdFunc = parseFloat(leitor.question("Quantidade de funcionarios: "));

  let contadorDireito = 0;

  let nome: string;

  let tempoFirma: number;

  for (let i = 1; i < qtdFunc + 1; i++) {
    nome = leitor.question("Nome: ");
    tempoFirma = parseFloat(leitor.question("Quantidade de meses trabalhados: "));

    if (tempoFirma > 12) {
      console.log(`${nome} tem direito a ferias. `);
      contadorDireito++;
    } else {
      console.log(`${nome} não tem direito a ferias. `);
    }
  }

  console.log(`${contadorDireito} tem direito a ferias.`);
}

// ex26();

function ex27(){
  let qtdAluno = parseFloat(leitor.question("Quantidade de Alunos: "));
  let aprovado:boolean;
  
  for (let index = 1; index < qtdAluno + 1; index++) {
    console.log(`Aluno ${index}`);
    let nota1 = parseFloat(leitor.question("Nota um: "));
    let nota2 = parseFloat(leitor.question("Nota dois: "));

    let media = (nota1 + nota2) / 2;

    if (media >= 6){
      aprovado = true;
      console.log(aprovado);
    }

    else{
      aprovado = false;
      console.log(aprovado);
    }
  }
}
for (let coluna = 1; coluna < 3 ; coluna ++) {
  

  for (let linha = 1; linha < 11; linha++) {}
}
// ex27();
