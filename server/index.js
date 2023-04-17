const app = require("./config/server.config");
const PORT = 3000;
const router = require("./routes/route");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

// Inicializando o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
