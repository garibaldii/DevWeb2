"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require('readline-sync');

//ESTA VARIÁVEL IRÁ TER TODAS AS FUNCIONALIDAES DA BIBLIOTECA READLINE-SYNC
//PROIBIDO USAR LOOPS DE REPETIÇÃO, ORDEM DA PROFESSORA
function Questao1() {
    var nome = leitor.question('Digite o nome: ');
    var endereco = leitor.question('Digite o endereco: ');
    var telefone = leitor.question('Digite o telefone: ');
    console.log(nome, endereco, telefone);
}
;
function Questao2() {
    var valor = leitor.question("Valor: ");
    var formula = Number(valor) * 1.1;
    console.log(formula);
}
;
function Questao3() {
    var valorHoraAula = leitor.question('Valor Hora Aula: ');
    var qtdAula = leitor.question('Quantidade de aula dada: ');
    var INSS = leitor.question('Desconto do INSS: ');
    var INSSFormatado = (Number(INSS) / 100) + 1;
    var salarioBruto = (Number(valorHoraAula) * Number(qtdAula));
    var salarioLiquido = (salarioBruto * INSSFormatado);
    console.log(salarioLiquido);
}
;
function Questao3_1() {
    var valorVetor = Number(leitor.question());
    var valorVetor1 = Number(leitor.question());
    var valorVetor2 = Number(leitor.question());
    var valorVetor3 = Number(leitor.question());
    var valorVetor4 = Number(leitor.question());
    var vetor1 = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];
    var vetor2 = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];
    var vetorResultante = [vetor1[0] + vetor2[0], vetor1[1] + vetor2[1], vetor1[2] + vetor2[2], vetor1[3] + vetor2[3], vetor1[4] + vetor2[4]];
    console.log(vetorResultante);
}
;
function Questao4() {
    var vetorHorario = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var vetorAntihorario = vetorHorario.reverse();
    console.log(vetorAntihorario);
};
function Questao5() {
    var lerValor = leitor.question(': ');
    var valorAoContrario = lerValor.split('').reverse().join('');
    //TRANSFORMAR EM ARRAY, INVERTER O ARRAY, TRASNFORMAR EM STRING ONDE CADA ÍNDICE SERÁ SEPARADO POR .JOIN(' ')
    console.log(valorAoContrario);
}



function Questao6() {

    const dataAtual = new Date();

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth() +1 ;
    const dia = dataAtual.getDate();

    var qtdDiaMes = 30;
    var qtdDiaAno = 365;

    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
        var qtdDiaMes = 31;
    };
    
    if (ano % 4 == 0 && (ano % 100 == 0 || ano % 400 == 0)){ //SE UM ANO FOR BISSEXTO, FEVEREIRO RECEBE +1 DIA
        qtdDiaAno = 366;
        if (mes === 2){
            qtdDiaMes = 29;
        };
    };

    let stringNascimento = leitor.question('Nascimento separado por  / : ');

    let arrayStringNascimento = stringNascimento.split('/');

    let arrayNumNascimento = arrayStringNascimento.map(Number);

    var idadeAnos = (ano - arrayNumNascimento[2]);

    var idadeMes = mes - arrayNumNascimento[1];

    if (idadeMes < 0 ){
        (idadeAnos--);
        idadeMes += 12;
    };

    var idadeDia = dia - arrayNumNascimento[0];
    if (idadeDia < 0){
        (idadeMes--);
        idadeDia += qtdDiaMes;
    };

    let anoParaDia = idadeAnos * qtdDiaAno;

    let mesParaDia = idadeMes * qtdDiaMes;

    let idadeEmDias = anoParaDia + mesParaDia + idadeDia;
   
    console.log(idadeEmDias);
     
};

function Questao7(){
    let habitantes = leitor.question('Habitantes: ');
    let porcentagemEleitores = Math.random();

    let qtdEleitores = habitantes * porcentagemEleitores

    let porcentagemVotoBranco = Math.random() * qtdEleitores;
    let qtdVotoBranco = qtdEleitores * porcentagemVotoBranco;
    let qtdEleitoresValidos = qtdEleitores - qtdVotoBranco;

    let porcentagemVotoNulo = Math.random() * (porcentagemEleitores - porcentagemVotoBranco );
    let qtdVotoNulo = porcentagemVotoNulo * qtdEleitoresValidos;

    qtdEleitoresValidos -= qtdVotoNulo;

    console.log(`TOTAL DA POPULAÇÃO VOTANTE DA CIDADE: ${100 * porcentagemEleitores.toFixed(1)}%`);
    console.log(`CORRESPONDE A: ${qtdEleitores.toFixed(1)} pessoas`);
    console.log(`--------------------------------------------------------------------------`);

    console.log(`${100 * porcentagemVotoBranco.toFixed(1)}% votaram em branco.`);
    console.log(`O QUE RESULTA EM ${qtdVotoBranco.toFixed(1)} votos brancos.`);
    console.log(`---------------------------------------------------------------------------`);

    console.log(`${100 * porcentagemVotoNulo.toFixed(1)}% votaram nulo`);
    console.log(`O QUE RESULTA EM ${qtdVotoNulo.toFixed(1)} pessoas que votaram nulo`);

    console.log(`${qtdEleitoresValidos.toFixed(1)} votaram em algum candidato`);



}
Questao7();