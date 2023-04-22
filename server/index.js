const app = require("./config/server.config");
const PORT = 3000;
const cors = require("cors");
const router = require("./routes/route");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const JWTsecret = "dfhsjbaresd7r8ayuh4a5lkrts";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", router);

// Inicializando o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
