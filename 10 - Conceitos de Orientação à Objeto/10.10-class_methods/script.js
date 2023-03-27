class Gato {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
  miar() {
    console.log("Miauuuu");
  }
}

Gato.prototype.genero = "Fêmea";

let siames = new Gato("Siamês", 4, "cinza e branco");

console.log(siames);
console.log(siames.raca);
console.log(siames.patas);
console.log(siames.cor);
console.log(siames.genero);
siames.miar();
