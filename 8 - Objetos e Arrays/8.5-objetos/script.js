let person = {
  nome: "Emerson",
  idade: 35,
  profissão: "Programador",
};

console.log(person.nome);
console.log(person["nome"]);
console.log(person.idade);
console.log(person.profissão);
console.log(
  `Olá, me chamo ${person.nome}, tenho ${person.idade} anos e sou ${person.profissão}.`
);
