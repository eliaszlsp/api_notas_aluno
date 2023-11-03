const express = require("express");
const app = express();
const rotas = require("./rotas/rotas");
const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger.json");

app.use(express.json());
app.use(rotas);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
