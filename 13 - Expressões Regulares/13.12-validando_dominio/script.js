let validarDominio = /[?www.]\w+\.com.br|.com/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.google.com.br"));
console.log(validarDominio.test("google.com"));
console.log(validarDominio.test("www.com"));
console.log(validarDominio.test("www.google"));
