let nome = "Emerson";
let idade = 35;
let cnh = false;

if (idade >= 18 && cnh == false) {
  console.log(
    `Olá ${nome}, você tem ${idade} anos e não possui CNH, portanto não pode dirigir`
  );
} else if (idade >= 18 && cnh == true) {
  console.log(
    `Olá ${nome}, você tem ${idade} anos e possui CNH, portanto pode dirigir`
  );
} else {
  console.log(`Olá ${nome}, você tem ${idade} anos e não pode dirigir!`);
}
