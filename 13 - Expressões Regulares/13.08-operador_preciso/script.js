const cep = /\d{5}-\d{3}/;

console.log(cep.test("59070-600"));
console.log(cep.test("5970-600"));
console.log(cep.test("59070-60"));

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(85)99999-9999"));
console.log(telefone.test("(85)9999-9999"));
console.log(telefone.test("(8)9999-9999"));
console.log(telefone.test("(85)999-9999"));
console.log(telefone.test("(85)9999-999"));
