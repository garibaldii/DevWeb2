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

// ex10()

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

  for(let index = 0; index < idades.length; index++){
    if (idades[index] >= maiorIdade){
        maiorIdade = idades[index];
        nomeMaiorIdade = nomes[index];
    }
  }
  console.log(`Pessoa de maior idade: ${nomeMaiorIdade}, ${maiorIdade} anos.`);
}

// ex23();

function ex24(){
    let listaImpares:number[] = []

    let limite = parseInt(leitor.question("Digite um numero: "))
    for (let index = 1; index < limite + 1; index++) {
        if (index % 2 != 0){
            listaImpares.push(index);
        }
        else{
            continue;
        }        
    }


    console.log(listaImpares);

}

// ex24()

function ex25(){
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let anoNascimento = leitor.question("Ano de nascimento: ")

    for (let index = anoAtual; index > anoNascimento; index--) {
        console.log(`Ano: ${index},  Idade: ${index - anoNascimento}`);
    }
}

// ex25()

function ex26(){
    
}