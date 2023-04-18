const express = require("express");
const exphbs = require("express-handlebars");
const favicon = require("express-favicon");
const app = express();
const path = require("path");
const db = require("./db/connection");
const bodyParser = require("body-parser");
const Job = require("./models/Job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta ${PORT}`);
});

// Favicon
app.use(favicon(__dirname + "/public/images/favicon.png"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Handle Bars
const hbs = exphbs.create({ defaultLayout: "main" });
app.set("views", path.join(__dirname, "views")); // Onde ficaram os templates, diretórios das views
app.engine("handlebars", hbs.engine); // Arquivo principal de layout
app.set("view engine", "handlebars"); // Aqui é mostrado para o Express a view engine, framework utilizado para renderizar as views

// Static Folders (arquivos da pasta public)
app.use(express.static(path.join(__dirname, "public")));

// db connection
db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso!");
  })
  .catch((error) => console.error("Ocorreu um erro ao conectar", error));

// Rotas
app.get("/", (req, res) => {
  // Procura (Search)
  let search = req.query.job;
  let query = `%${search}%`; // Faz com que pesquise pelas letras digitadas

  // Encontra as jobs salvas no banco e ordena (DESC = decrescente)
  if (!search) {
    Job.findAll({ order: [["createdAt", "DESC"]] })
      .then((jobs) => {
        res.render("index", { jobs });
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    Job.findAll({
      where: { title: { [Op.like]: query } },
      order: [["createdAt", "DESC"]],
    })
      .then((jobs) => {
        res.render("index", { jobs, search });
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

// Rotas dos jobs
app.use("/jobs", require("./routes/jobs"));
