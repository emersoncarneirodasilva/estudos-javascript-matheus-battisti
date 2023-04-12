let express = require("express");
let app = express(); // Instanciando o método express
let port = 3000;

app.get("/", function (req, res) {
  res.send("Primeira rota com Express");
});

app.get("/teste", function (req, res) {
  res.send("Testando rotas");
});

app.listen(port, function () {
  console.log(`A aplicação está funcionando na porta ${port}`);
});
