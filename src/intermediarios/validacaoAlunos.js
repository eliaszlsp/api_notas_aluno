const alunoSchema = require("../validacoes/alunoSchema");

const validarRequisicao = async (req, res, next) => {
  try {
    await alunoSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
module.exports = validarRequisicao;
