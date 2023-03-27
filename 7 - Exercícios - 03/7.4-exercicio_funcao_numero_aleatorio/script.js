function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(1, 10));
console.log(numeroAleatorio(6, 20));
console.log(numeroAleatorio(0, 100));
