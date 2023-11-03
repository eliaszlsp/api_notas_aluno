const db = require("../bancoDeDados/conexão");
const alunoSchema = require("../validacoes/alunoSchema");

const criarAluno = async (req, res) => {
  try {
    const { error } = alunoSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const body = await db("alunos").insert(req.body, "id").returning("*");
    return res.status(201).json(body[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar aluno" });
  }
};

const listarAlunos = async (req, res) => {
  try {
    const alunos = await db("alunos").select();
    return res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar alunos" });
  }
};

const buscarAlunoPorId = async (req, res) => {
  try {
    const aluno = await db("alunos").where({ id: req.params.id }).first();
    if (aluno) {
      return res.status(200).json(aluno);
    } else {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar aluno" });
  }
};

const atualizarAlunoPorId = async (req, res) => {
  try {
    const { error } = alunoSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updated = await db("alunos")
      .where({ id: req.params.id })
      .update(req.body);

    if (updated) {
      return res.json({ message: "Aluno atualizado com sucesso" });
    } else {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar aluno" });
  }
};

const deletarAlunoPorId = async (req, res) => {
  try {
    const deleted = await db("alunos").where({ id: req.params.id }).del();

    if (deleted) {
      return res.status(200).json({ message: "Aluno deletado com sucesso" });
    } else {
      res.status(404).json({ error: "Aluno não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar aluno" });
  }
};

module.exports = {
  criarAluno,
  listarAlunos,
  buscarAlunoPorId,
  atualizarAlunoPorId,
  deletarAlunoPorId,
};
