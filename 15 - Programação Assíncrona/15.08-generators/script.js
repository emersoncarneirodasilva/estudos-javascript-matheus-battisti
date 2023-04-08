function* gerarId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

let criarId = gerarId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);

console.log(criarId.next());
