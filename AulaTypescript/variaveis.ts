var leitor = require('readline-sync');
//ESTA VARIÁVEL IRÁ TER TODAS AS FUNCIONALIDAES DA BIBLIOTECA READLINE-SYNC



function Questao1():void  {

    let nome: String = leitor.question('Digite o nome: ')

    let endereco: String = leitor.question('Digite o endereco: ')

    let telefone: Number = leitor.question('Digite o telefone: ')

    console.log(nome, endereco, telefone);


}
function Questao2():void {

    let valor: Number = leitor.question("Valor: ");

    let formula:Number = Number(valor) * 1.1;

    console.log(formula);

}
function Questao3():void{
    let valorHoraAula:Number = leitor.question('Valor Hora Aula: ')
    let qtdAula:Number = leitor.question('Quantidade de aula dada: ')
    let INSS:Number = leitor.question('Desconto do INSS: ')
    
    let INSSFormatado = (Number(INSS)/100) + 1
    let salarioBruto = (Number(valorHoraAula) * Number(qtdAula));
    let salarioLiquido = (salarioBruto * INSSFormatado)

    console.log(salarioLiquido);
}




function Questao3_1():void{
    let valorVetor:number = Number(leitor.question());
    let valorVetor1:number = Number(leitor.question());
    let valorVetor2:number = Number(leitor.question());
    let valorVetor3:number = Number(leitor.question());
    let valorVetor4:number = Number(leitor.question());


    let vetor1:number[] = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];
    let vetor2 = [valorVetor, valorVetor1, valorVetor2, valorVetor3, valorVetor4];

    let vetorResultante = [vetor1[0] + vetor2[0], vetor1[1] + vetor2[1], vetor1[2] + vetor2[2], vetor1[3] + vetor2[3], vetor1[4] + vetor2[4] ]
    console.log(vetor1);
    console.log(vetorResultante)
}

Questao3_1();



