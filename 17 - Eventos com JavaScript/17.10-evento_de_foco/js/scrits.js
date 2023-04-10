let input = document.querySelector("input");
console.log(input);

input.addEventListener("focus", () => {
  console.log("Entrou no input");
});

input.addEventListener("blur", () => {
  console.log("Saiu do input");
});
