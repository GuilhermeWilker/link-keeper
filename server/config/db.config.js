const mysql = require("mysql");
require("dotenv").config();

// Configuração e Conexão com Banco de Dados MySQL
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

db.connect((err, results) => {
  if (err) throw err;
  console.log("Banco de dados conectado com sucesso!!");
});

module.exports = db;
