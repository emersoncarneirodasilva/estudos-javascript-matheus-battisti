const validarNome = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNome.test("emerson_1234"));
console.log(validarNome.test("qw"));
console.log(validarNome.test("123441234"));
console.log(validarNome.test("qwetgqergf123552135"));
