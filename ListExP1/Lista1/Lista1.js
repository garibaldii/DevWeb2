"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
// 1)	Crie um programa que escreve o seu nome completo, colocando uma palavra em cada linha
function ex1() {
    var nome = leitor.question("Nome: ");
    var nomeSeparado = nome.split(" ");
    for (var index = 0; index < nomeSeparado.length; index++) {
        console.log(nomeSeparado[index]);
    }
}
//ex1()
// ###
// 2)	Crie um programa que solicite o nome, o endereço e a idade do usuário e depois mostra os dados digitados em uma única linha. Exemplo:
// <nome> mora no endereço: <endereço> e tem <teIefone> anos.
function ex2() {
    var nome = leitor.question("Nome: ");
    var endereco = leitor.question("Endereço: ");
    var idade = leitor.question("Idade: ");
    console.log("".concat(nome, " mora no endere\u00E7o ").concat(endereco, " e tem ").concat(idade, " anos"));
}
//ex2()
// ###
// 3)	Crie um programa que leia uma idade de uma pessoa e calcule quantos dias essa pessoa já viveu.
function ex3() {
    var idade = leitor.question("Idade: ");
    console.log("Voc\u00EA viveu ".concat(idade * 365, " dias"));
}
//ex3()
// ###
// 4)	Crie um programa que leia um número na tela, mostra seus 2 sucessores e 2 antecessores.
// Exemplo: numero = 5, antecessores 4,3, sucessores 6,7
function ex4() {
    var numeroTela = Number(leitor.question("Numero: "));
    var antecessor = numeroTela - 1;
    var sucessor = numeroTela + 1;
    console.log("Numero = ".concat(numeroTela, ", antecessores ").concat(antecessor, ", ").concat(antecessor - 1, ", sucessores ").concat(sucessor, ", ").concat(sucessor + 1));
}
//ex4()
// ###
// 5)	Crie um programa que lê o salário de um funcionário, e o percentual de reajuste. O programa deve calcular o salário reajustado e mostrar o resultado.
function ex5() {
    var salario = Number(leitor.question("Salário: "));
    var reajuste = Number(leitor.question("Percentual de aumento: "));
    var novoSalario = (salario * reajuste) / 100 + salario;
    console.log("Novo salario: ".concat(novoSalario));
}
// ex5();
// ###
// 6)	Crie um programa que lê um número real em dólar, e converte o valor para reais. Considere que a cotação é US$ 1 = R$ 5,47.
function ex6() {
    var dolar = Number(leitor.question("Dolar: "));
    var real = Math.ceil(dolar * 5.47);
    console.log(real);
}
//ex6()
// ###
// 7)	Crie um programa que leia as variáveis inteiras x e y e troque o valor destas variáveis. 
// Isto é, x deve ficar com o valor de y e y deve ficar com o valor de x. Mostre os valores depois da troca
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
//###
// 8)	Faça um programa que solicite ao usuário o valor do litro de combustível (ex. 4,19) e qual valor ele deseja abastecer (ex. 50,00). 
// Calcule quantos litros de combustível o usuário obterá com esses valores.
function ex8() {
    var litroCombustivel = Number(leitor.question("Valor Combustível: "));
    var abastecer = Number(leitor.question("Quantos litros abastecer: "));
    var calculoCombustivel = Math.ceil(abastecer / litroCombustivel);
    console.log("".concat(calculoCombustivel, " litros"));
}
//ex8();
// ###
// 9)	Sabendo-se que um veículo faz 12km/It. Faça um programa que calcule a média de consumo de combustível de um veículo. 
// O usuário deve informar o KM inicial (ex. 12500 km), o KM final (ex. 12700 km) e quantos litros foram gastos no percurso.
function ex9() {
    var kmInicial = Number(leitor.question("Km inicial: "));
    var kmFinal = Number(leitor.question("Km final: "));
    var distanciaPercorrida = kmFinal - kmInicial;
    var consumoCombustivel = distanciaPercorrida / 12;
    console.log("Foram gastos ".concat(consumoCombustivel, " litros "));
}
//ex9()
// ###
// 10)	Faça um programa que calcule o valor a ser pago por uma dívida em atraso. 
// O usuário deve informar o valor original da dívida (ex. RS 50,00), a quantidade de dias em atraso (ex. 35 dias) e o percentual da multa por dia de atraso (ex. 1%)
function ex10() {
    var valorInicial = Number(leitor.question("Valor inicial da divida: "));
    var atraso = Number(leitor.question("Dias em atraso: "));
    var calculoJuros = (valorInicial * atraso) / 100 + valorInicial;
    console.log(calculoJuros);
}
//ex10()
// 11)	Crie um programa que leia dois valores (x e y) representando um intervalo. Em seguida, leia um novo valor (z) e verifique se z pertence ao intervalo [x, y].
function ex11() {
    var x = leitor.question("X: ");
    var y = leitor.question("Y: ");
    var z = leitor.question("Z: ");
    if (x <= y) {
        for (var i = x; i < y; i++) {
            if (i == z) {
                console.log(true);
            }
        }
    }
    else {
        console.log("Valor inválido para X");
    }
}
//ex11();
// 12)	Crie um programa que leia um número do usuário e informe se e o número é par ou ímpar
function ex12() {
    var num = leitor.question("Número: ");
    if (num % 2 == 0) {
        console.log("Par");
    }
    else {
        console.log("Ímpar");
    }
}
//ex12();
// // 13)	Escreva um programa que leia uma letra que represente o sexo de uma pessoa (M para Masculino e F para feminino) e o nome. 
// Se for masculino, mostra a mensagem “Seja bem-vindo, <nome>!”, se for feminino, mostra a mensagem “Seja bem-vinda,
// <nome>!”.
function ex13() {
    var sexo = leitor.question("Sexo: ");
    var nome = leitor.question("Nome: ");
    switch (sexo) {
        case "M":
            console.log("Seja bem-vindo ".concat(nome));
            break;
        case "F":
            console.log("Seja bem-vinda ".concat(nome));
            break;
        default:
            console.log("Digite (M) ou (F)");
    }
}
// ex13();
// 14)	Crie um programa que, dada uma temperatura em graus célsius, exiba uma mensagem informando o tipo do clima, 
// de acordo com as seguintes condições: se a temperatura estiver até 18 graus, o clima é frio; se a temperatura estiver entre 19 e 23 graus, 
// o clima é agradável; se a temperatura estiver entre 24 e 35 graus, o clima é quente; se a temperatura estiver acima de 35 graus, o clima é muito quente.
function ex14() {
    var temperatura = parseFloat(leitor.question("Temperatura: "));
    if (temperatura <= 18) {
        console.log("Frio");
    }
    else if (temperatura > 19 && temperatura < 23) {
        console.log("Agradável");
    }
    else if (temperatura > 24 && temperatura < 35) {
        console.log("Quente");
    }
    else {
        console.log("Muito Quente!");
    }
}
//ex14()
// 15)	Faça um programa que calcula o valor a ser pago de estadia em um hotel. Há preços diferentes de acordo com o quarto escolhido.
//  O usuário deve primeiramente informar o tipo do quarto. Depois se o cálculo será feito em horas ou em dias. Por fim, 
//  informar quantas horas ou quantos dias permaneceu no local.
//   O valor é calculado de acordo com a tabela abaixo: Considere o período de até 6 horas como pernoite.
// TIPO	PREÇO/PERNOITE	PREÇO/DIA
// 1. Suite	R$ 30,00	R$ 60,00
// 2. Suite Master	R$ 50,00	R$ 90,00
// 3. Suite Mega Blaster	R$ 80,00	R$ 140,00
function ex15() {
    //quero fazer de uma forma mais eficiente, usando as "leis" aprendidas em ED e TecProgramacao.
    var suite = {
        pernoite: 30,
        precoDia: 60,
    };
    var suiteMaster = {
        pernoite: 50,
        precoDia: 90,
    };
    var suiteMegaBlaster = {
        pernoite: 80,
        precoDia: 140,
    };
    console.log("1 - Suite \n 2 - Suite Master \n 3 - Suite MEGA Blaster.");
    var tipoQuarto = parseFloat(leitor.question("Tipo do quarto: "));
    var tipoCalculo = leitor.question("Horas ou dias? ");
    var quantidadeTempo = parseFloat(leitor.question("Qual o período? "));
    if (tipoQuarto == 1) {
        if (tipoCalculo == "dias") {
            console.log(suite.precoDia * quantidadeTempo);
        }
        else if (tipoCalculo == "horas") {
            console.log(suite.pernoite * quantidadeTempo);
        }
        else {
            console.log("Valor incorreto, digite (dias) ou (horas). ");
        }
    }
    else if (tipoQuarto == 2) {
        if (tipoCalculo == "dias") {
            console.log(suiteMaster.precoDia * quantidadeTempo);
        }
        else if (tipoCalculo == "horas") {
            console.log(suiteMaster.pernoite * quantidadeTempo);
        }
        else {
            console.log("Valor incorreto, digite (dias) ou (horas)");
        }
    }
    else if (tipoQuarto == 3) {
        if (tipoCalculo == "dias") {
            console.log(suiteMegaBlaster.precoDia * quantidadeTempo);
        }
        else if (tipoCalculo == "horas") {
            console.log(suiteMegaBlaster.pernoite * quantidadeTempo);
        }
        else {
            console.log("Valor incorreto, digite (dias) ou (horas)");
        }
    }
}
function ex15_parte2() {
    function constroiPlano(perNoite, precoDia) {
        var plano = {
            perNoite: perNoite,
            precoDia: precoDia,
        };
        return plano;
    }
    var suite = constroiPlano(30, 60);
    var suiteMaster = constroiPlano(50, 90);
    var suiteMegaBlaster = constroiPlano(80, 140);
    var escolha = leitor.question("");
}
//ex15()
// 16)	Usando a estrutura Switch, escreva um programa que leia um número inteiro (de 1 a 7) representando o dia da semana e informe o nome do dia correspondente.
function ex16() {
    var diaSemana = parseFloat(leitor.question("Digite um número de 1 a 7: "));
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
// 17)	Usando a estrutura Switch, crie um programa que solicita o nome de uma das regiões do Brasil e mostra 
// uma lista com todos os estados desta região. Ex: o usuário digita SUL, o programa mostra Paraná (PR), Santa Catarina (SC), Rio Grande do Sul (RS).
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
// // 18)	Usando o operador lógico E, faça um programa de supermercado que solicita a autorização de DOIS gerentes para poder 
// cancelar a compra de um produto. O sistema pergunta o código do produto. Depois pede o nome e senha do gerente 1, depois pede o nome e senha do
//  gerente 2. Se todos os dados estiverem corretos, uma mensagem de cancelamento realizado é exibida junto com o código do produto. Uma mensagem de erro
//   deve ser exibida se algum dado estiver incorreto. Você deverá definir em uma constante as senhas dos gerentes.
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
// 19)	Faça um programa que simule um caixa eletrônico. É exibido um menu com as seguintes opções: 
// 1 SAQUE, 2 DEPÓSITO, 3 SALDO. O saldo da conta deve ser definido no início do programa como R$ 500,00.
//  Se o usuário selecionar a opção SAQUE será perguntado pelo valor que deseja sacar. Se for abaixo de R$ 500,00,
//   autorizar o saque e exibir o saldo restante. Se for acima de RS 500,00 mostrar uma mensagem de saldo insuficiente. 
//   Na opção DEPÓSITO o programa pergunta o valor a ser depositado. Se o valor for positivo, adicionar ao saldo existente e mostrar na tela o novo saldo. 
//   Se for um valor negativo, exibir mensagem de valor inválido. Para a opção SALDO, 
//   o programa exibe o saldo atual e agradece ao usuário por usar os serviços do banco.
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
// 20)	Escreva um programa que leia 10 números do usuário e calcule a soma desses números. Utilize o comando de repetição Enquanto (While)
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
// 21)	Escreva um programa que leia 10 números do usuário e calcule a média desses números. Utilize o comando de repetição Repita (Do...While)
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
// 22)	Escreva um programa que leia 10 números do usuário e calcule a multiplicação desses números. Utilize o comando de repetição Para (For)
function ex22() {
    var resultado = 1;
    for (var index = 1; index < 11; index++) {
        var numeroMultiplicar = parseInt(leitor.question("Numero: "));
        resultado *= numeroMultiplicar;
    }
    console.log(resultado);
}
// ex22()
// 23)	Escreva um programa que leia o nome e a idade de 10 pessoas e exiba: o nome e a idade da pessoa mais nova.
function ex23() {
    var nomes = [];
    var idades = [];
    var nome;
    var idade;
    var menorIdade = 120;
    var nomeMenorIdade;
    for (var index = 1; index < 11; index++) {
        nome = leitor.question("Nome: ");
        nomes.push(nome);
        idade = parseFloat(leitor.question("Idade: "));
        idades.push(idade);
    }
    for (var index = 0; index < idades.length; index++) {
        if (idades[index] <= menorIdade) {
            menorIdade = idades[index];
            nomeMenorIdade = nomes[index];
        }
    }
    console.log("Pessoa de menor idade: ".concat(nomeMenorIdade, ", ").concat(menorIdade, " anos."));
}
//ex23();
// 24)	Escreva um programa que leia um número qualquer do usuário e escreva os ímpares existentes entre 1 e o número informado pelo usuário
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
// 25)	Escreva um programa que leia o ano de nascimento de uma pessoa e apresente uma linha do tempo, mostrando
//  cada ano de vida da pessoa e quantos anos ela tinha em cada ano até o ano atual
function ex25() {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascimento = leitor.question("Ano de nascimento: ");
    for (var index = anoAtual; index > anoNascimento; index--) {
        console.log("Ano: ".concat(index, ",  Idade: ").concat(index - anoNascimento));
    }
}
// ex25()
/* 26) Escreva um programa que leia a quantidade de funcionários em uma empresa e, para cada funcionário
 leia seu nome e seu tempo de serviço (em meses). Se o funcionário possuir mais de 12 meses na empresa, escreva a mensagem "<NOME> tem direito a férias". Caso contrário, escreva a mensagem "<NOME> não tem direito a férias". Ao final, exiba quantos funcionários possuem direito a férias e quantos não possuem.
*/
function ex26() {
    var qtdFunc = parseFloat(leitor.question("Quantidade de funcionarios: "));
    var contadorDireito = 0;
    var nome;
    var tempoFirma;
    for (var i = 1; i < qtdFunc + 1; i++) {
        nome = leitor.question("Nome: ");
        tempoFirma = parseFloat(leitor.question("Quantidade de meses trabalhados: "));
        if (tempoFirma > 12) {
            console.log("".concat(nome, " tem direito a ferias. "));
            contadorDireito++;
        }
        else {
            console.log("".concat(nome, " n\u00E3o tem direito a ferias. "));
        }
    }
    console.log("".concat(contadorDireito, " tem direito a ferias."));
}
ex26();
/* 27) Escreva um programa que leia a quantidade de alunos em uma turma e informe se o aluno está aprovado
 ou reprovado. O aluno está aprovado apenas se a sua média for maior ou igual a 6.
*/
function ex27() {
    var qtdAluno = parseFloat(leitor.question("Quantidade de Alunos: "));
    var aprovado;
    for (var index = 1; index < qtdAluno + 1; index++) {
        console.log("Aluno ".concat(index));
        var nota1 = parseFloat(leitor.question("Nota um: "));
        var nota2 = parseFloat(leitor.question("Nota dois: "));
        var media = (nota1 + nota2) / 2;
        if (media >= 6) {
            aprovado = true;
            console.log(aprovado);
        }
        else {
            aprovado = false;
            console.log(aprovado);
        }
    }
}
/* 28) Crie um progrma, utilizando laços de repeticao aninhados, que exiba na tela a tabuada de multiplicação dos números de 1 a 9.
*/
function ex28() {
    for (var coluna = 9; coluna < 10; coluna++) {
        for (var linha = 1; linha < 11; linha++) {
            console.log("".concat(linha, " * ").concat(coluna, " = ").concat(linha * coluna));
        }
    }
}
// ex28();
function ex29() {
    var qtdClientes, qtdProdutos, escolha = Math.ceil((Math.random() * 10) / 2);
    var fechamentoCaixa = 0;
    var padraoProdutos = {
        "Barra de Chocolate": 10,
        Arroz: 20,
        Feijao: 8,
        "File de frango": 14,
        Detergente: 2,
    };
    for (var index = 1; index < 5 + 1; index++) {
        console.log("cliente ".concat(index));
        for (var chave in padraoProdutos) {
            var valoresLista = Object.values(padraoProdutos);
            console.log(valoresLista[escolha]);
        }
    }
}
// ex29();
/* 30) Uma escola possui um determinado número de turmas. Crie um programa que leia a quantidade de turmas existentes
  na escola. Para cada turma, leia a quantidade de alunos e, para cada aluno, leia a sua média no semestre. Informe a média de cada uma das turmas.
*/
function ex30() {
    var mediaGeral = 0;
    var qtdTurmas = parseFloat(leitor.question("Qtd de turmas: "));
    for (var turma = 1; turma < qtdTurmas + 1; turma++) {
        var qtdAlunos = parseFloat(leitor.question("Qtd alunos na turma ".concat(turma, ": ")));
        for (var aluno = 1; aluno < qtdAlunos + 1; aluno++) {
            var mediaIndividual = parseFloat(leitor.question("Media do aluno ".concat(aluno, " da turma ").concat(turma, ": ")));
            mediaGeral += mediaIndividual;
        }
        console.log("Media geral da turma ".concat(turma, " \u00E9 : ").concat(mediaGeral / qtdAlunos));
        mediaGeral = 0;
    }
}
ex30();
/* 31) Crie um programa que leia um número n do usuário e imprima o padrão abaixo na tela. Ex: para n = 5:

*
* *
* * *
* * * *
* * * * *

*/
function ex31() {
    var n = parseFloat(leitor.question("Numero: "));
    for (var linha = 0; linha < n + 1; linha++) {
        var padrao = "* ";
        console.log(padrao.repeat(linha)); // aqui ele vai repetir o "  *  " de acordo com a quantidade de linhas que estão sendo atualizadas, linha 1 = * \n linha 2 =  * * e assim por diante. 
    }
}
// ex31();
