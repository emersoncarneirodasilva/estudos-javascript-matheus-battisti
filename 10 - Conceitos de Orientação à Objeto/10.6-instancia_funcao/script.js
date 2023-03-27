function criarGato(raca) {
  let gato = Object.create({});
  gato.raca = raca;
  return gato;
}

let siames = criarGato("Siamês");
console.log(siames);
console.log(siames.raca);

// Outro exemplo

function criarCarro(marca, rodas, portas, cor) {
  let carro = Object.create({});
  carro.marca = marca;
  carro.rodas = rodas;
  carro.portas = portas;
  carro.cor = cor;

  return carro;
}

let carro = criarCarro("Volkswagen", 4, 4, "Grafite");
console.log(carro);
console.log(`Marca: ${carro.marca}`);
console.log(`Rodas: ${carro.rodas}`);
console.log(`Portas: ${carro.portas}`);
console.log(`Cor: ${carro.cor}`);

let carro2 = criarCarro("Fiat", 4, 2, "Branco");
console.log(carro2);
console.log(`Marca: ${carro2.marca}`);
console.log(`Rodas: ${carro2.rodas}`);
console.log(`Portas: ${carro2.portas}`);
console.log(`Cor: ${carro2.cor}`);
