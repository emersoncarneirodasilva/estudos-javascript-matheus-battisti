function multiplicarTresNumeros(numero1, numero2, numero3) {
  return numero1 * numero2 * numero3;
}

console.log(multiplicarTresNumeros(10, 20, 30));

const mult = multiplicarTresNumeros(7, 3, 8);

console.log(`O valor de mult é ${mult}`);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log(`Você tem ${idade} anos e possui cnh, portanto pode dirigir`);
  } else {
    console.log(
      `Você tem ${idade} anos e não possui cnh, portanto não pode dirigir`
    );
  }
}

podeDirigir(14, true);
podeDirigir(19, false);
podeDirigir(20, true);
podeDirigir(21, 0);
podeDirigir(21, 1);
