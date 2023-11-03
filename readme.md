# API REST

## Descrição

Este é um projeto de uma API REST para gerenciar informações de alunos. A API permite criar, listar, buscar, atualizar e deletar informações de alunos em um banco de dados PostgreSQL.

## Requisitos

Certifique-se de que você tem as seguintes dependências instaladas para executar a API:

- Node.js
- PostgreSQL
- Pacotes Node.js listados no arquivo `package.json`

## Instalação

1. Clone o repositório para o seu ambiente local.
2. Execute `npm install` para instalar as dependências necessárias.
3. Configure as variáveis de ambiente no arquivo `.env` com suas informações de banco de dados e configurações.

## Uso

- `npm run dev`: Inicie o servidor em modo de desenvolvimento com recarregamento automático.
- `npm start`: Inicie o servidor em produção.

A API estará disponível em `http://localhost:PORT`, onde `PORT` é a porta definida nas variáveis de ambiente.

## Documentação Swagger

A API é documentada com Swagger. Você pode acessar a documentação em `http://localhost:PORT/api-docs` para obter informações detalhadas sobre as rotas disponíveis.

## Dependências

- [dotenv](https://www.npmjs.com/package/dotenv): Para carregar variáveis de ambiente a partir de um arquivo `.env`.
- [express](https://www.npmjs.com/package/express): Framework Node.js para construir APIs REST.
- [joi](https://www.npmjs.com/package/joi): Validação de dados para as requisições da API.
- [knex](https://www.npmjs.com/package/knex): Construtor de consultas SQL para interagir com o banco de dados PostgreSQL.
- [pg](https://www.npmjs.com/package/pg): Pacote Node.js para interagir com o banco de dados PostgreSQL.
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc): Gere automaticamente a documentação Swagger a partir de comentários JSDoc.
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express): Interface do Swagger para visualizar a documentação da API.

## Autor

Elias Lopes

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo `LICENSE` para obter mais detalhes.
