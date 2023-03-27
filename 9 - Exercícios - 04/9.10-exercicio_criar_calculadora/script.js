const calculadora = {
  soma: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.log(calculadora.soma(3, 5));
console.log(calculadora.subtrair(3, 5));
console.log(calculadora.multiplicar(3, 5));
console.log(calculadora.dividir(3, 5));

console.log(calculadora.soma(1, 1));
console.log(calculadora.subtrair(5, 1));
console.log(calculadora.multiplicar(2, 6));
console.log(calculadora.dividir(5, 5));
