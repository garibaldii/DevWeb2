let leitor = require('readline-sync');

function Exercicio1() {
    let x = leitor.question("Digite um número: ");

    parseInt(x)


    if (x > 0) {
        console.log("O número é positivo");
    }
    else if (x == 0) {
        console.log("o número é neutro");
    }

    else {
        console.log("O número é negativo");
    }
}
//Exercício 2 //

function Exercicio2() {

    let x = leitor.question("Digite um número: ");

    if (x > 10 && x < 20) {
        console.log("O número está entre 10 e 20");
    }
    else {
        console.log("O número não pertence ao intervalo de 10 e 20");
    }

}

function VerificaDiaDaSemana() {

    const dia = Number(leitor.question("Digite o dia"));

    switch (dia) {
        case 1:
            console.log("Hoje é Segunda-Feira!");
            break;

        case 2:
            console.log("Hoje é Terça-Feira!");
            break;

        default:
            console.log("Professora ficou com preguiça!");
    }

}

VerificaDiaDaSemana();

function ExercicioAula1(){
    let instalacao = leitor.question("Instalação: ");
    let quilowattHora = leitor.question("KWh: ");
    let preco = 0;
    let formula = quilowattHora * preco;

    switch (instalacao) {
        case 'R':
            if (quilowattHora < 500){
                preco = .4;
            }
            else{
                preco = .65;
            }
            break;
        case 'C':
            if (quilowattHora < 1000){
                preco = .55;
            }
            else{
                preco = .6
            }
            break
        
        case 'I':
            if (quilowattHora < 5000){
                preco = .55;
            }
            else{
                preco = .6
            }
            break;
        
    

        default:
            console.log("Escolha R, I ou C! ");
    }

    console.log(`MODALIDADE = ${instalacao}, Kwh = ${quilowattHora}, GASTO = ${formula}`);
}