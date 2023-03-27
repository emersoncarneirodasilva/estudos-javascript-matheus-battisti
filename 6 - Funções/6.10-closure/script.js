function armazenarSoma(x) {
  return (y) => x + y;
}

let soma1 = armazenarSoma(5);
console.log(soma1(8));
let soma2 = armazenarSoma(9);
console.log(soma2(7));

function lembrarSoma(x) {
  return function (y) {
    return x + y;
  };
}

let soma3 = lembrarSoma(3);
console.log(soma3(8));

let soma4 = lembrarSoma(5);
console.log(soma4(1));

function contador(i) {
  let cont = i;
  let somaContador = function () {
    console.log(cont);
    cont++;
  };
  return somaContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
