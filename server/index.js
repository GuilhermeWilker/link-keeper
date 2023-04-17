const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

const mensagem = "API funcionando";

// Definindo rotas
app.get("/teste", (req, res) => {
  res.statusCode = 200;
  res.send("API FUNCIONANDO");
});

// Inicializando o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
