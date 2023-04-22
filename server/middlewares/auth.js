const jwt = require("jsonwebtoken");
const secret = "ahfsekj43wrelsdk";

// Função para gerar o token de autenticação
const generateToken = (userId) => {
  const payload = {
    userId: userId,
  };
  const options = {
    expiresIn: "48h",
  };
  const token = jwt.sign(payload, secret, options);
  return token;
};

// Verificando se o token é válido
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.userId = payload.userId;
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
