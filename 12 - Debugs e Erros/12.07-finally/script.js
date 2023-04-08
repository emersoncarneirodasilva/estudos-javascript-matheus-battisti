let b = 5;

try {
  let a = 2 + b;
} catch (error) {
  console.error(error);
} finally {
  console.log("O finally foi executado");
}

// console.log("Teste");
