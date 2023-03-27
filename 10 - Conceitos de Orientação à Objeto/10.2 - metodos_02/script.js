let pessoa = {
  nome: "",
  setName: function (novoNome) {
    this.nome = novoNome;
  },
  getNome: function () {
    return this.nome;
  },
};

pessoa.setName("Emerson");

console.log(pessoa.getNome());

// Outro exemplo

let cachorro = {
  raca: "SRD",
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return `A raça é: ${this.raca}`;
  },
};

console.log(cachorro.raca);

cachorro.setRaca("Dalmata");
console.log(cachorro.raca);

console.log(cachorro.getRaca());
