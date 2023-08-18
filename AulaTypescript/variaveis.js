var leitor = require('readline-sync');
//ESTA VARIÁVEL IRÁ TER TODAS AS FUNCIONALIDAES DA BIBLIOTECA READLINE-SYNC
function Questao1() {
    var nome = leitor.question('Digite o nome: ');
    var endereco = leitor.question('Digite o endereco: ');
    var telefone = leitor.question('Digite o telefone: ');
    console.log(nome, endereco, telefone);
}
function Questao2() {
    var valor = leitor.question("Valor: ");
    var formula = Number(valor) * 1.1;
    console.log(formula);
}
function Questao3() {
    var valorHoraAula = leitor.question('Valor Hora Aula: ');
    var qtdAula = leitor.question('Quantidade de aula dada: ');
    var INSS = leitor.question('Desconto do INSS: ');
    var INSSFormatado = (Number(INSS) / 100) + 1;
    var salarioBruto = (Number(valorHoraAula) * Number(qtdAula));
    var salarioLiquido = (salarioBruto * INSSFormatado);
    console.log(salarioLiquido);
}
function Questao3_1() {
    var valorVetor = Number(leitor.question());
    var valorVetor1 = Number(leitor.question());
    var valorVetor2 = Number(leitor.question());
    var valorVetor3 = Number(leitor.question());
    var valorVetor4 = Number(leitor.question());
    var vetor1 = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];
    var vetor2 = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];
    var vetorResultante = [vetor1[0] + vetor2[0], vetor1[1] + vetor2[1], vetor1[2] + vetor2[2], vetor1[3] + vetor2[3], vetor1[4] + vetor2[4]];
    console.log(vetor1);
    console.log(vetorResultante);
}
Questao3_1();
