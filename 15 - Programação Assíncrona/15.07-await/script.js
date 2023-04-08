function somarComDelay(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

async function soma(a, b, c, d) {
  let x = somarComDelay(a, b);
  let y = somarComDelay(c, d);
  return (await x) + (await y);
}

soma(2, 4, 7, 1).then((value) => console.log(value));
