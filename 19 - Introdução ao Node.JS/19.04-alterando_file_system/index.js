let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

writeFile("arquivo.txt", "Inserido um novo texto!", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Texto modificado com sucesso!");
  }
});
