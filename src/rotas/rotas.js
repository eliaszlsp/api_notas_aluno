const express = require("express");
const validacaoAlunos = require("../intermediarios/validacaoAlunos");
const {
  criarAluno,
  listarAlunos,
  buscarAlunoPorId,
  atualizarAlunoPorId,
  deletarAlunoPorId,
} = require("../controladores/alunos");

const rotas = express();

rotas.get("/", (req, res) => {
  res.redirect("/api-docs");
});

rotas.post("/alunos", validacaoAlunos, criarAluno);

rotas.get("/alunos", listarAlunos);

rotas.get("/alunos/:id", buscarAlunoPorId);

rotas.put("/alunos/:id", validacaoAlunos, atualizarAlunoPorId);

rotas.delete("/alunos/:id", deletarAlunoPorId);

module.exports = rotas;
