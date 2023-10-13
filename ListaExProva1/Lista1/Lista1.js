"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function ex1() {
    var nome = leitor.question("Nome: ");
    var nomeSeparado = nome.split(" ");
    for (var index = 0; index < nomeSeparado.length; index++) {
        console.log(nomeSeparado[index]);
    }
}
//ex1()
function ex2() {
    var nome = leitor.question("Nome: ");
    var endereco = leitor.question("Endereço: ");
    var idade = leitor.question("Idade: ");
    console.log("".concat(nome, " mora no endere\u00E7o ").concat(endereco, " e tem ").concat(idade, " anos"));
}
//ex2()
function ex3() {
    var idade = leitor.question("Idade: ");
    console.log("Voc\u00EA viveu ".concat(idade * 365, " dias"));
}
//ex3()
function ex4() {
    var numeroTela = Number(leitor.question("Numero: "));
    var antecessor = numeroTela - 1;
    var sucessor = numeroTela + 1;
    console.log("Numero = ".concat(numeroTela, ", antecessores ").concat(antecessor, ", ").concat(antecessor - 1, ", sucessores ").concat(sucessor, ", ").concat(sucessor + 1));
}
//ex4()
function ex5() {
    var salario = Number(leitor.question("Salário: "));
    var reajuste = Number(leitor.question("Percentual de aumento: "));
    var novoSalario = (salario * reajuste) / 100 + salario;
    console.log("Novo salario: ".concat(novoSalario));
}
// ex5();
function ex6() {
    var dolar = Number(leitor.question("Dolar: "));
    var real = Math.ceil(dolar * 5.47);
    console.log(real);
}
//ex6()
function ex7() {
    var x = Number(leitor.question("X: "));
    var y = Number(leitor.question("Y: "));
    var z = 0;
    z = x;
    x = y;
    console.log("valor de x era ".concat(z, " e agora virou ").concat(x));
    console.log("valor de y era ".concat(y, " e agora virou ").concat(z));
}
//ex7();
function ex8() {
    var litroCombustivel = Number(leitor.question("Valor Combustível: "));
    var abastecer = Number(leitor.question("Quantos litros abastecer: "));
    var calculoCombustivel = Math.ceil(abastecer / litroCombustivel);
    console.log("".concat(calculoCombustivel, " litros"));
}
//ex8();
function ex9() {
    var kmInicial = Number(leitor.question("Km inicial: "));
    var kmFinal = Number(leitor.question("Km final: "));
    var distanciaPercorrida = kmFinal - kmInicial;
    var consumoCombustivel = distanciaPercorrida / 12;
    console.log("Foram gastos ".concat(consumoCombustivel, " litros "));
}
//ex9()
function ex10() {
    var valorInicial = Number(leitor.question("Valor inicial da divida: "));
    var atraso = Number(leitor.question("Dias em atraso: "));
    var calculoJuros = (valorInicial * atraso) / 100 + valorInicial;
    console.log(calculoJuros);
}
// ex10()
function ex17() {
    var regiao = leitor.question("Regiao Brasil: ").toLowerCase();
    if (regiao == "centro oeste") {
        var listaRegiao = regiao.split(" ").join("-");
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
    var senha = "senha123";
    var codProduto = 1;
    for (var i = 1; i < 3; i++) {
        console.log("Gerente ".concat(i));
        var tentativaCodProduto = leitor.question("Codigo Produto: ");
        var tentativaSenha = leitor.question("senha: ");
        if (i == 2) {
            if (tentativaSenha == senha && tentativaCodProduto == codProduto) {
                console.log("Produto excluído com sucesso! ");
            }
        }
    }
}
// ex18();
function ex19() {
    var saldo = 500;
    var parar = false;
    while (parar === false) {
        var escolha = parseFloat(leitor.question(" 0 - Sair | 1 - Saque | 2 - Deposito | 3 - Saldo: "));
        if (escolha === 1) {
            var valorSaque = parseFloat(leitor.question("Quanto deseja sacar: "));
            if (valorSaque > saldo) {
                console.log("Saldo Insuficiente");
            }
            else {
                saldo -= valorSaque;
            }
        }
        else if (escolha === 2) {
            var valorDeposito = parseFloat(leitor.question("Quanto deseja depositar: "));
            if (valorDeposito > 0) {
                saldo += valorDeposito;
                console.log("Valor depositado com sucesso!");
            }
            else {
                console.log("Valor invalido");
            }
        }
        else if (escolha === 3) {
            console.log("Saldo: ".concat(saldo));
        }
        else if (escolha === 0) {
            parar = true;
            console.log("Operacao Finalizada! ");
            break;
        }
    }
}
// ex19();
function ex20() {
    var contador = 0;
    var soma = 0;
    while (contador != 10) {
        soma += parseInt(leitor.question("Digite um número: "));
        contador++;
    }
    console.log("Resultado Final: ".concat(soma));
}
// ex20()
function ex21() {
    var contador = 0;
    var soma = 0;
    do {
        soma += parseInt(leitor.question("Numero: "));
        contador++;
    } while (contador != 10);
    console.log(soma / contador);
}
//ex21()
function ex22() {
    var resultado = 1;
    for (var index = 1; index < 11; index++) {
        var numeroMultiplicar = parseInt(leitor.question("Numero: "));
        resultado *= numeroMultiplicar;
    }
    console.log(resultado);
}
// ex22()
function ex23() {
    var nomes = [];
    var idades = [];
    var nome;
    var idade;
    var maiorIdade = 0;
    var nomeMaiorIdade;
    for (var index = 1; index < 11; index++) {
        nome = leitor.question("Nome: ");
        nomes.push(nome);
        idade = parseFloat(leitor.question("Idade: "));
        idades.push(idade);
    }
    for (var index = 0; index < idades.length; index++) {
        if (idades[index] >= maiorIdade) {
            maiorIdade = idades[index];
            nomeMaiorIdade = nomes[index];
        }
    }
    console.log("Pessoa de maior idade: ".concat(nomeMaiorIdade, ", ").concat(maiorIdade, " anos."));
}
// ex23();
function ex24() {
    var listaImpares = [];
    var limite = parseInt(leitor.question("Digite um numero: "));
    for (var index = 1; index < limite + 1; index++) {
        if (index % 2 != 0) {
            listaImpares.push(index);
        }
        else {
            continue;
        }
    }
    console.log(listaImpares);
}
// ex24()
function ex25() {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascimento = leitor.question("Ano de nascimento: ");
    for (var index = anoAtual; index > anoNascimento; index--) {
        console.log("Ano: ".concat(index, ",  Idade: ").concat(index - anoNascimento));
    }
}
ex25();
