class Filme {

  private titulo: string;

  private duracaoEmMinutos: number;

  constructor(titulo: string, duracaoEmMinutos: number) {
    this.titulo = titulo;
    this.duracaoEmMinutos = duracaoEmMinutos;
  }

  //Getters
  public getTitulo(): string {
    return this.titulo;
  }

  public getDuracaoEmMinutos(): number {
    return this.duracaoEmMinutos;
  }

  //

  // Setters
  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public setDuracaoEmMinutos(duracaoEmMinutos: number): void {
    this.duracaoEmMinutos = duracaoEmMinutos;
  }
  //

  public exibirDuracaoEmHoras(duracaoEmMinutos: number): string {
    let minutos: number = (duracaoEmMinutos % 60) ;
    let hora: number = ~~(duracaoEmMinutos / 60);

    return `o filme ${this.getTitulo()} possui ${hora} horas e ${minutos} minutos de gravacao`;
  }
}

const ET = new Filme("ET, o extraterrestre", 105);

console.log(ET.exibirDuracaoEmHoras(ET.getDuracaoEmMinutos()));
module.exports = Filme;
