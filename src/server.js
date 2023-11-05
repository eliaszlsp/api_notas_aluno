const express = require("express");
const app = express();
const rotas = require("./rotas/rotas");
const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger.json");
require("dotenv").config();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use(rotas);

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
