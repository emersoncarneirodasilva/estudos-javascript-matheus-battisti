let nomes = ["Marcela", "Frederico", "Carlos", "Emerson", "Maria"];

let numeros = [1, 4, 23, 2839];

function verificaElementosArray(arr) {
  if (arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

verificaElementosArray(nomes);
verificaElementosArray(numeros);
