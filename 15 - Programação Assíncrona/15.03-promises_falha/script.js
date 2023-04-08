let promessaErrada = Promise.resolve(new Error("Algo deu errado"));

promessaErrada
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(`Error: ${reason}`);
  });
