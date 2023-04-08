async function soma(a, b) {
  return a + b;
}

console.log(soma(2, 4));

soma(2, 5).then((value) => {
  console.log(value);
});
