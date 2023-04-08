const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 8?"));
console.log(reg1.test("Temos o número 3?"));
console.log(reg1.test("Temos o número 17808?"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 8?"));
console.log(reg2.test("Temos o número 10?"));
console.log(reg2.test("Temos o número 70?"));
console.log(reg2.test("Temos algum número?"));
