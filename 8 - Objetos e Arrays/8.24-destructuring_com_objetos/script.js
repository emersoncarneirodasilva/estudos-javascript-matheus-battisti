const person = {
  name: "Emerson",
  lastname: "Carneiro da Silva",
};

const { name: fname, lastname: lname } = person;

console.log(fname);
console.log(lname);

const car = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: "2.0",
};

const {
  rodas: vRodas,
  portas: vPortas,
  tetosolar: vTetoSolar,
  motor: vMotor,
} = car;

console.log("Rodas:", vRodas);
console.log("Portas:", vPortas);
console.log("Teto Solar:", vTetoSolar);
console.log("Motor:", vMotor);
