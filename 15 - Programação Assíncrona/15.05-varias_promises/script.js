const promessa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primeira promessa");
  }, 3000);
});

const promessa2 = Promise.resolve("Segunda promessa");

const promessa3 = new Promise((resolve, reject) => {
  resolve("Terceira promessa");
});

Promise.all([promessa1, promessa2, promessa3]).then((values) =>
  console.log(values)
);
