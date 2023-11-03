const Joi = require("joi");

const alunoSchema = Joi.object({
  nome: Joi.string().required(),
  idade: Joi.number().integer().required(),
  nota_primeiro_semestre: Joi.number().required(),
  nota_segundo_semestre: Joi.number().required(),
  nome_professor: Joi.string().required(),
  numero_sala: Joi.number().integer().required(),
});

module.exports = alunoSchema;
