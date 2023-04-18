// Aqui será chamado o sequelize que fará as conexão/alterações com o banco
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/app.db",
});

// Exportação do arquivo
module.exports = sequelize;
