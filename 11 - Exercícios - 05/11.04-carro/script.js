class Carro {
  constructor(marca, cor, combustivelRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.combustivelRestante = combustivelRestante;
    this.consumo = consumo;
  }
  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.combustivelRestante -= litrosConsumidos;
  }
  abastecer(l) {
    this.combustivelRestante += l;
  }
}

let carro = new Carro("Volkswagen", "Grafite", 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);
