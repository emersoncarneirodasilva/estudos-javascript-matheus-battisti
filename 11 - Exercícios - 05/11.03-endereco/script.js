class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
  set novaRua(novaRua) {
    this.rua = novaRua;
  }
  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }
  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }
  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

let endereco = new Endereco(
  "Rua de alguma coisa",
  "Algum lugar aeh",
  "Fica na terra",
  "Sistema Solar"
);

console.log(endereco);

endereco.novaRua = "Rua existente";
console.log(endereco);

endereco.novoBairro = "Esse lugar mesmo";
console.log(endereco);

endereco.novaCidade = "Na terra";
console.log(endereco);

endereco.novoEstado = "Universo";
console.log(endereco);
