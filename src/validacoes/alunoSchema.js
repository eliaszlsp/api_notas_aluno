const Joi = require("joi");

const alunoSchema = Joi.object({
  nome: Joi.string().required().messages({
    "string.base": "O campo nome deve ser uma string",
    "string.empty": "O campo nome não pode estar vazio",
    "any.required": "O campo nome é obrigatório",
  }),
  idade: Joi.number().integer().required().messages({
    "number.base": "O campo idade deve ser um número",
    "number.integer": "O campo idade deve ser um número inteiro",
    "any.required": "O campo idade é obrigatório",
  }),
  nota_primeiro_semestre: Joi.number().required().messages({
    "number.base": "O campo nota do primeiro semestre deve ser um número",
    "any.required": "O campo nota do primeiro semestre é obrigatório",
  }),
  nota_segundo_semestre: Joi.number().required().messages({
    "number.base": "O campo nota do segundo semestre deve ser um número",
    "any.required": "O campo nota do segundo semestre é obrigatório",
  }),
  nome_professor: Joi.string().required().messages({
    "string.base": "O campo nome do professor deve ser uma string",
    "string.empty": "O campo nome do professor não pode estar vazio",
    "any.required": "O campo nome do professor é obrigatório",
  }),
  numero_sala: Joi.number().integer().required().messages({
    "number.base": "O campo número da sala deve ser um número",
    "number.integer": "O campo número da sala deve ser um número inteiro",
    "any.required": "O campo número da sala é obrigatório",
  }),
});

module.exports = alunoSchema;
