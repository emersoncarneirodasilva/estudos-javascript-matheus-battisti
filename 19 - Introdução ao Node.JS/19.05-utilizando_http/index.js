const { createServer } = require("http");

let port = 8000;

let server = createServer((request, response) => {
  //  Iniciando uma resposta
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
  <h1>Hello World!</h1>
  <p>Primeira pagina com Node.JS</p>
  `);
  // Finalizando a resposta
  response.end();
});

server.listen(port);

console.log(`Ouvindo a porta ${port}`);
