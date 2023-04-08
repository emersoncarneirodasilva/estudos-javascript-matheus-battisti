const reg1 = new RegExp("camarão");

console.log(reg1.test("tem camarão?"));
console.log(reg1.test("Não tem!"));

// Outra forma de escrever
const reg2 = /bacalhau/;

let text = "Nessa semana santa terá bacalhau!";

console.log(reg2.test("tem bacalhau?"));
console.log(reg2.test("Não tem!"));
console.log(reg2.test(text));

// Outra forma de escrever
console.log(/atum/.test("Também teremos atum!"));
console.log(
  /atum/.test("fasdfasfdasdasdfasdfaatumsdfasdfasdfasdfasdfasdfasdfasdf!")
);
console.log(/atum/.test("Não teremos!"));
