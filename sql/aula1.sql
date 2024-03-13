create database bdacademiaforte;
use bdacademiaforte;
create table tbaluno(
codigo int auto_increment primary key,
nome varchar(80) not null,
uf char(2),
salario decimal(6,2),
data_nascimento date,
altura float,
peso int
);
-- query para exibir as bases de dados
show databases;
show tables;
desc tbalunos; 

rename table tbaluno to tbalunos;
alter table tbalunos add email varchar(90);
alter table tbalunos change
email mail varchar(100);

alter table tbalunos drop mail;
drop table tbalunos;
drop database bdacademiaforte;

create database bdacademiafraco;
use bdacademiafraco;
create table tbprofessor(
codigo int auto_increment primary key,
ṕrofessor varchar(90),
treino varchar(50)
);
show databases;
show tables;
desc tbprofessor;

-- CRUD - DDL --
-- CRUD - DML --

insert into tbprofessor
(professor, treino)
values
('Daniel Almeida','Terça');

select *from tbprofessor; -- usar apenas quando tiver pausa p/ utilização. Nunca durante o uso
select *from tbprofessor where codigo = 1; -- para achar um código específico e em qualquer momento.

