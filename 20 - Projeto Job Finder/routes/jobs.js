// Rota que fará a adição de jobs
const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Rota de teste
router.get("/teste", (req, res) => {
  res.send("Deu certo a rota teste!");
});

// Form da rota de envio
router.get("/add", (req, res) => {
  res.render("add");
});

// Detalhe da vaga
router.get("/view/:id", (req, res) => {
  Job.findOne({ where: { id: req.params.id } })
    .then((job) => {
      res.render("view", { job });
    })
    .catch((error) => console.log(error));
});

// Form da rota de envio
router.get("/add", (req, res) => {
  res.render("add");
});

// Adição do job via post
router.post("/add", (req, res) => {
  // Dados de título, salário, empresa, descrição, email, novo emprego
  let { title, salary, company, description, email, new_job } = req.body;

  // Inserir dados no sistema
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => console.error(error));
});

module.exports = router;
