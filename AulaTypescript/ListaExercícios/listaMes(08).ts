import { reverse } from "dns";

var leitor = require('readline-sync');
//ESTA VARIÁVEL IRÁ TER TODAS AS FUNCIONALIDAES DA BIBLIOTECA READLINE-SYNC

//PROIBIDO USAR LOOPS DE REPETIÇÃO, ORDEM DA PROFESSORA

function Questao1(): void {

    let nome: String = leitor.question('Digite o nome: ');

    let endereco: String = leitor.question('Digite o endereco: ');

    let telefone: Number = leitor.question('Digite o telefone: ');

    console.log(nome, endereco, telefone);


};

function Questao2(): void {

    let valor: Number = leitor.question("Valor: ");

    let formula: Number = Number(valor) * 1.1;

    console.log(formula);

};

function Questao3(): void {
    let valorHoraAula: Number = leitor.question('Valor Hora Aula: ');

    let qtdAula: Number = leitor.question('Quantidade de aula dada: ');

    let INSS: Number = leitor.question('Desconto do INSS: ');

    let INSSFormatado = (Number(INSS) / 100) + 1;

    let salarioBruto = (Number(valorHoraAula) * Number(qtdAula));

    let salarioLiquido = (salarioBruto * INSSFormatado);

    console.log(salarioLiquido);

    function Questao3_1(): void {

        let valorVetor: number = Number(leitor.question());
        let valorVetor1: number = Number(leitor.question());
        let valorVetor2: number = Number(leitor.question());
        let valorVetor3: number = Number(leitor.question());
        let valorVetor4: number = Number(leitor.question());


        let vetor1: number[] = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];

        let vetor2: number[] = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];

        let vetorResultante = [vetor1[0] + vetor2[0], vetor1[1] + vetor2[1], vetor1[2] + vetor2[2], vetor1[3] + vetor2[3], vetor1[4] + vetor2[4]];

        console.log(vetorResultante);
    };
};

function Questao4(): void {

    let vetorHorario: number[] = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    let vetorAntihorario: number[] = vetorHorario.reverse();

    console.log(vetorAntihorario);

};

function Questao5(): void {
    let lerValor: String = leitor.question(': ');

    let valorAoContrario = lerValor.split('').reverse().join('');
    //TRANSFORMAR EM ARRAY, INVERTER O ARRAY, TRASNFORMAR EM STRING ONDE CADA ÍNDICE SERÁ SEPARADO POR .JOIN(' ')
    console.log(valorAoContrario);
};

function Questao6():void {

    const dataAtual = new Date();

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth() + 1;
    const dia = dataAtual.getDate();

    var qtdDiaMes = 30;
    var qtdDiaAno = 365;

    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        var qtdDiaMes = 31;
    };

    if (ano % 4 == 0 && (ano % 100 == 0 || ano % 400 == 0)) { //SE UM ANO FOR BISSEXTO, FEVEREIRO RECEBE +1 DIA
        qtdDiaAno = 366;
        if (mes === 2) {
            qtdDiaMes = 29;
        };
    };

    let stringNascimento = leitor.question('Nascimento separado por  / : ');

    let arrayStringNascimento = stringNascimento.split('/');

    let arrayNumNascimento = arrayStringNascimento.map(Number);

    var idadeAnos = (ano - arrayNumNascimento[2]);

    var idadeMes = mes - arrayNumNascimento[1];

    if (idadeMes < 0) {
        (idadeAnos--);
        idadeMes += 12;
    };

    var idadeDia = dia - arrayNumNascimento[0];
    if (idadeDia < 0) {
        (idadeMes--);
        idadeDia += qtdDiaMes;
    };

    let anoParaDia = idadeAnos * qtdDiaAno;

    let mesParaDia = idadeMes * qtdDiaMes;

    let idadeEmDias = anoParaDia + mesParaDia + idadeDia;

    console.log(idadeEmDias);

};

function Questao7():void{
    let habitantes = leitor.question('Habitantes: ');
    let porcentagemEleitores: number = Math.random();

    let qtdEleitores = habitantes * porcentagemEleitores;

    let porcentagemVotoBranco = (Math.random() * qtdEleitores) / 100;
    let qtdVotoBranco = qtdEleitores * porcentagemVotoBranco;
    let qtdEleitoresValidos = qtdEleitores - qtdVotoBranco;

    let porcentagemVotoNulo: number = Math.random() * (porcentagemEleitores - porcentagemVotoBranco );
    let qtdVotoNulo = porcentagemVotoNulo * qtdEleitoresValidos;

    qtdEleitoresValidos -= qtdVotoNulo;

    console.log(`TOTAL DA POPULAÇÃO VOTANTE DA CIDADE: ${100 * porcentagemEleitores}%`);
    console.log(`CORRESPONDE A: ${qtdEleitores} pessoas`);
    console.log(`--------------------------------------------------------------------------`);

    console.log(`${100 * porcentagemVotoBranco}% votaram em branco.`);
    console.log(`O QUE RESULTA EM ${qtdVotoBranco.toFixed(1)} votos brancos.`);
    console.log(`---------------------------------------------------------------------------`);

    console.log(`${100 * porcentagemVotoNulo}% votaram nulo`);
    console.log(`O QUE RESULTA EM ${qtdVotoNulo.toFixed(1)} pessoas que votaram nulo`);

    console.log(`${qtdEleitoresValidos.toFixed(1)} votaram em algum candidato`);



};

function Questao8():void{
    let salarioAtual = leitor.question('Salario: ');
    let porcentagemAumento = leitor.question('Porcentagem de aumento: ');

    let novoSalario = salarioAtual * ( porcentagemAumento/100 + 1);

    console.log(`Novo salário: ${novoSalario}`);
};

function Questao9():void{
    let custoFabrica = leitor.question("Custo Fabrica: ");
    let porcentagemDistribuidor = leitor.question("Porcentagem distribuidor: ");
    let porcentagemImpostos = leitor.question("Porcentagem impostos: ");

    let carroNovo = (custoFabrica * ((porcentagemDistribuidor / 100) + 1)) *  ((porcentagemImpostos / 100) + 1)
    
    console.log(`Preço do carro: ${carroNovo}`);
};

function Questao10(){
    let numCarrosVendidos = leitor.question("Numero de carros vendidos: ");

    let valorTotalVendas = leitor.question("Faturamento mensal: ");

    let salarioFixo = leitor.question("Salario fixo: ");

    let comissaoFixa = 500;

    let porcentagemComissao = 0.05;
    //ganho de 5%// ;

    let formulaGanhoExtra = (numCarrosVendidos * comissaoFixa) + (valorTotalVendas * porcentagemComissao);

    let salarioFinal = formulaGanhoExtra + Number(salarioFixo);
    
    console.log(`Ganho Extra: R$${formulaGanhoExtra} . Salário final: ${salarioFinal}`);
};
