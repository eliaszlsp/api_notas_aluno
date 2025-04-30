
const knex = require("knex");

require('dotenv').config();
const db = knex({
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
  },
});
console.log('\nVariáveis de ambiente atuais:');
console.log('DB_USER:', process.env.DB_USER || 'não definido');
console.log('DB_HOST:', process.env.DB_HOST || 'não definido');
console.log('DB_DATABASE:', process.env.DB_DATABASE || 'não definido');
console.log('DB_PORT:', process.env.DB_PORT || 'não definido');
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '******' : 'não definido');

module.exports = db;
