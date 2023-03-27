let number = 17;
let divisoes = 0;

for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log(`O número ${number} é primo!`);
} else {
  console.log(`O número ${number} não é primo"`);
}
