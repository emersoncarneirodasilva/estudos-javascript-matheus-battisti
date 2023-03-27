function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Cachorro.prototype.latir = function () {
  console.log("Auuuu");
};

Cachorro.prototype.daPata = function () {
  console.log("Dá pata");
};

let husky = new Cachorro("Husky", 4, "cinza");

console.log(husky);
console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);
husky.latir();
husky.daPata();
