create table alunos (
   id                     serial primary key,
   nome                   varchar(255) not null,
   idade                  int not null,
   nota_primeiro_semestre float not null,
   nota_segundo_semestre  float not null,
   nome_professor         varchar(255) not null,
   numero_sala            int not null
);

insert into alunos (
   nome,
   idade,
   nota_primeiro_semestre,
   nota_segundo_semestre,
   nome_professor,
   numero_sala
) values ( 'elias',
           18,
           9.5,
           8.5,
           'joao',
           10 );