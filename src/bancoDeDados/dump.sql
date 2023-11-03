CREATE DATABASE escola;

CREATE TABLE
    alunos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        idade INT NOT NULL,
        nota_primeiro_semestre FLOAT NOT NULL,
        nota_segundo_semestre FLOAT NOT NULL,
        nome_professor VARCHAR(255) NOT NULL,
        numero_sala INT NOT NULL
    );

    INSERT INTO alunos (nome, idade, nota_primeiro_semestre, nota_segundo_semestre, nome_professor, numero_sala)
VALUES ('elias', 18, 9.5, 8.5, 'joao', 10);