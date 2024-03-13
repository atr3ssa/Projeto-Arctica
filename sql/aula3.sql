create database bdhospital;
use bdhospital;
create table tbpaciente(
pac_cod int auto_increment primary key,
pac_paciente varchar(90),
pac_rg varchar(80),
pac_datanascimento date,
pac_medico int
);
show databases;
show tables;
desc tbpaciente;

insert into tbpaciente
(pac_paciente,pac_rg,pac_datanascimento,pac_medico)
value
("Antonio","6758NUA-0","2001-03-06","2090");

insert into tbpaciente(
pac_paciente,pac_rg,pac_datanascimento,pac_medico)
value
("Laura","542AAAA8","2005-03-19","7990");


select *from tbpaciente where pac_cod =2;

delete from tbpaciente where pac_cod =10;

select*from tbpaciente;

update tbpaciente set
pac_paciente = "Andressa",
pac_rg = "4941702-7",
pac_medico = "9999"
where
pac_cod = 1;

