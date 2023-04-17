const express = require("express");
require("dotenv").config();
const mysql = require("mysql");

const app = express();
const PORT = 3000;

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

// Definindo rotas
app.get("/teste", (req, res) => {
  res.statusCode = 200;
  res.send("API FUNCIONANDO");
});

// Inicializando o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
