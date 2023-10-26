import { defaultValueSchemable } from "sequelize/types/utils";

console.log("Hello World");

var leitor = require("readline-sync");

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

function ex12(){
    let num = leitor.question("Número: ");

    if (num % 2 == 0){
        console.log("Par");
    }
    else{
        console.log("Ímpar");
    }
}

//ex12();

function ex13(){
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

function ex14(){
    let temperatura = parseFloat(leitor.question("Temperatura: "));
    if (temperatura <= 18){
        console.log("Frio");
    }
    else if (temperatura > 19 && temperatura < 23){
        console.log("Agradável");
    }
    else if (temperatura > 24 && temperatura < 35){
        console.log("Quente");
    }
    else{
        console.log("Muito Quente!");
    }
    

    }


//ex14()

function ex15(){//quero fazer de uma forma mais eficiente, usando as "leis" aprendidas em ED e TecProgramacao. 

    const suite = {
        pernoite: 30,
        precoDia: 60
    };

    const suiteMaster = {
        pernoite: 50,
        precoDia: 90
    };

    const suiteMegaBlaster = {
        pernoite: 80, 
        precoDia: 140
    };

    console.log("1 - Suite \n 2 - Suite Master \n 3 - Suite MEGA Blaster.");
    let tipoQuarto = parseFloat(leitor.question("Tipo do quarto: "));    
    
    let tipoCalculo =  leitor.question("Horas ou dias? ");
    
    let quantidadeTempo = parseFloat(leitor.question("Qual o período? "));

    if (tipoQuarto == 1){
        if (tipoCalculo == "dias"){
            console.log(suite.precoDia * quantidadeTempo);
        }

        else if (tipoCalculo == "horas"){
            console.log(suite.pernoite * quantidadeTempo);
        }

        else{
            console.log("Valor incorreto, digite (dias) ou (horas). ");
        }
    }

    else if (tipoQuarto == 2){
        if(tipoCalculo == "dias"){
            console.log(suiteMaster.precoDia * quantidadeTempo);
        }
        else if (tipoCalculo == "horas"){
            console.log(suiteMaster.pernoite * quantidadeTempo);
        }

        else{
            console.log("Valor incorreto, digite (dias) ou (horas)");
        }
    }

    else if (tipoQuarto == 3){
        if(tipoCalculo == "dias"){
            console.log(suiteMegaBlaster.precoDia * quantidadeTempo);
        }
        else if (tipoCalculo == "horas"){
            console.log(suiteMegaBlaster.pernoite * quantidadeTempo);
        }

        else{
            console.log("Valor incorreto, digite (dias) ou (horas)");
        }
    }

}


function ex15_parte2(){

    interface Plano  {
        perNoite:number,
        precoDia:number
    }

    function constroiPlano (perNoite: number, precoDia: number){
        const plano: Plano ={
            perNoite ,
            precoDia
        }

        return plano
    }

    const suite = constroiPlano(30, 60);
    const suiteMaster = constroiPlano(50, 90);
    const suiteMegaBlaster = constroiPlano(80, 140);

    let escolha = leitor.question("")



}




//ex15()

function ex16(){
    let diaSemana = parseFloat(leitor.question("Digite um número de 1 a 7: "));
    
    switch (diaSemana) {
        case 1:
            console.log("segunda-feira");
            break;
        case 2:
            console.log("terca-feira");
            break
        case 3:
            console.log("quarta-feira");
            break
        case 4: 
            console.log("quinta-feira");
            break
        case 5:
            console.log("sexta-feira");
            break
        case 6:
            console.log("sabado");
            break
        case 7:
            console.log("domingo");
            break

        default:
            console.log("digite um número válido");
            break
    }
}

// ex16()

