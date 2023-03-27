function imprimirNoConsole() {
  console.log("Hello World!");
}

imprimirNoConsole();

function imprimirNumero(numero) {
  console.log(`O número é ${numero}`);
}

imprimirNumero(7);
imprimirNumero(867);
imprimirNumero(093);
imprimirNumero(-123);

const numeroAleatorio = function () {
  console.log(Math.random().toFixed(2) * 100);
};

numeroAleatorio();
numeroAleatorio();
