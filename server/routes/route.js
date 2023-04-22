const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../config/db.config");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { verifyToken, generateToken } = require("../middlewares/auth");

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

// DEFININDO ROTAS DE AUTENTICAÇÃO
// [cadastro de usuários]
router.post("/register", (req, res) => {
  const { email, password, username } = req.body;

  // Verifica se todos os campos foram fornecidos
  if (!email || !password || !username) {
    return res.status(400).json({ msg: "Por favor, preencha todos os campos" });
  }

  // Verifica se o email já existe no banco de dados
  let sql = `SELECT * FROM users WHERE email = '${email}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      return res.status(400).json({ msg: "Este email já está cadastrado" });
    }

    // Criptografa a senha antes de inserir no banco de dados
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) throw err;

      // Insere o novo usuário no banco de dados
      sql = `INSERT INTO users (email, password, username) VALUES ('${email}', '${hashedPassword}', '${username}')`;
      db.query(sql, (err, result) => {
        if (err) throw err;

        // Gera um token de autenticação para o novo usuário
        const token = generateToken(result.insertId);

        // Retorna o token de autenticação para o usuário
        res.json({ token });
        console.log("Usuário registrado com sucesso!");
      });
    });
  });
});

// [login de usuário]
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Busca o usuário no banco de dados pelo email
  let sql = `SELECT * FROM users WHERE email = "${email}"`;

  db.query(sql, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      // Se o usuário existe, verifica se a senha está correta
      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          // Se a senha está correta, gera o token de acesso
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });

          // Retorna o token de acesso e algumas informações do usuário
          res.json({
            token,
            userId: user.id,
            email: user.email,
            username: user.username,
          });
        } else {
          // Senha incorreta
          res.status(401).json({ message: "Senha incorreta" });
        }
      });
    } else {
      // Usuário não encontrado
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  });
});

module.exports = router;
