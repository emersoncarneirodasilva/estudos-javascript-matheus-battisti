let cachorro = {
  patas: 4,
  raca: "SRD",
  latir: function () {
    return "Au Au";
  },
};

let dalmata = Object.create(cachorro);
dalmata.raca = "Dalmata";

console.log(`Patas: ${dalmata.patas}`);
console.log(`Raça: ${dalmata.raca}`);
console.log(dalmata.latir());

let labrador = Object.create(cachorro);
labrador.raca = "Labrador";

console.log(`Patas: ${labrador.patas}`);
console.log(`Raça: ${labrador.raca}`);
console.log(labrador.latir());
