function parImpar(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(`O número ${i} é par.`);
    } else {
      console.log(`O número ${i} é ímpar.`);
    }
  }
}

parImpar(10);
parImpar(20);
