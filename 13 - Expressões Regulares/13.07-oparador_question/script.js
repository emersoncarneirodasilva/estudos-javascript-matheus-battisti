let padrao = /Abobo?ra/;

// O opcional seria a letra "o"
console.log(padrao.test("Abobora"));
console.log(padrao.test("Abobra"));
console.log(padrao.test("Abora"));
console.log(padrao.test("Abobo"));

let padrao2 = /\d+\w?/;

console.log(padrao2.test("5123"));
console.log(padrao2.test("asddas"));
console.log(padrao2.test("5123dasdasd"));
console.log(padrao2.test("5123 "));
