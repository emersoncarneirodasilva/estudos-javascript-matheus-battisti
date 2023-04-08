let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("24 maçãs"));
console.log(frutas.test("8 laranjas"));
console.log(frutas.test("5 pêras"));

console.log(frutas.test("10bananas"));
console.log(frutas.test("bananas"));
console.log(frutas.test("10"));

// Outro exemplo
const nome = /\w+: (Emerson|Raiane|Maria)/;

console.log(nome.test("Nome: Emerson"));
console.log(nome.test("Nome: Raiane"));
console.log(nome.test("Nome: Maria"));
console.log(nome.test("Nome: José"));
console.log(nome.test(": Emerson"));
console.log(nome.test("Nome: "));
