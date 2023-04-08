const validarDataDeNascimento = /[0-31]{2}[/][0-12]{2}[/][1920-2023]{4}/;

console.log(validarDataDeNascimento.test("18/12/1987"));
console.log(validarDataDeNascimento.test("18-12-1987"));
console.log(validarDataDeNascimento.test("18/12/87"));
console.log(validarDataDeNascimento.test("8/12/1987"));
console.log(validarDataDeNascimento.test("18/2/1987"));
console.log(validarDataDeNascimento.test("40/12/1987"));
console.log(validarDataDeNascimento.test("18/25/1987"));
console.log(validarDataDeNascimento.test("18/12/1287"));
console.log(validarDataDeNascimento.test("ABCDE 18/12/1987"));
