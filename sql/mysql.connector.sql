create database bdtecnologia;
use bdtecnologia;
create table tbusuario (
cod_user int auto_increment primary key,
nome varchar(80),
idade int,
email varchar(70)
);
show databases;
show tables;
desc tbusuario;
insert into tbusuario(nome,idade,email)
values
("Andressa","22","dre.emy@outlook.com");
select *from tbusuario;