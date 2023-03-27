let objetoA = {
  prop1: "valor 1",
  prop2: "valor 2",
};

let objetoB = {
  prop3: "valor 3",
};

Object.assign(objetoA, objetoB);
console.log(objetoA);

Object.assign(objetoB, objetoA);
console.log(objetoB);

let carro = {
  portas: 2,
  portamalas: "200 litros",
  motor: "2.0",
};

let adicionais = {
  tetoSolar: true,
  arcondicionado: true,
};

Object.assign(carro, adicionais);
console.log(carro);
