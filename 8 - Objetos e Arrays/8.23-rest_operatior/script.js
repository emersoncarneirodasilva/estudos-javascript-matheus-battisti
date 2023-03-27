let num = 7;
let num2 = 84;
let num3 = 100;
let num4 = 0;
let num5 = 10;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros("Primeira sequência", num, num2, num3, num4, num5);
imprimirNumeros("Segunda sequência", num2, num, num4);
imprimirNumeros("Terceira sequência", 1, 4, 53, 19, 09, 13, 198);
