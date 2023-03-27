let idade = 19;

if (idade == 19) {
  console.log(`Sua idade é 19 anos!`);
}

if (idade > 25) {
  console.log("A idade é maior que 25");
}

let nome = "Emerson";

if (nome == "Emerson" && idade > 10) {
  console.log("Liberado!");
}

let passaporte = true;

if ((nome == "Emerson" && idade > 30) || passaporte == true) {
  console.log("Passaporte liberado!");
}
