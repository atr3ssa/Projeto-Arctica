create database bdlojinha;
use bdlojinha;
create table tbestoque(
codproduto int auto_increment primary key,
produto varchar(80) not null,
valor decimal(6,2) not null,
qtde int not null,
marca varchar(30),
setor varchar(30)
);
show databases;
show tables;
desc tbproduto;

rename table tbestoque to tbproduto;
alter table tbproduto change produto nomeproduto varchar(60);
alter table tbproduto drop setor;
alter table tbproduto add nomevendedor varchar(100);
alter table tbproduto change nomevendedor vendedor varchar(100);
 
insert into tbproduto(
nomeproduto,valor,qtde,marca,vendedor)
value
("Camisa polo",100,20,"Nike","Vanessa");

select* from tbproduto;
select* from tbproduto where codproduto;
select nomeproduto from tbproduto;
select* from tbproduto where marca="Nike";
delete from tbproduto where codproduto

