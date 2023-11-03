const express = require("express");
const app = express();
const rotas = require("./rotas/rotas");
const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger.json");
require("dotenv").config();

app.use(express.json());
app.use(rotas);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

const porta = process.env.PORT;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
