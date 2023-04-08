let ano = /\d\d\d\d/;

console.log(ano.test("02"));
console.log(ano.test("190q"));
console.log(ano.test("asSdGF"));
console.log(ano.test("1987"));
console.log(ano.test("asdasde1987dae4t243e2"));

let mes = /\d\d/;

console.log(mes.test("2139") && "2139".length == 2);
console.log(mes.test("qwdert"));
console.log(mes.test("qwd24ert") && "qwd24ert".length == 2);
console.log(mes.test("02") && "02".length == 2);

const palavrasPeloMenosTresLetras = /\w\w\w/;

console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdd"));
console.log(palavrasPeloMenosTresLetras.test("as"));
