let promessa = Promise.resolve("Essa é a promessa");

console.log("Algumas coisas");

console.log(promessa);

promessa
  .then((value) => {
    return value;
  })
  .then((value) => {
    console.log(`O valor é ${value}`);
  });
