const express = require("express");
const db = require("../config/db.config");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");

// DEFININDO ROTAS DE COLEÇÕES
// [Renderizando coleções]
router.get("/collection", verifyToken, (req, res) => {
  let sql = "SELECT * FROM link_keeper.collections";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//  [Adicionando coleções]
router.post("/collection", verifyToken, (req, res) => {
  const { name } = req.body;

  let sql = `INSERT INTO collections (name) VALUES ("${name}")`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ name });
    console.log("Vaga adicionada com sucesso!");
  });
});

// [Deletando coleções]
router.delete("/collection/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM collections WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ id });
    console.log("Coleção excluída com sucesso!");
  });
});

module.exports = router;
