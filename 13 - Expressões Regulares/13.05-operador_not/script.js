const notab = /[^ab]/;

// Palavras que não possuem a e b isolados
console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));
console.log(notab.test("b"));
console.log(notab.test("bola"));

const notvzxy = /[^a-z]/;

console.log(notvzxy.test("Aqui tem a"));
console.log(notvzxy.test("asd"));
console.log(notvzxy.test("1244"));
console.log(notvzxy.test("1244 asdfq"));
console.log(notvzxy.test("fasdfqwefgqwegrqwgqwergqwerg"));
