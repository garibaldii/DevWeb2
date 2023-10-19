"use strict";
class Filme {
    constructor(titulo, duracaoEmMinutos) {
        this.titulo = titulo;
        this.duracaoEmMinutos = duracaoEmMinutos;
    }
    //Getters
    getTitulo() {
        return this.titulo;
    }
    getDuracaoEmMinutos() {
        return this.duracaoEmMinutos;
    }
    //
    // Setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setDuracaoEmMinutos(duracaoEmMinutos) {
        this.duracaoEmMinutos = duracaoEmMinutos;
    }
    //
    exibirDuracaoEmHoras(duracaoEmMinutos) {
        let minutos = (duracaoEmMinutos % 60);
        let hora = ~~(duracaoEmMinutos / 60);
        return `o filme ${this.getTitulo()} possui ${hora} horas e ${minutos} minutos de gravacao`;
    }
}
const ET = new Filme("ET, o extraterrestre", 105);
// console.log(ET.exibirDuracaoEmHoras(ET.getDuracaoEmMinutos()));
