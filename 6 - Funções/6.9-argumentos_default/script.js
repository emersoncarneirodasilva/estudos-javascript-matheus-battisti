function repatirFrase(frase, n = 2) {
  for (let x = 1; x <= n; x++) {
    console.log(`${frase} ${x}`);
  }
}

repatirFrase("Aprendendo JavaScript", 5);
repatirFrase("Aprendendo Node.js");

function potencia(base, expoente = 2) {
  return Math.pow(base, expoente);
}

console.log(potencia(2, 3));
console.log(potencia(7));
