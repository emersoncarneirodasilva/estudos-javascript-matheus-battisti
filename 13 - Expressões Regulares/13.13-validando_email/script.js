let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("emailteste@aol.com"));
console.log(validarEmail.test("testemail@email"));
console.log(validarEmail.test("fulanodetal@yahoo.com.br"));
console.log(validarEmail.test("email.com"));
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));
