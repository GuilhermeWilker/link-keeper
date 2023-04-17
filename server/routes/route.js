const express = require("express");
const db = require("../config/db.config");
const router = express.Router();

// DEFININDO ROTAS DE COLEÇÕES
// [Renderizando coleções]
router.get("/collection", (req, res) => {
  let sql = "SELECT * FROM link_keeper.collections";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//  [Adicionando coleções]
router.post("/collection", (req, res) => {
  const { name } = req.body;

  let sql = `INSERT INTO collections (name) VALUES ("${name}")`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Vaga adicionada com sucesso!");
    console.log("Vaga adicionada com sucesso!");
  });
});

module.exports = router;
