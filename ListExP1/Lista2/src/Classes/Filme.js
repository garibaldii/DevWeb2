"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(titulo, duracaoEmMinutos) {
        this.titulo = titulo;
        this.duracaoEmMinutos = duracaoEmMinutos;
    }
    //Getters
    Filme.prototype.getTitulo = function () {
        return this.titulo;
    };
    Filme.prototype.getDuracaoEmMinutos = function () {
        return this.duracaoEmMinutos;
    };
    //
    // Setters
    Filme.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Filme.prototype.setDuracaoEmMinutos = function (duracaoEmMinutos) {
        this.duracaoEmMinutos = duracaoEmMinutos;
    };
    //
    Filme.prototype.exibirDuracaoEmHoras = function (duracaoEmMinutos) {
        var minutos = (duracaoEmMinutos % 60);
        var hora = ~~(duracaoEmMinutos / 60);
        return "o filme ".concat(this.getTitulo(), " possui ").concat(hora, " horas e ").concat(minutos, " minutos de gravacao");
    };
    return Filme;
}());
exports.Filme = Filme;
var ET = new Filme("ET, o extraterrestre", 105);
console.log(ET.exibirDuracaoEmHoras(ET.getDuracaoEmMinutos()));
module.exports = Filme;
