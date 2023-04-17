const app = require("./config/server.config");
const PORT = 3000;
const router = require("./routes/route");

app.use("/", router);

// Inicializando o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
