const express = require("express");
const router = express.Router();

// Definindo rotas
router.get("/teste", (req, res) => {
  res.statusCode = 200;
  res.send("API FUNCIONANDO");
});

router.get("/teste2", (req, res) => {
  res.statusCode = 200;
  res.send("CHAMA PAPITO");
});

module.exports = router;
