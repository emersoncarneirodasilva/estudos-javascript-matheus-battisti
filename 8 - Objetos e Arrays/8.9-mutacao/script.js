let jogadorA = {
  pontos: 10,
};

jogadorB = jogadorA;

let jogadorC = {
  pontos: 10,
};

console.log(jogadorA == jogadorB);
console.log(jogadorA == jogadorC);

let pessoa = {
  nome: "Emerson",
};

let pessoa2 = pessoa;
let pessoa3 = {
  nome: "Emerson",
};

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Pedro";
console.log(pessoa.nome);

pessoa.nome = "Maria";
console.log(pessoa2.nome);
